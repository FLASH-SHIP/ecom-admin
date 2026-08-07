"use client";

import type { RowAction } from "@admin/components/data-table";
import { DataTable } from "@admin/components/data-table";
import { CopyCell } from "@admin/components/data-table/CopyCell";
import { useServerTable } from "@admin/components/data-table/hooks/useServerTable";
import type { DataTableServerParams, FilterFieldDef } from "@admin/components/data-table/types";
import { useRequirePermission } from "@admin/components/layout/PermissionGuard";
import { useToast } from "@admin/components/toast-provider";
import { ConfirmDialog } from "@admin/components/ui/ConfirmDialog";
import { useConfirm } from "@admin/components/ui/useConfirm";
import { trpc } from "@admin/lib/trpc";
import { formatDate } from "@admin/utils/dateFormat";
import type { ContentStatus } from "@flash-ship/ecom-types";

type RateCardType = "DEFAULT" | "CUSTOM";
type ShippingMethod = "EXPRESS" | "EPACKET";

import { Permissions } from "@flash-ship/ecom-lib/permissions";
import { Badge } from "@flash-ship/ecom-ui/components/badge";
import { Button } from "@flash-ship/ecom-ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Input } from "@flash-ship/ecom-ui/components/input";
import { keepPreviousData } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, Copy, Eye, Pencil, Plus, Trash2, UserPlus, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";

type RateCardRow = {
  id: number;
  code: string;
  name: string;
  type: RateCardType;
  status: ContentStatus;
  shippingMethod: ShippingMethod;
  country: string;
  origin: string | null;
  currency: string;
  weightStep: number;
  minWeight: number;
  maxWeight: number;
  startDate: string | null;
  endDate: string | null;
  groups: { id: number; code: string; name: string }[];
  createdAt: string;
};

function findFilterVal(filters: DataTableServerParams["filters"], key: string) {
  return filters.find((f) => f.fieldKey === key)?.value;
}

function parseDateFilters(filters: DataTableServerParams["filters"]) {
  let startDateGte: Date | undefined;
  let startDateLte: Date | undefined;
  let endDateGte: Date | undefined;
  let endDateLte: Date | undefined;

  for (const f of filters) {
    if (!f.value) continue;
    const isLte = f.operator === "lessThanOrEqual" || f.operator === "lte" || f.operator === "lessThan";
    const isGte = f.operator === "greaterThanOrEqual" || f.operator === "gte" || f.operator === "greaterThan";
    const d = new Date(f.value);

    if (f.fieldKey === "startDate") {
      if (isLte) {
        d.setHours(23, 59, 59, 999);
        startDateLte = d;
      } else {
        d.setHours(0, 0, 0, 0);
        startDateGte = d;
      }
    } else if (f.fieldKey === "endDate") {
      if (isGte) {
        d.setHours(0, 0, 0, 0);
        endDateGte = d;
      } else {
        d.setHours(23, 59, 59, 999);
        endDateLte = d;
      }
    }
  }

  return { startDateGte, startDateLte, endDateGte, endDateLte };
}

function toQueryInput(params: DataTableServerParams) {
  const { search, filters, sort, page, pageSize } = params;
  const idVal = findFilterVal(filters, "id");
  const groupsVal = findFilterVal(filters, "groups");
  const dates = parseDateFilters(filters);

  return {
    page,
    perPage: pageSize,
    search: search.trim() || undefined,
    sortBy: (sort.direction ? sort.key : "createdAt") as
      | "id"
      | "code"
      | "name"
      | "type"
      | "status"
      | "createdAt"
      | "updatedAt"
      | "startDate"
      | "endDate",
    sortOrder: (sort.direction as "asc" | "desc") || "desc",
    id: idVal ? Number(idVal) : undefined,
    code: findFilterVal(filters, "code"),
    type: findFilterVal(filters, "type") as RateCardType | undefined,
    status: findFilterVal(filters, "status") as ContentStatus | undefined,
    shippingMethod: findFilterVal(filters, "shippingMethod") as ShippingMethod | undefined,
    origin: findFilterVal(filters, "origin"),
    country: findFilterVal(filters, "country"),
    name: findFilterVal(filters, "name"),
    ...dates,
    customerGroupId:
      groupsVal === "unassigned" || groupsVal === "none" || groupsVal === "-1"
        ? -1
        : groupsVal
          ? Number(groupsVal)
          : undefined,
  };
}

function getStatusBadgeConfig(
  status: ContentStatus,
  startDate: string | null,
  t: (key: string) => string,
) {
  if (status === "PUBLISHED") {
    const isFuture = Boolean(startDate && new Date(startDate) > new Date());
    return isFuture
      ? {
          variant: "outline" as const,
          className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 font-medium",
          label: t("rates.statusPendingEffective"),
        }
      : {
          variant: "default" as const,
          className: "bg-emerald-600 text-white font-medium",
          label: t("rates.statusPublished"),
        };
  }

  const statusMap: Record<string, { variant: "secondary" | "destructive" | "outline"; label: string }> = {
    DRAFT: { variant: "outline", label: t("rates.statusDraft") },
    PENDING: { variant: "secondary", label: t("rates.statusPending") },
    REVIEW: { variant: "secondary", label: t("rates.statusReview") },
    REJECTED: { variant: "destructive", label: t("rates.statusRejected") },
    ARCHIVED: { variant: "destructive", label: t("rates.statusArchived") },
  };

  const matched = statusMap[status];
  return {
    variant: matched?.variant ?? "outline",
    className: undefined as string | undefined,
    label: matched?.label ?? status,
  };
}

export default function RatesContent() {
  const t = useTranslations("settings");
  const tCommon = useTranslations("common");
  const router = useRouter();
  const { toast } = useToast();
  const { askConfirm, dialogProps: confirmDialogProps } = useConfirm();
  const utils = trpc.useUtils();

  // Permission hooks
  const { hasPermission: canCreate } = useRequirePermission([Permissions.RATES_CREATE]);
  const { hasPermission: canUpdate } = useRequirePermission([Permissions.RATES_UPDATE]);
  const { hasPermission: canApprove } = useRequirePermission([Permissions.RATES_APPROVE]);
  const { hasPermission: canDelete } = useRequirePermission([Permissions.RATES_DELETE]);

  // State for Assign Groups dialog
  const [assignGroupCard, setAssignGroupCard] = useState<RateCardRow | null>(null);
  const [selectedGroupIds, setSelectedGroupIds] = useState<number[]>([]);
  const [groupSearch, setGroupSearch] = useState("");

  const { queryInput, onServerChange, tableKey, initialState } = useServerTable({
    tableId: "rate-cards",
    defaultSort: { key: "createdAt", direction: "desc" },
    defaultPageSize: 25,
    toQueryInput,
  });

  // Queries
  const {
    data: result,
    isLoading,
    isFetching,
  } = trpc.viewer.rateCards.list.useQuery(queryInput, {
    placeholderData: keepPreviousData,
    retry: false,
  });

  // Load customer groups for filter options & assign modal
  const { data: groupsData } = trpc.viewer.customerGroups.listAll.useQuery(undefined, {
    staleTime: 5 * 60 * 1000,
  });

  const filteredGroups = useMemo(() => {
    if (!groupsData) return [];
    if (!groupSearch.trim()) return groupsData;
    const term = groupSearch.toLowerCase().trim();
    return groupsData.filter(
      (g) => g.code.toLowerCase().includes(term) || g.name.toLowerCase().includes(term),
    );
  }, [groupsData, groupSearch]);

  const customerGroupOptions = useMemo(() => {
    const rawLabel = t("rates.unassignedGroupLabel");
    const label = rawLabel && !rawLabel.includes("unassignedGroupLabel") ? rawLabel : "Mặc định (Chưa gán nhóm)";
    const unassignedOption = {
      value: "unassigned",
      label,
    };
    if (!groupsData) return [unassignedOption];
    return [
      unassignedOption,
      ...groupsData.map((g) => ({
        value: String(g.id),
        label: `${g.name} (${g.code})`,
      })),
    ];
  }, [groupsData, t]);

  // Mutations
  const deleteMut = trpc.viewer.rateCards.delete.useMutation({
    onSuccess: () => {
      toast(t("rates.toastDeleteSuccess"), "success");
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const duplicateMut = trpc.viewer.rateCards.duplicate.useMutation({
    onSuccess: (newCard) => {
      toast(t("rates.toastDuplicateSuccess", { code: newCard.code }), "success");
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const submitReviewMut = trpc.viewer.rateCards.submitForReview.useMutation({
    onSuccess: () => {
      toast(t("rates.toastSubmitSuccess"), "success");
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const approveMut = trpc.viewer.rateCards.approve.useMutation({
    onSuccess: () => {
      toast(t("rates.toastApproveSuccess"), "success");
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const rejectMut = trpc.viewer.rateCards.reject.useMutation({
    onSuccess: () => {
      toast(t("rates.toastRejectSuccess"), "success");
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const assignGroupsMut = trpc.viewer.rateCards.assignGroups.useMutation({
    onSuccess: () => {
      toast(t("rates.toastAssignGroupsSuccess"), "success");
      setAssignGroupCard(null);
      utils.viewer.rateCards.list.invalidate();
    },
    onError: (err) => toast(err.message, "error"),
  });

  const openCreate = () => {
    router.push("/settings/rates/new");
  };

  const openEdit = useCallback(
    (id: number) => {
      router.push(`/settings/rates/${id}/edit`);
    },
    [router],
  );

  const openAssignGroups = useCallback((row: RateCardRow) => {
    setAssignGroupCard(row);
    setSelectedGroupIds(row.groups.map((g) => g.id));
    setGroupSearch("");
  }, []);

  // Columns layout
  const columns: ColumnDef<RateCardRow>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 60,
        cell: ({ row }) => (
          <span className="font-mono text-xs font-semibold">{row.original.id}</span>
        ),
      },
      {
        accessorKey: "code",
        header: t("rates.colCode"),
        cell: ({ row }) => (
          <CopyCell value={row.original.code}>
            <button
              type="button"
              className="cursor-pointer font-semibold text-primary hover:underline bg-transparent text-left"
              onClick={() => openEdit(row.original.id)}
            >
              {row.original.code}
            </button>
          </CopyCell>
        ),
      },
      {
        accessorKey: "name",
        header: t("rates.colName"),
        cell: ({ row }) => <span className="font-medium text-foreground">{row.original.name}</span>,
      },
      {
        accessorKey: "type",
        header: t("rates.colType"),
        size: 90,
        cell: ({ row }) => (
          <Badge variant={row.original.type === "DEFAULT" ? "default" : "outline"}>
            {row.original.type === "DEFAULT" ? t("rates.typeDefault") : t("rates.typeCustom")}
          </Badge>
        ),
      },
      {
        accessorKey: "shippingMethod",
        header: t("rates.colShippingMethod"),
        size: 100,
        enableSorting: false,
        cell: ({ row }) => (
          <Badge variant={row.original.shippingMethod === "EXPRESS" ? "default" : "secondary"}>
            {row.original.shippingMethod}
          </Badge>
        ),
      },
      {
        accessorKey: "status",
        header: t("rates.colStatus"),
        size: 100,
        cell: ({ row }) => {
          const { variant, className, label } = getStatusBadgeConfig(
            row.original.status,
            row.original.startDate,
            t,
          );
          return <Badge variant={variant} className={className}>{label}</Badge>;
        },
      },
      {
        accessorKey: "groups",
        header: t("rates.colCustomerGroups"),
        enableSorting: false,
        cell: ({ row }) => (
          <div className="flex flex-wrap gap-1 max-w-[180px]">
            {row.original.groups.length > 0 ? (
              row.original.groups.map((g) => (
                <Badge key={g.id} variant="outline" className="text-[11px] bg-muted/30">
                  {g.name} ({g.code})
                </Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground italic">{t("rates.allOrigins")}</span>
            )}
          </div>
        ),
      },
      {
        accessorKey: "startDate",
        header: t("rates.colStartDate"),
        size: 130,
        cell: ({ row }) => (
          <span className="text-xs text-muted-foreground">
            {row.original.startDate ? formatDate(row.original.startDate) : "∞"}
          </span>
        ),
      },
      {
        accessorKey: "endDate",
        header: t("rates.colEndDate"),
        size: 130,
        cell: ({ row }) => (
          <span className="text-xs text-muted-foreground">
            {row.original.type === "DEFAULT"
              ? "∞"
              : row.original.endDate
                ? formatDate(row.original.endDate)
                : "∞"}
          </span>
        ),
      },
    ],
    [openEdit, t],
  );

  const rowActions: RowAction<RateCardRow>[] = useMemo(
    () => [
      {
        key: "edit",
        tooltip: (row) =>
          canUpdate && (row.status === "DRAFT" || row.status === "REJECTED")
            ? t("rates.actionEdit")
            : t("rates.actionViewDetails"),
        icon: (row) =>
          canUpdate && (row.status === "DRAFT" || row.status === "REJECTED") ? (
            <Pencil size={15} />
          ) : (
            <Eye size={15} />
          ),
        color: (row) =>
          canUpdate && (row.status === "DRAFT" || row.status === "REJECTED") ? "success" : "info",
        onClick: (row) => openEdit(row.id),
      },
      {
        key: "assignGroups",
        tooltip: t("rates.btnAssignGroups"),
        icon: <UserPlus size={15} />,
        color: "info",
        hidden: (row) =>
          !canUpdate ||
          row.type === "DEFAULT" ||
          (row.status !== "DRAFT" && row.status !== "REJECTED"),
        onClick: (row) => openAssignGroups(row),
      },
      {
        key: "submitReview",
        tooltip: t("rates.btnSubmitReview"),
        icon: <CheckCircle size={15} />,
        color: "primary",
        hidden: (row) =>
          !canUpdate ||
          (row.status !== "DRAFT" && row.status !== "REJECTED") ||
          (row.type === "CUSTOM" && (!row.groups || row.groups.length === 0)),
        onClick: (row) => {
          askConfirm({
            title: t("rates.btnSubmitReview"),
            confirmLabel: t("rates.btnSubmitReview"),
            confirmColor: "primary",
            message: t("rates.confirmSubmitReview", { code: row.code }),
            onConfirm: () => submitReviewMut.mutate({ id: row.id }),
          });
        },
      },
      {
        key: "approve",
        tooltip: t("rates.btnApprove"),
        icon: <CheckCircle size={15} />,
        color: "success",
        hidden: (row) => !canApprove || row.status !== "PENDING",
        onClick: (row) => {
          askConfirm({
            title: t("rates.btnApprove"),
            confirmLabel: t("rates.btnApprove"),
            confirmColor: "primary",
            message: t("rates.confirmApprove", { code: row.code }),
            onConfirm: () => approveMut.mutate({ id: row.id }),
          });
        },
      },
      {
        key: "reject",
        tooltip: t("rates.btnReject"),
        icon: <XCircle size={15} />,
        color: "error",
        hidden: (row) => !canApprove || row.status !== "PENDING",
        onClick: (row) => {
          askConfirm({
            title: t("rates.btnReject"),
            confirmLabel: t("rates.btnReject"),
            confirmColor: "error",
            message: t("rates.confirmReject", { code: row.code }),
            onConfirm: () => rejectMut.mutate({ id: row.id }),
          });
        },
      },
      {
        key: "duplicate",
        tooltip: t("rates.actionDuplicate"),
        icon: <Copy size={15} />,
        color: "info",
        hidden: () => !canCreate,
        onClick: (row) => {
          askConfirm({
            title: t("rates.actionDuplicate"),
            confirmLabel: t("rates.actionDuplicate"),
            confirmColor: "primary",
            message: t("rates.confirmDuplicate", { code: row.code }),
            onConfirm: () => duplicateMut.mutate({ id: row.id }),
          });
        },
      },
      {
        key: "delete",
        tooltip: t("rates.actionDelete"),
        icon: <Trash2 size={15} />,
        color: "error",
        onClick: (row) => {
          askConfirm({
            message: t("rates.confirmDelete", { code: row.code }),
            onConfirm: () => deleteMut.mutate({ id: row.id }),
          });
        },
        hidden: (row) => !canDelete || (row.status !== "DRAFT" && row.status !== "REJECTED"),
      },
    ],
    [
      canCreate,
      canUpdate,
      canApprove,
      canDelete,
      openEdit,
      openAssignGroups,
      askConfirm,
      deleteMut,
      duplicateMut,
      submitReviewMut,
      approveMut,
      rejectMut,
      t,
    ],
  );

  const filterFields: FilterFieldDef[] = useMemo(
    () => [
      {
        key: "id",
        label: "ID",
        type: "number",
        operators: [{ value: "equals", label: "equals" }],
      },
      {
        key: "code",
        label: t("rates.lblCode"),
        type: "text",
        operators: [
          { value: "equals", label: "equals" },
          { value: "contains", label: "contains" },
        ],
      },
      {
        key: "name",
        label: t("rates.lblName"),
        type: "text",
        operators: [
          { value: "equals", label: "equals" },
          { value: "contains", label: "contains" },
        ],
      },
      {
        key: "type",
        label: t("rates.lblType"),
        type: "select",
        operators: [{ value: "equals", label: "equals" }],
        options: [
          { value: "DEFAULT", label: t("rates.typeDefault") },
          { value: "CUSTOM", label: t("rates.typeCustom") },
        ],
      },
      {
        key: "shippingMethod",
        label: t("rates.lblShippingMethod"),
        type: "select",
        operators: [{ value: "equals", label: "equals" }],
        options: [
          { value: "EXPRESS", label: "EXPRESS" },
          { value: "EPACKET", label: "EPACKET" },
        ],
      },
      {
        key: "startDate",
        label: t("rates.lblStartDate"),
        type: "date",
        operators: [
          { value: "greaterThanOrEqual", label: "greaterThanOrEqual" },
          { value: "lessThanOrEqual", label: "lessThanOrEqual" },
        ],
      },
      {
        key: "endDate",
        label: t("rates.lblEndDate"),
        type: "date",
        operators: [
          { value: "greaterThanOrEqual", label: "greaterThanOrEqual" },
          { value: "lessThanOrEqual", label: "lessThanOrEqual" },
        ],
      },
      {
        key: "groups",
        label: t("rates.colCustomerGroups"),
        type: "select",
        operators: [{ value: "equals", label: "equals" }],
        options: customerGroupOptions,
        defaultValue: "unassigned",
      },
      {
        key: "status",
        label: t("rates.lblStatus"),
        type: "select",
        operators: [{ value: "equals", label: "equals" }],
        options: [
          { value: "DRAFT", label: t("rates.statusDraft") },
          { value: "PENDING", label: t("rates.statusPending") },
          { value: "REVIEW", label: t("rates.statusReview") },
          { value: "REJECTED", label: t("rates.statusRejected") },
          { value: "PUBLISHED", label: t("rates.statusPublished") },
          { value: "ARCHIVED", label: t("rates.statusArchived") },
        ],
      },
    ],
    [customerGroupOptions, t],
  );

  const rows: RateCardRow[] = useMemo(() => {
    if (!result?.data) return [];
    return result.data.map((item) => ({
      id: item.id,
      code: item.code,
      name: item.name,
      type: item.type ?? "DEFAULT",
      status: item.status,
      shippingMethod: item.shippingMethod,
      country: item.country,
      origin: item.origin,
      currency: item.currency,
      weightStep: Number(item.weightStep),
      minWeight: Number(item.minWeight),
      maxWeight: Number(item.maxWeight),
      startDate: item.startDate ? new Date(item.startDate).toISOString() : null,
      endDate: item.endDate ? new Date(item.endDate).toISOString() : null,
      groups: item.groups.map((g) => ({
        id: g.customerGroup.id,
        code: g.customerGroup.code,
        name: g.customerGroup.name,
      })),
      createdAt: new Date(item.createdAt).toISOString(),
    }));
  }, [result]);

  return (
    <>
      {/* Main Grid Table */}
      <DataTable<RateCardRow>
        tableKey={tableKey}
        defaultPageSize={initialState.pageSize}
        defaultPage={initialState.page}
        data={rows}
        columns={columns}
        rowActions={rowActions}
        isLoading={isLoading}
        isFetching={isFetching}
        onServerChange={(params) =>
          onServerChange({
            search: params.search,
            filters: params.filters,
            sort: params.sort,
            page: params.page,
            pageSize: params.pageSize,
          })
        }
        rowCount={result?.meta?.total ?? 0}
        pageTitle={t("rates.listTitle")}
        filterFields={filterFields}
        onRefresh={() => utils.viewer.rateCards.list.invalidate()}
        headerActions={
          canCreate ? (
            <Button size="sm" className="bg-primary" onClick={openCreate}>
              <Plus className="mr-1.5 size-4" />
              {t("rates.btnAddRateCard")}
            </Button>
          ) : null
        }
        emptyState={
          <div className="py-12 text-center">
            <p className="mb-2 font-medium text-muted-foreground">{t("rates.noRatesFound")}</p>
            <p className="mb-6 text-sm text-muted-foreground/60">{t("rates.noRatesFoundDesc")}</p>
            {canCreate && (
              <Button size="sm" onClick={openCreate}>
                <Plus className="mr-1.5 size-4" />
                {t("rates.btnAddRateCard")}
              </Button>
            )}
          </div>
        }
      />

      {/* Assign Groups Modal */}
      {assignGroupCard && (
        <Dialog open={!!assignGroupCard} onOpenChange={() => setAssignGroupCard(null)}>
          <DialogContent className="max-w-lg sm:max-w-xl overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-base font-bold break-all pr-6">
                {t("rates.btnAssignGroups")}: {assignGroupCard.code}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-3 py-2">
              <span className="text-xs text-muted-foreground">
                {t("rates.assignGroupsDesc")}
              </span>

              <Input
                type="text"
                placeholder={t("rates.searchGroupPlaceholder")}
                value={groupSearch}
                onChange={(e) => setGroupSearch(e.target.value)}
                className="h-9 text-xs"
              />

              <div className="flex flex-col gap-1.5 border border-input rounded-lg p-2 max-h-64 sm:max-h-72 overflow-y-auto bg-muted/10">
                {filteredGroups.length === 0 ? (
                  <span className="text-xs text-muted-foreground italic text-center py-6">
                    {t("rates.noGroupsFoundModal")}
                  </span>
                ) : (
                  filteredGroups.map((group) => {
                    const checked = selectedGroupIds.includes(group.id);
                    return (
                      <label
                        key={group.id}
                        className="flex items-start gap-2.5 text-xs sm:text-sm cursor-pointer select-none hover:bg-accent/60 p-2 rounded-md transition-colors border border-transparent hover:border-border/60"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {
                            setSelectedGroupIds((prev) =>
                              checked ? prev.filter((id) => id !== group.id) : [...prev, group.id],
                            );
                          }}
                          className="mt-0.5 rounded border-input text-primary focus:ring-primary size-4 shrink-0"
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="font-medium text-foreground break-all leading-tight">
                            {group.name}
                          </span>
                          <span className="text-[11px] font-mono text-muted-foreground break-all mt-0.5">
                            ({group.code})
                          </span>
                        </div>
                      </label>
                    );
                  })
                )}
              </div>
            </div>

            <DialogFooter className="flex flex-row items-center justify-between sm:justify-between gap-2 border-t border-border/60 pt-3">
              <span className="text-xs text-muted-foreground">
                {t("rates.selectedCount", { count: selectedGroupIds.length })}
              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setAssignGroupCard(null)}>
                  {tCommon("cancel")}
                </Button>
                <Button
                  size="sm"
                  disabled={assignGroupsMut.isPending}
                  onClick={() => {
                    assignGroupsMut.mutate({
                      id: assignGroupCard.id,
                      customerGroupIds: selectedGroupIds,
                    });
                  }}
                >
                  {t("rates.btnSaveGroups")}
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <ConfirmDialog {...confirmDialogProps} />
    </>
  );
}
