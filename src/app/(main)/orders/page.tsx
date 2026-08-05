"use client";

import { DataTable } from "@admin/components/data-table";
import { useServerTable } from "@admin/components/data-table/hooks/useServerTable";
import type {
  DataTableServerParams,
  FilterFieldDef,
  RowAction,
} from "@admin/components/data-table/types";
import { ConfirmModal } from "@admin/components/modals/ConfirmModal";
import { trpc } from "@admin/lib/trpc";
import type { OrderStatus } from "@flash-ship/ecom-types";
import { Badge } from "@flash-ship/ecom-ui/components/badge";
import { keepPreviousData } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Eye, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

interface OrderRow extends Record<string, unknown> {
  id: string;
  orderCode: string;
  customerId: string;
  status: OrderStatus;
  labelStatus: string;
  shippingMethod: string;
  shippingOrigin: string;
  sellerOrderId: string | null;
  trackingNumber: string | null;
  receiverName: string;
  receiverPhone: string | null;
  receiverCity: string;
  receiverState: string;
  receiverCountry: string;
  receiverZipCode: string;
  receiverAddress1: string;
  declaredWeight: number;
  baseShippingFee: unknown;
  surchargeFee: unknown;
  totalFee: unknown;
  createdAt: string | Date;
  customer?: {
    name: string | null;
    email: string;
    username: string;
  } | null;
}

const getStatusBadge = (status: string, t: (key: string) => string) => {
  switch (status) {
    case "DRAFT":
      return <Badge variant="outline">{t(`status.${status}`)}</Badge>;
    case "PENDING_LABEL":
      return <Badge variant="warning">{t(`status.${status}`)}</Badge>;
    case "LABEL_CREATED":
    case "WAITING_FOR_PICKUP":
      return <Badge variant="secondary">{t(`status.${status}`)}</Badge>;
    case "PICKED_UP":
    case "RECEIVED_AT_ORIGIN_WAREHOUSE":
      return (
        <Badge variant="default" className="bg-[#0F798C] text-white border-none">
          {t(`status.${status}`)}
        </Badge>
      );
    case "EXPORT_CUSTOMS_CLEARANCE":
    case "DEPARTED_ORIGIN_COUNTRY":
    case "INTERNATIONAL_TRANSIT":
    case "ARRIVED_AT_DESTINATION_COUNTRY":
    case "IMPORT_CUSTOMS_CLEARANCE":
    case "RECEIVED_BY_LAST_MILE_CARRIER":
      return (
        <Badge variant="default" className="bg-blue-500 text-white border-none">
          {t(`status.${status}`)}
        </Badge>
      );
    case "OUT_FOR_DELIVERY":
      return (
        <Badge variant="default" className="bg-amber-500 text-white border-none">
          {t(`status.${status}`)}
        </Badge>
      );
    case "DELIVERED":
      return <Badge variant="success">{t(`status.${status}`)}</Badge>;
    case "DELIVERY_FAILED":
    case "CUSTOMS_HOLD":
    case "RETURN_TO_SENDER":
    case "RETURNED":
    case "CANCELLED":
    case "EXCEPTION":
      return <Badge variant="destructive">{t(`status.${status}`)}</Badge>;
    default:
      return <Badge variant="default">{t(`status.${status}`)}</Badge>;
  }
};

function toQueryInput(params: DataTableServerParams) {
  const { search, filters, sort, page, pageSize } = params;

  const statusFilter = filters.find((f) => f.fieldKey === "status" && f.operator === "equals");
  const customerIdFilter = filters.find(
    (f) => f.fieldKey === "customerId" && f.operator === "equals",
  );

  return {
    page,
    perPage: pageSize,
    search: search.trim() || undefined,
    status: statusFilter ? (statusFilter.value as OrderStatus) : undefined,
    customerId: customerIdFilter ? String(customerIdFilter.value) : undefined,
    sortBy:
      sort.direction && ["id", "createdAt", "orderCode", "status"].includes(sort.key)
        ? (sort.key as "id" | "createdAt" | "orderCode" | "status")
        : "createdAt",
    sortOrder: sort.direction ?? "desc",
  };
}

export default function AdminOrdersPage() {
  const router = useRouter();
  const t = useTranslations("orders");

  const { queryInput, onServerChange, tableKey, initialState } = useServerTable({
    tableId: "orders",
    defaultSort: { key: "createdAt", direction: "desc" },
    defaultPageSize: 10,
    toQueryInput,
  });

  const { data, isLoading, isFetching, refetch } = trpc.viewer.orders.list.useQuery(
    queryInput as Parameters<typeof trpc.viewer.orders.list.useQuery>[0],
    {
      placeholderData: keepPreviousData,
    },
  );

  const rows = (data?.data ?? []) as OrderRow[];
  const serverTotalCount = data?.meta.total ?? 0;

  const columns: ColumnDef<OrderRow, unknown>[] = useMemo(
    () => [
      {
        accessorKey: "orderCode",
        header: t("orderId"),
        cell: ({ row }) => (
          <span className="font-semibold text-foreground">{row.original.orderCode}</span>
        ),
      },
      {
        accessorKey: "createdAt",
        header: t("createdAt"),
        cell: ({ row }) => (
          <span className="text-sm text-muted-foreground">
            {format(new Date(row.original.createdAt), "dd/MM/yyyy HH:mm")}
          </span>
        ),
      },
      {
        accessorKey: "customerId",
        header: t("customer"),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">
              {row.original.customer?.name ||
                row.original.customer?.username ||
                `Customer #${row.original.customerId}`}
            </span>
            <span className="text-xs text-muted-foreground">{row.original.customer?.email}</span>
          </div>
        ),
      },
      {
        accessorKey: "receiverName",
        header: t("receiverAndCountry"),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">{row.original.receiverName}</span>
            <span className="text-xs text-muted-foreground">
              {row.original.receiverCity}, {row.original.receiverCountry}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "trackingNumber",
        header: t("trackingNumberLabel"),
        cell: ({ row }) => (
          <span className="text-xs font-mono font-semibold text-foreground/80">
            {row.original.trackingNumber || "—"}
          </span>
        ),
      },
      {
        accessorKey: "declaredWeight",
        header: t("weightGr"),
        cell: ({ row }) => (
          <span className="text-sm text-muted-foreground">{row.original.declaredWeight}</span>
        ),
      },
      {
        accessorKey: "totalFee",
        header: t("totalFee"),
        cell: ({ row }) => {
          const base = Number(row.original.baseShippingFee || 0);
          const surcharge = Number(row.original.surchargeFee || 0);
          return (
            <span className="font-semibold text-foreground">${(base + surcharge).toFixed(2)}</span>
          );
        },
      },
      {
        accessorKey: "status",
        header: t("statusLabel"),
        cell: ({ row }) => getStatusBadge(row.original.status, t),
      },
    ],
    [t],
  );

  const filterFields: FilterFieldDef[] = useMemo(
    () => [
      {
        key: "status",
        label: t("statusLabel"),
        type: "select",
        operators: [{ value: "equals", label: "equals" }],
        options: [
          { value: "DRAFT", label: t("status.DRAFT") },
          { value: "PENDING_LABEL", label: t("status.PENDING_LABEL") },
          { value: "LABEL_CREATED", label: t("status.LABEL_CREATED") },
          { value: "WAITING_FOR_PICKUP", label: t("status.WAITING_FOR_PICKUP") },
          { value: "PICKED_UP", label: t("status.PICKED_UP") },
          { value: "RECEIVED_AT_ORIGIN_WAREHOUSE", label: t("status.RECEIVED_AT_ORIGIN_WAREHOUSE") },
          { value: "EXPORT_CUSTOMS_CLEARANCE", label: t("status.EXPORT_CUSTOMS_CLEARANCE") },
          { value: "DEPARTED_ORIGIN_COUNTRY", label: t("status.DEPARTED_ORIGIN_COUNTRY") },
          { value: "INTERNATIONAL_TRANSIT", label: t("status.INTERNATIONAL_TRANSIT") },
          { value: "ARRIVED_AT_DESTINATION_COUNTRY", label: t("status.ARRIVED_AT_DESTINATION_COUNTRY") },
          { value: "IMPORT_CUSTOMS_CLEARANCE", label: t("status.IMPORT_CUSTOMS_CLEARANCE") },
          { value: "RECEIVED_BY_LAST_MILE_CARRIER", label: t("status.RECEIVED_BY_LAST_MILE_CARRIER") },
          { value: "OUT_FOR_DELIVERY", label: t("status.OUT_FOR_DELIVERY") },
          { value: "DELIVERED", label: t("status.DELIVERED") },
          { value: "DELIVERY_FAILED", label: t("status.DELIVERY_FAILED") },
          { value: "CUSTOMS_HOLD", label: t("status.CUSTOMS_HOLD") },
          { value: "RETURN_TO_SENDER", label: t("status.RETURN_TO_SENDER") },
          { value: "RETURNED", label: t("status.RETURNED") },
          { value: "CANCELLED", label: t("status.CANCELLED") },
          { value: "EXCEPTION", label: t("status.EXCEPTION") },
        ],
      },
      {
        key: "customerId",
        label: t("customerId"),
        type: "text",
        operators: [{ value: "equals", label: "equals" }],
      },
    ],
    [t],
  );

  const [error, setError] = useState<string | null>(null);
  const [selectedOrderForPurchase, setSelectedOrderForPurchase] = useState<{
    id: string;
    orderCode: string;
  } | null>(null);
  const [selectedOrderForVoid, setSelectedOrderForVoid] = useState<{
    id: string;
    orderCode: string;
  } | null>(null);
  const trpcUtils = trpc.useUtils();

  const purchaseLabelMutation = trpc.viewer.orders.purchaseLabel.useMutation({
    onSuccess: (res) => {
      setSelectedOrderForPurchase(null);
      if ("isAmbiguous" in res && res.isAmbiguous) {
        setError(`Lỗi mua nhãn (Địa chỉ không hợp lệ - 202): ${res.message || "Địa chỉ nhận hàng không tìm thấy hoặc thiếu thông tin"}`);
      } else {
        setError(null);
        refetch();
        trpcUtils.viewer.orders.list.invalidate();
      }
    },
    onError: (err) => {
      setSelectedOrderForPurchase(null);
      setError(err.message || t("purchaseLabelError"));
    },
  });

  const voidLabelMutation = trpc.viewer.orders.voidLabel.useMutation({
    onSuccess: () => {
      setError(null);
      setSelectedOrderForVoid(null);
      refetch();
      trpcUtils.viewer.orders.list.invalidate();
    },
    onError: (err) => {
      setSelectedOrderForVoid(null);
      setError(err.message || t("voidLabelError"));
    },
  });

  const rowActions: RowAction<OrderRow>[] = useMemo(
    () => [
      {
        key: "purchaseLabel",
        tooltip: t("purchaseLabel"),
        icon: <ShoppingCart size={16} />,
        color: "success",
        disabled: (row) => purchaseLabelMutation.isPending && selectedOrderForPurchase?.id === row.id,
        hidden: (row) => row.status !== "PENDING_LABEL",
        onClick: (row) => setSelectedOrderForPurchase({ id: row.id, orderCode: row.orderCode }),
      },
      {
        key: "voidLabel",
        tooltip: t("voidLabel"),
        icon: <Trash2 size={16} />,
        color: "error",
        disabled: (row) => voidLabelMutation.isPending && selectedOrderForVoid?.id === row.id,
        hidden: (row) => !["LABEL_CREATED", "WAITING_FOR_PICKUP"].includes(row.status),
        onClick: (row) => setSelectedOrderForVoid({ id: row.id, orderCode: row.orderCode }),
      },
      {
        key: "view",
        tooltip: t("viewDetail"),
        icon: <Eye size={16} />,
        color: "primary",
        onClick: (row) => router.push(`/orders/${row.id}`),
      },
    ],
    [router, t, purchaseLabelMutation.isPending, selectedOrderForPurchase, voidLabelMutation.isPending, selectedOrderForVoid],
  );

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 dark:bg-rose-950/40 px-4 py-3 text-sm font-semibold text-rose-600 dark:text-rose-400 flex items-center justify-between shadow-sm animate-fade-in">
          <span>{error}</span>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-300 font-bold ml-4 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      <DataTable<OrderRow>
        tableKey={tableKey}
        defaultPageSize={initialState.pageSize}
        defaultPage={initialState.page}
        data={rows}
        columns={columns}
        rowActions={rowActions}
        filterFields={filterFields}
        isLoading={isLoading}
        isFetching={isFetching}
        onServerChange={onServerChange}
        rowCount={serverTotalCount}
        pageTitle={t("manageOrders")}
        onRefresh={() => refetch()}
        emptyState={
          <div className="py-8 text-center animate-fade-in">
            <ShoppingBag size={48} className="mx-auto mb-3 text-muted-foreground/40" />
            <p className="mb-1 text-muted-foreground font-medium">{t("noOrders")}</p>
            <p className="text-sm text-muted-foreground/60">{t("noOrdersDesc")}</p>
          </div>
        }
      />

      <ConfirmModal
        open={!!selectedOrderForPurchase}
        onOpenChange={(open) => !open && setSelectedOrderForPurchase(null)}
        title={t("confirmPurchaseLabelTitle")}
        description={
          selectedOrderForPurchase
            ? t("confirmPurchaseLabelDesc", { orderCode: selectedOrderForPurchase.orderCode })
            : ""
        }
        icon={<ShoppingCart className="size-6 text-emerald-600 dark:text-emerald-400" />}
        iconBgClass="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 ring-4 ring-emerald-500/10"
        confirmText={t("purchaseLabelBtn")}
        confirmButtonClass="bg-emerald-600 hover:bg-emerald-700 text-white"
        isSubmitting={purchaseLabelMutation.isPending}
        onConfirm={async () => {
          if (!selectedOrderForPurchase) return;
          await purchaseLabelMutation.mutateAsync({ id: selectedOrderForPurchase.id });
        }}
      />

      <ConfirmModal
        open={!!selectedOrderForVoid}
        onOpenChange={(open) => !open && setSelectedOrderForVoid(null)}
        title={t("confirmVoidLabelTitle")}
        description={
          selectedOrderForVoid
            ? t("confirmVoidLabelDesc", { orderCode: selectedOrderForVoid.orderCode })
            : ""
        }
        icon={<Trash2 className="size-6 text-rose-600 dark:text-rose-400" />}
        iconBgClass="bg-rose-50 dark:bg-rose-950/40 text-rose-600 ring-4 ring-rose-500/10"
        confirmText={t("voidLabelBtn")}
        confirmButtonClass="bg-rose-600 hover:bg-rose-700 text-white"
        isSubmitting={voidLabelMutation.isPending}
        onConfirm={async () => {
          if (!selectedOrderForVoid) return;
          await voidLabelMutation.mutateAsync({ id: selectedOrderForVoid.id });
        }}
      />
    </div>
  );
}
