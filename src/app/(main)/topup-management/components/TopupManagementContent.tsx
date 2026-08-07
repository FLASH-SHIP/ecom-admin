"use client";

import PageBreadcrumb from "@admin/components/PageBreadcrumb";
import { CopyCell } from "@admin/components/data-table/CopyCell";
import { DataTable } from "@admin/components/data-table";
import { TopupFilterSection } from "./TopupFilterSection";
import { ImagePreviewModal } from "./ImagePreviewModal";
import { CreateTopupModal } from "./CreateTopupModal";
import { AdjustmentTopupModal } from "./AdjustmentTopupModal";
import { ApproveTopupModal } from "./ApproveTopupModal";
import { RejectTopupModal } from "./RejectTopupModal";
import { TopupDetailModal } from "./TopupDetailModal";
import { TopupStatus } from "@flash-ship/ecom-types";
import Error403Page from "@admin/components/errors/Error403Page";
import { useRequirePermission } from "@admin/components/layout/PermissionGuard";
import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { formatDate, formatDateTime } from "@admin/utils/dateFormat";
import { Permissions } from "@flash-ship/ecom-lib/permissions";
import { Button } from "@flash-ship/ecom-ui/components/button";
import { ExportFileIcon } from "@flash-ship/ecom-ui/components/icons";
import { DateRangePicker } from "@flash-ship/ecom-ui/components/date-range-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@flash-ship/ecom-ui/components/dropdown-menu";
import { Input } from "@flash-ship/ecom-ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@flash-ship/ecom-ui/components/select";
import {
  SearchableSelect,
  type SearchableSelectOption,
} from "@flash-ship/ecom-ui/components/searchable-select";
import { Tabs, TabsList, TabsTrigger } from "@flash-ship/ecom-ui/components/tabs";
import type { ColumnDef } from "@tanstack/react-table";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Eye,
  Image as ImageIcon,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Sliders,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

// DTO định nghĩa một dòng bản ghi nạp tiền Topup
export type TopupTransactionRow = Record<string, unknown> & {
  id: number;
  transactionCode: string;
  submissionDate: string;
  wireDate: string;
  customerId: string;
  customerCode?: string;
  customerName: string;
  customerEmail: string;
  paymentMethodId: number;
  paymentMethodName: string;
  paymentMethodIcon?: string;
  paymentMethodIsBank?: boolean;
  wireAmount: number;
  wireAmountApprove: number;
  wireImages: { id: number; imageUrl: string }[];
  description: string;
  status: number;
};

function TransactionCodeCell({
  code,
  onClickDetails,
}: {
  code: string;
  onClickDetails: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={onClickDetails}
        className="font-semibold text-xs text-primary hover:underline whitespace-nowrap cursor-pointer text-left bg-transparent p-0 border-0 outline-none focus:outline-none"
      >
        {code}
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="p-1 rounded hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        title="Sao chép mã giao dịch"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-600" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600" />
        )}
      </button>
    </div>
  );
}

function downloadBase64File(filename: string, base64Data: string): void {
  if (typeof window === "undefined" || !base64Data) return;

  const binaryString = window.atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([bytes], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  window.URL.revokeObjectURL(url);
}

export default function TopupManagementContent() {
  const t = useTranslations("topup");
  const currentLocale = useLocale();
  const { toast } = useToast();
  const { hasPermission } = useRequirePermission([Permissions.TOPUP_TRANSACTIONS_READ]);

  // Cấu hình nhãn và badge cho trạng thái giao dịch (Ánh xạ qua TopupStatus Enum)
  const STATUS_CONFIG: Record<number, { label: string; bgClass: string }> = useMemo(
    () => ({
      [TopupStatus.WAITING]: { label: t("status.waiting"), bgClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
      [TopupStatus.CONFIRMED]: { label: t("status.confirmed"), bgClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
      [TopupStatus.REJECT]: { label: t("status.rejected"), bgClass: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300" },
    }),
    [t],
  );

  // Tab State: "transactions" (Giao dịch nạp tiền) | "revenue" (Doanh thu - công nợ)
  const [activeTab, setActiveTab] = useState<string>("transactions");

  // Helper tính khoảng ngày mặc định 7 ngày gần nhất
  const defaultDates = useMemo(() => {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return {
      from: sevenDaysAgo.toISOString().split("T")[0],
      to: now.toISOString().split("T")[0],
    };
  }, []);

  // State các bộ lọc (Filters) - Mặc định 7 ngày gần nhất
  const [dateFrom, setDateFrom] = useState<string | undefined>(defaultDates.from);
  const [dateTo, setDateTo] = useState<string | undefined>(defaultDates.to);
  const [customerIdFilter, setCustomerIdFilter] = useState<string>("ALL");
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Pagination, Search & Sorting State
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(undefined);

  // State điều khiển Modals
  const [selectedProofImages, setSelectedProofImages] = useState<string[] | null>(null);
  const [selectedTransactionDetail, setSelectedTransactionDetail] = useState<TopupTransactionRow | null>(null);
  const [approveDialogTx, setApproveDialogTx] = useState<TopupTransactionRow | null>(null);
  const [rejectDialogTx, setRejectDialogTx] = useState<TopupTransactionRow | null>(null);
  const [adjustDialogTx, setAdjustDialogTx] = useState<TopupTransactionRow | null>(null);
  const [approveAmountInput, setApproveAmountInput] = useState<string>("");

  // State Form Tạo Giao Dịch Nạp Tiền
  const [createOpen, setCreateOpen] = useState(false);
  const [createFormCustomerId, setCreateFormCustomerId] = useState<string>("");
  const [createFormPaymentMethodId, setCreateFormPaymentMethodId] = useState<string>("");
  const [createFormAmount, setCreateFormAmount] = useState<string>("");
  const [createFormDescription, setCreateFormDescription] = useState<string>("");

  // Fetch danh sách khách hàng để phục vụ bộ lọc Searchable Select Customer ID
  const { data: customersData } = trpc.viewer.customers.list.useQuery(
    { perPage: 100 },
    { staleTime: 60_000 },
  );

  // Fetch danh sách tất cả phương thức thanh toán cho filter
  const { data: paymentMethodsData } = trpc.customer.topup.getPaymentMethods.useQuery(undefined, {
    staleTime: 60_000,
  });

  const customerSelectOptions = useMemo<SearchableSelectOption[]>(() => {
    const list: SearchableSelectOption[] = [
      { value: "ALL", label: t("filter.allCustomers"), separatorAfter: true },
    ];
    (customersData?.items ?? []).forEach((c: any) => {
      list.push({
        value: c.id,
        label: `${c.customerCode || c.username || c.id} - ${c.name || c.email || "Khách hàng"}`,
      });
    });
    return list;
  }, [customersData, t]);

  const createCustomerSelectOptions = useMemo<SearchableSelectOption[]>(() => {
    return (customersData?.items ?? []).map((c: any) => ({
      value: c.id,
      label: `${c.customerCode || c.username || c.id} - ${c.name || c.email || "Khách hàng"} (${c.email})`,
    }));
  }, [customersData]);

  const paymentMethodSelectOptions = useMemo<SearchableSelectOption[]>(() => {
    const list: SearchableSelectOption[] = [
      { value: "ALL", label: t("filter.allPaymentMethods"), separatorAfter: true },
    ];
    (paymentMethodsData ?? []).forEach((pm: any) => {
      list.push({
        value: String(pm.id),
        label: pm.name || pm.code || `Phương thức #${pm.id}`,
        image: pm.icon || pm.image,
      });
    });
    return list;
  }, [paymentMethodsData, t]);

  const createPaymentMethodSelectOptions = useMemo<SearchableSelectOption[]>(() => {
    return (paymentMethodsData ?? []).map((pm: any) => ({
      value: String(pm.id),
      label: pm.name || pm.code || `Phương thức #${pm.id}`,
      image: pm.icon || pm.image,
    }));
  }, [paymentMethodsData]);

  // Bộ lọc Trạng thái: Ánh xạ từ TopupStatus enum (1 = Waiting, 2 = Confirmed, 3 = Reject)
  const statusSelectOptions = useMemo<SearchableSelectOption[]>(
    () => [
      { value: "ALL", label: t("filter.allStatuses"), separatorAfter: true },
      { value: String(TopupStatus.WAITING), label: t("status.waiting") },
      { value: String(TopupStatus.CONFIRMED), label: t("status.confirmed") },
      { value: String(TopupStatus.REJECT), label: t("status.rejected") },
    ],
    [t],
  );

  // Query dữ liệu lịch sử nạp tiền TRPC
  const {
    data: historyData,
    isLoading,
    refetch,
  } = trpc.customer.topup.getTopupHistory.useQuery(
    {
      page,
      pageSize,
      search: searchQuery ? searchQuery.trim() : undefined,
      customerId: customerIdFilter !== "ALL" ? customerIdFilter : undefined,
      paymentMethodId: paymentMethodFilter !== "ALL" ? Number(paymentMethodFilter) : undefined,
      status: statusFilter !== "ALL" ? statusFilter : undefined,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
    },
    {
      enabled: hasPermission,
      staleTime: 10_000,
      placeholderData: (previousData) => previousData,
    },
  );

  const exportExcelMutation = trpc.customer.topup.exportExcel.useMutation({
    onSuccess: (data) => {
      if (!data?.fileData) {
        toast(t("dialog.noDataToExport"), "info");
        return;
      }
      downloadBase64File(data.filename || "Topup_Transactions.xlsx", data.fileData);
      toast(t("dialog.exportSuccess"), "success");
    },
    onError: (error) => {
      console.error("Export Excel API error:", error);
      toast(t("dialog.exportError"), "error");
    },
  });

  const handleExportExcel = () => {
    exportExcelMutation.mutate({
      page,
      pageSize,
      search: searchQuery ? searchQuery.trim() : undefined,
      customerId: customerIdFilter !== "ALL" ? customerIdFilter : undefined,
      paymentMethodId: paymentMethodFilter !== "ALL" ? Number(paymentMethodFilter) : undefined,
      status: statusFilter !== "ALL" ? statusFilter : undefined,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      locale: currentLocale,
    });
  };

  if (!hasPermission) {
    return <Error403Page />;
  }

  // Chuyển đổi dữ liệu danh sách giao dịch (Không dùng dummy fallback giả)
  const rows: TopupTransactionRow[] = (historyData?.data ?? []).map((item: any) => ({
    id: Number(item.id),
    transactionCode: item.transactionCode || item.transaction_code || "",
    submissionDate: item.submissionDate || item.submission_date || item.createdAt || item.created_at || "",
    wireDate: item.wireDate || item.wire_date || "",
    customerId: item.customerId || item.customer_id || "",
    customerCode: item.customerCode || item.customer_code || "",
    customerName: item.customerName || item.customer_name || "",
    customerEmail: item.customerEmail || item.customer_email || "",
    paymentMethodId: item.paymentMethodId || item.payment_method_id || 0,
    paymentMethodName:
      typeof item.paymentMethod === "string"
        ? item.paymentMethod
        : (item.paymentMethodName || item.paymentMethod?.name || item.payment_method_name || ""),
    paymentMethodIcon: item.paymentMethodIcon || item.paymentMethod?.icon || item.paymentMethod?.image || "",
    paymentMethodIsBank: Boolean(item.paymentMethodIsBank ?? item.paymentMethod?.isBank),
    wireAmount: Number(item.wireAmount ?? item.wire_amount ?? 0),
    wireAmountApprove:
      (item.status || TopupStatus.WAITING) === TopupStatus.CONFIRMED
        ? Number(item.wireAmountApprove ?? item.wire_amount_approve ?? item.wireAmountApproved ?? 0)
        : Number(item.wireAmountApprove ?? item.wire_amount_approve ?? item.wireAmountApproved ?? 0),
    currency: item.currency || "USD",
    description: item.description || "",
    status: item.status ?? TopupStatus.WAITING,
    wireImages: item.wireImages || item.wire_images || [],
    createdAt: item.createdAt || item.created_at || "",
  }));

  const totalCount = historyData?.meta?.total ?? rows.length;

  // ── 1. Định Nghĩa Cột Cho Bảng Giao Dịch Nạp Tiền ────────────────────────
  const columns: ColumnDef<TopupTransactionRow, unknown>[] = [
    // Cột 1: STT
    {
      id: "stt",
      header: "STT",
      size: 50,
      cell: ({ row }) => (
        <span className="text-xs font-semibold text-slate-500">
          {(page - 1) * pageSize + row.index + 1}
        </span>
      ),
    },
    // Cột 2: Transaction Code
    {
      accessorKey: "transactionCode",
      header: t("dialog.transactionCode") || "Mã giao dịch",
      size: 150,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const val = item.transactionCode;
        if (!val) return <span className="text-xs text-slate-400 font-normal">—</span>;
        return (
          <TransactionCodeCell
            code={val}
            onClickDetails={() => setSelectedTransactionDetail(item)}
          />
        );
      },
    },
    // Cột 3: Ngày gửi xác nhận (submission_date: DD/MM/YYYY HH:mm:ss)
    {
      accessorKey: "submissionDate",
      header: t("table.submissionDate"),
      size: 155,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const formatted = formatDateTime(item.submissionDate, "DD/MM/YYYY HH:mm:ss");
        return (
          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
            {formatted || "—"}
          </span>
        );
      },
    },
    // Cột 3: Ngày chuyển khoản (wire_date: DD/MM/YYYY)
    {
      accessorKey: "wireDate",
      header: t("table.wireDate"),
      size: 130,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const formatted = formatDateTime(item.wireDate, "DD/MM/YYYY");
        return (
          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
            {formatted || "—"}
          </span>
        );
      },
    },
    // Cột 3: Customer Code
    {
      accessorKey: "customerCode",
      header: t("table.customerCode"),
      size: 110,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const val = item.customerCode || item.customerId;
        if (!val) return <span className="text-xs text-slate-400 font-normal">—</span>;
        return (
          <CopyCell value={val}>
            <span className="font-semibold text-xs text-primary whitespace-nowrap">
              {val}
            </span>
          </CopyCell>
        );
      },
    },
    // Cột 4: Full Name
    {
      accessorKey: "customerName",
      header: "Full Name",
      size: 150,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        if (!item.customerName && !item.customerEmail) {
          return <span className="text-xs text-slate-400 font-normal">—</span>;
        }
        return (
          <div className="flex items-center gap-2 max-w-[140px]">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {(item.customerName || "K")[0]?.toUpperCase() || "K"}
            </div>
            <div className="flex flex-col truncate">
              <span className="text-xs font-medium text-slate-900 dark:text-slate-100 truncate">
                {item.customerName || "—"}
              </span>
              {item.customerEmail && (
                <span className="text-[11px] text-slate-500 truncate">{item.customerEmail}</span>
              )}
            </div>
          </div>
        );
      },
    },
    // Cột 5: Phương thức thanh toán
    {
      accessorKey: "paymentMethodName",
      header: t("table.paymentMethod"),
      size: 140,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        if (!item.paymentMethodName) {
          return <span className="text-xs text-slate-400 font-normal">—</span>;
        }
        return (
          <div className="flex items-center gap-2 max-w-[130px]">
            {item.paymentMethodIcon ? (
              <img
                src={item.paymentMethodIcon}
                alt={item.paymentMethodName}
                className="w-4 h-4 rounded-full object-contain shrink-0 border border-slate-200"
              />
            ) : (
              <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 flex items-center justify-center shrink-0 text-[10px] font-bold text-slate-600">
                $
              </div>
            )}
            <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">
              {item.paymentMethodName}
            </span>
          </div>
        );
      },
    },
    // Cột 6: Ảnh chụp hóa đơn
    {
      id: "wireImages",
      header: t("table.proofImages"),
      size: 100,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const imgs = item.wireImages ?? [];
        if (imgs.length === 0) {
          return <span className="text-xs text-slate-400 font-normal">—</span>;
        }
        return (
          <button
            type="button"
            onClick={() =>
              setSelectedProofImages(
                imgs
                  .map((i: any) => (typeof i === "string" ? i : i.imageUrl || i.url || i.path || ""))
                  .filter(Boolean),
              )
            }
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs text-slate-700 dark:text-slate-200 font-medium transition-colors whitespace-nowrap"
          >
            <ImageIcon className="w-3.5 h-3.5 text-primary" />
            <span>{t("table.viewProofImages", { count: imgs.length })}</span>
          </button>
        );
      },
    },
    // Cột 7: Nội dung
    {
      accessorKey: "description",
      header: t("table.description"),
      size: 120,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        return (
          <span className="text-xs text-slate-600 dark:text-slate-400 truncate max-w-[110px] block" title={item.description || "—"}>
            {item.description || "—"}
          </span>
        );
      },
    },
    // Cột 8: Số tiền
    {
      accessorKey: "wireAmount",
      header: t("table.wireAmount"),
      size: 90,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        return (
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
            ${item.wireAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        );
      },
    },
    // Cột 9: Thực nhận
    {
      accessorKey: "wireAmountApprove",
      header: t("table.realAmount"),
      size: 90,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        return (
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
            ${item.wireAmountApprove.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        );
      },
    },
    // Cột 10: Trạng thái
    {
      accessorKey: "status",
      header: t("table.status"),
      size: 100,
      cell: ({ row }) => {
        const item = row.original as unknown as TopupTransactionRow;
        const conf = STATUS_CONFIG[item.status] ?? {
          label: t("status.waiting"),
          bgClass: "bg-amber-100 text-amber-800",
        };
        return (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${conf.bgClass}`}>
            {conf.label}
          </span>
        );
      },
    },
    // Cột 11: Thao tác
    {
      id: "actions",
      header: t("table.actions"),
      size: 90,
      minSize: 90,
      maxSize: 90,
      meta: { align: "center", pin: "right" },
      cell: ({ row }) => {
        const tx = row.original as unknown as TopupTransactionRow;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4 text-slate-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setSelectedTransactionDetail(tx)}>
                <Eye className="h-4 w-4 text-primary" />
                <span>{t("actions.viewDetails")}</span>
              </DropdownMenuItem>

              {tx.status === TopupStatus.WAITING && (
                <DropdownMenuItem
                  onClick={() => {
                    setAdjustDialogTx(tx);
                  }}
                >
                  <Sliders className="h-4 w-4 text-indigo-600" />
                  <span className="text-indigo-600">{t("actions.adjust")}</span>
                </DropdownMenuItem>
              )}

              {tx.status === TopupStatus.WAITING && (
                <>
                  <DropdownMenuItem
                    onClick={() => {
                      setApproveDialogTx(tx);
                      setApproveAmountInput(tx.wireAmount.toString());
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">{t("actions.approve")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setRejectDialogTx(tx);
                    }}
                  >
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-red-600 font-medium">{t("actions.reject")}</span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      {/* ── Page Header & Filter Section ───────────────────────────── */}
      <div className="mb-4 flex flex-col gap-3">
        {/* Title + Action Header */}
        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <PageBreadcrumb className="mb-1" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t("title")}</h2>
          </div>
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportExcel}
              disabled={exportExcelMutation.isPending}
              className="h-9 px-4.5 gap-2 border-slate-200 hover:border-emerald-600 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-emerald-400 shadow-2xs text-[12px] font-medium cursor-pointer transition-all duration-200 disabled:opacity-50"
            >
              {exportExcelMutation.isPending ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
              ) : (
                <ExportFileIcon className="w-4 h-4" />
              )}
              <span>{t("dialog.exportExcel")}</span>
            </Button>
          </div>
        </div>

        {/* Section Filter (Bên trên Table, bên dưới Title) */}
        <TopupFilterSection
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateFrom={setDateFrom}
          setDateTo={setDateTo}
          customerIdFilter={customerIdFilter}
          setCustomerIdFilter={setCustomerIdFilter}
          customerSelectOptions={customerSelectOptions}
          paymentMethodFilter={paymentMethodFilter}
          setPaymentMethodFilter={setPaymentMethodFilter}
          paymentMethodSelectOptions={paymentMethodSelectOptions}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          statusSelectOptions={statusSelectOptions}
          onReset={() => {
            setDateFrom(defaultDates.from);
            setDateTo(defaultDates.to);
            setCustomerIdFilter("ALL");
            setPaymentMethodFilter("ALL");
            setStatusFilter("ALL");
            refetch();
          }}
        />
      </div>

      <DataTable
        data={rows}
        columns={columns}
        isLoading={isLoading}
        rowCount={totalCount}
        defaultPageSize={pageSize}
        defaultPage={page}
        searchPlaceholder={t("table.searchPlaceholder")}
        onServerChange={({ page: p, pageSize: ps, search: s, sort }) => {
          setPage(p);
          setPageSize(ps);
          if (s !== undefined) {
            setSearchQuery(s);
          }
          if (sort && sort.key && sort.direction) {
            setSortBy(sort.key);
            setSortOrder(sort.direction === "asc" ? "asc" : "desc");
          } else {
            setSortBy(undefined);
            setSortOrder(undefined);
          }
        }}
        emptyState={
          <div className="py-6 text-center flex flex-col items-center justify-center">
            <Wallet size={40} className="mx-auto mb-2 text-muted-foreground/30" />
            <p className="text-sm font-medium text-muted-foreground">{t("table.noRecordsFound")}</p>
          </div>
        }
      />

      <CreateTopupModal
        open={createOpen}
        onOpenChange={setCreateOpen}
        customerOptions={createCustomerSelectOptions}
        paymentMethodOptions={createPaymentMethodSelectOptions}
        onSuccess={() => refetch()}
      />

      <ImagePreviewModal
        open={Boolean(selectedProofImages)}
        images={selectedProofImages || []}
        onClose={() => setSelectedProofImages(null)}
      />

      <ApproveTopupModal
        transaction={approveDialogTx}
        onClose={() => setApproveDialogTx(null)}
        onSuccess={() => refetch()}
      />

      <RejectTopupModal
        transaction={rejectDialogTx}
        onClose={() => setRejectDialogTx(null)}
        onSuccess={() => refetch()}
      />

      <AdjustmentTopupModal
        transaction={adjustDialogTx}
        onClose={() => setAdjustDialogTx(null)}
        onSuccess={() => refetch()}
      />

      <TopupDetailModal
        transaction={selectedTransactionDetail}
        onClose={() => setSelectedTransactionDetail(null)}
        onOpenImagePreview={(imgs) => setSelectedProofImages(imgs)}
        statusConfig={STATUS_CONFIG}
      />
    </>
  );
}
