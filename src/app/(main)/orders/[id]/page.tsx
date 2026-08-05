"use client";

import { ConfirmModal } from "@admin/components/modals/ConfirmModal";
import { trpc } from "@admin/lib/trpc";
import type { OrderStatus } from "@flash-ship/ecom-types";
import { Badge } from "@flash-ship/ecom-ui/components/badge";
import { Button } from "@flash-ship/ecom-ui/components/button";
import { Card, CardContent } from "@flash-ship/ecom-ui/components/card";
import { Input } from "@flash-ship/ecom-ui/components/input";
import { Label } from "@flash-ship/ecom-ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@flash-ship/ecom-ui/components/select";
import { format } from "date-fns";
import { AlertCircle, ArrowLeft, CheckCircle2, PlusCircle, RefreshCw, ShoppingCart, Trash2, User } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: necessary complexity for administrative order controls
export default function AdminOrderDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const t = useTranslations("orders");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Status Change State
  const [newStatus, setNewStatus] = useState<OrderStatus | "">("");
  const [statusNote, setStatusNote] = useState("");
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isPurchasingLabel, setIsPurchasingLabel] = useState(false);

  // Checkpoint Insertion State
  const [checkpointDesc, setCheckpointDesc] = useState("");
  const [checkpointLoc, setCheckpointLoc] = useState("");
  const [checkpointTime, setCheckpointTime] = useState(() => {
    // Current local ISO string rounded to minutes
    const now = new Date();
    now.setSeconds(0, 0);
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  });
  const [isAddingCheckpoint, setIsAddingCheckpoint] = useState(false);
  const [isRecalculating, setIsRecalculating] = useState(false);

  // Fetch details
  const {
    data: order,
    isLoading,
    refetch,
  } = trpc.viewer.orders.get.useQuery({ id }, { enabled: !!id });

  const trpcContext = trpc.useUtils();

  const ORDER_STATUS_OPTIONS: OrderStatus[] = [
    "DRAFT",
    "PENDING_LABEL",
    "LABEL_CREATED",
    "WAITING_FOR_PICKUP",
    "PICKED_UP",
    "RECEIVED_AT_ORIGIN_WAREHOUSE",
    "EXPORT_CUSTOMS_CLEARANCE",
    "DEPARTED_ORIGIN_COUNTRY",
    "INTERNATIONAL_TRANSIT",
    "ARRIVED_AT_DESTINATION_COUNTRY",
    "IMPORT_CUSTOMS_CLEARANCE",
    "RECEIVED_BY_LAST_MILE_CARRIER",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
    "DELIVERY_FAILED",
    "CUSTOMS_HOLD",
    "RETURN_TO_SENDER",
    "RETURNED",
    "CANCELLED",
    "EXCEPTION",
  ];

  const getStatusBadge = (status: string) => {
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

  // Mutate Order Status
  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStatus) return;
    setError(null);
    setSuccess(null);
    setIsUpdatingStatus(true);

    try {
      await trpcContext.client.viewer.orders.updateStatus.mutate({
        id,
        status: newStatus as OrderStatus,
        metadata: statusNote.trim() ? { note: statusNote.trim() } : null,
        expectedVersion: order?.version,
      });
      setSuccess(t("statusUpdateSuccess"));
      setStatusNote("");
      refetch();
      trpcContext.viewer.orders.list.invalidate();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || t("statusUpdateError"));
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Mutate Checkpoint Timeline
  const handleAddCheckpoint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkpointDesc.trim()) return;
    setError(null);
    setSuccess(null);
    setIsAddingCheckpoint(true);

    try {
      await trpcContext.client.viewer.orders.addCheckpoint.mutate({
        orderId: id,
        checkpointDate: new Date(checkpointTime),
        description: checkpointDesc.trim(),
        location: checkpointLoc.trim() || null,
      });
      setSuccess(t("addCheckpointSuccess"));
      setCheckpointDesc("");
      setCheckpointLoc("");
      refetch();
      trpcContext.viewer.orders.list.invalidate();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || t("addCheckpointError"));
    } finally {
      setIsAddingCheckpoint(false);
    }
  };

  const handleRecalculate = async (forceRefresh: boolean) => {
    setError(null);
    setSuccess(null);
    setIsRecalculating(true);

    try {
      await trpcContext.client.viewer.orders.recalculate.mutate({
        id,
        forceRefresh,
      });
      setSuccess(t("recalculateSuccess"));
      refetch();
      trpcContext.viewer.orders.list.invalidate();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || t("recalculateError"));
    } finally {
      setIsRecalculating(false);
    }
  };

  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);
  const [showVoidConfirm, setShowVoidConfirm] = useState(false);
  const [showReconcileConfirm, setShowReconcileConfirm] = useState(false);
  const [isVoidingLabel, setIsVoidingLabel] = useState(false);
  const [isReconciling, setIsReconciling] = useState(false);

  const hasFailedPaymentLog = order?.activityLogs?.some(
    (log) => log.action === "PAYMENT_FAILED_RECONCILE"
  );
  const isReconciledSuccess = order?.activityLogs?.some(
    (log) => log.action === "RECONCILE_SUCCESS"
  );
  const needsReconcile = Boolean(hasFailedPaymentLog && !isReconciledSuccess);

  const handleReconcilePayment = async () => {
    setError(null);
    setSuccess(null);
    setIsReconciling(true);

    try {
      const res = await trpcContext.client.viewer.orders.reconcilePayment.mutate({ id });
      setShowReconcileConfirm(false);
      setSuccess(`Khấu trừ bổ sung cước phí nhãn tem thành công (${res.feeDeducted}$)!`);
      refetch();
      trpcContext.viewer.orders.list.invalidate();
    } catch (err: unknown) {
      setShowReconcileConfirm(false);
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || "Lỗi khi khấu trừ bổ sung tiền ví");
    } finally {
      setIsReconciling(false);
    }
  };

  const handlePurchaseLabel = async () => {
    setError(null);
    setSuccess(null);
    setIsPurchasingLabel(true);

    try {
      const res = await trpcContext.client.viewer.orders.purchaseLabel.mutate({ id });
      setShowPurchaseConfirm(false);
      if ("isAmbiguous" in res && res.isAmbiguous) {
        setError(`Lỗi mua nhãn (Địa chỉ không hợp lệ - 202): ${res.message || "Địa chỉ nhận hàng không tìm thấy hoặc thiếu thông tin"}`);
      } else {
        setSuccess(t("purchaseLabelSuccess"));
        refetch();
        trpcContext.viewer.orders.list.invalidate();
      }
    } catch (err: unknown) {
      setShowPurchaseConfirm(false);
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || t("purchaseLabelError"));
    } finally {
      setIsPurchasingLabel(false);
    }
  };

  const handleVoidLabel = async () => {
    setError(null);
    setSuccess(null);
    setIsVoidingLabel(true);

    try {
      await trpcContext.client.viewer.orders.voidLabel.mutate({ id });
      setSuccess(t("voidLabelSuccess"));
      setShowVoidConfirm(false);
      refetch();
      trpcContext.viewer.orders.list.invalidate();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg || t("voidLabelError"));
    } finally {
      setIsVoidingLabel(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-12 flex flex-col justify-center items-center gap-2">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#0F798C] border-t-transparent" />
        <span className="text-sm text-muted-foreground">{t("loadingDetails")}</span>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="py-12 text-center flex flex-col gap-4 items-center">
        <h2 className="text-xl font-bold">{t("notFound")}</h2>
        <p className="text-muted-foreground">{t("notFoundDesc")}</p>
        <Link href="/orders">
          <Button className="bg-[#0F798C] text-white">{t("backToList")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/orders">
          <Button
            variant="outline"
            size="icon"
            className="border-border hover:bg-accent cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">
              {t("orderTitle")}: {order.orderCode}
            </h1>
            {getStatusBadge(order.status)}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {t("createdAt")}: {format(new Date(order.createdAt), "dd/MM/yyyy HH:mm:ss")} |{" "}
            {t("orderIdLabel")}: {order.id}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {needsReconcile && (
            <Button
              onClick={() => setShowReconcileConfirm(true)}
              disabled={isReconciling}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-1.5 px-3 rounded-lg cursor-pointer flex items-center gap-1.5 animate-pulse"
            >
              {isReconciling ? (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <AlertCircle className="h-3.5 w-3.5" />
              )}
              Khấu trừ ví bổ sung
            </Button>
          )}
          {order.status === "PENDING_LABEL" && (
            <Button
              onClick={() => setShowPurchaseConfirm(true)}
              disabled={isPurchasingLabel}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-1.5 px-3 rounded-lg cursor-pointer flex items-center gap-1.5"
            >
              {isPurchasingLabel ? (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <ShoppingCart className="h-3.5 w-3.5" />
              )}
              {t("purchaseLabel")}
            </Button>
          )}
          {["LABEL_CREATED", "WAITING_FOR_PICKUP"].includes(order.status) && (
            <Button
              onClick={() => setShowVoidConfirm(true)}
              disabled={isVoidingLabel}
              variant="destructive"
              className="font-semibold text-xs py-1.5 px-3 rounded-lg cursor-pointer flex items-center gap-1.5"
            >
              {isVoidingLabel ? (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <Trash2 className="h-3.5 w-3.5" />
              )}
              {t("voidLabel")}
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={() => refetch()}
            className="border-border hover:bg-accent cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {needsReconcile && (
        <div className="mb-4 p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl flex items-center justify-between text-xs text-amber-800 dark:text-amber-300 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Cảnh báo thu tiền:</strong> Tem đã được tạo trên Carrier thành công nhưng trừ tiền ví thất bại. Vui lòng kiểm tra ví khách hàng và nhấn <strong>Khấu trừ ví bổ sung</strong>.
            </span>
          </div>
          <Button
            onClick={() => setShowReconcileConfirm(true)}
            disabled={isReconciling}
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3 py-1 ml-3 shrink-0 rounded-lg cursor-pointer"
          >
            Khấu trừ ngay
          </Button>
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 dark:bg-emerald-950/20 px-4 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-rose-100 bg-rose-50 dark:bg-rose-950/20 px-4 py-3 text-sm font-semibold text-rose-600 dark:text-rose-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Order Information */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* General and Shipping details */}
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg border-b border-border pb-2 text-foreground mb-4">
                {t("generalAndShipping")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("shippingMethod")}</span>
                  <span className="font-medium text-foreground">{order.shippingMethod}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("shippingOrigin")}</span>
                  <span className="font-medium text-foreground">{order.shippingOrigin}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("sellerOrderId")}</span>
                  <span className="font-medium text-foreground">{order.sellerOrderId || "-"}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("importId")}</span>
                  <span className="font-medium text-foreground">{order.importId || "-"}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("actualWeight")}</span>
                  <span className="font-medium text-foreground">{order.declaredWeight} gr</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("volumeDimensions")}</span>
                  <span className="font-medium text-foreground">
                    {order.dimensionLength && order.dimensionWidth && order.dimensionHeight
                      ? `L ${order.dimensionLength} × W ${order.dimensionWidth} × H ${order.dimensionHeight} cm`
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("declaredValue")}</span>
                  <span className="font-medium text-foreground">${order.declaredValue}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="text-muted-foreground">{t("hsCode")}</span>
                  <span className="font-medium text-foreground">
                    {order.products?.[0]?.hsCode || "-"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sender & Receiver Address Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg border-b border-border pb-2 text-foreground mb-4">
                  {t("senderTitle")}
                </h3>
                <div className="text-sm font-medium text-foreground flex flex-col gap-1.5">
                  <div>
                    {t("detailSenderName")}: {order.senderName || "-"}
                  </div>
                  <div className="text-muted-foreground">
                    {t("detailSenderPhone")}: {order.senderPhone || "-"}
                  </div>
                  <div className="text-muted-foreground">
                    {t("detailSenderEmail")}: {order.senderEmail || "-"}
                  </div>
                  <div>
                    {t("detailSenderAddress")}: {order.senderAddress || "-"}
                  </div>
                  <div>
                    {order.senderCity}, {order.senderState}, {order.senderCountry} (
                    {order.senderZipCode})
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg border-b border-border pb-2 text-foreground mb-4">
                  {t("receiverTitle")}
                </h3>
                <div className="text-sm font-medium text-foreground flex flex-col gap-1.5">
                  <div>
                    {t("detailReceiverName")}: {order.receiverName}
                  </div>
                  <div className="text-muted-foreground">
                    {t("detailReceiverPhone")}: {order.receiverPhone || "-"}
                  </div>
                  <div className="text-muted-foreground">
                    {t("detailReceiverEmail")}: {order.receiverEmail || "-"}
                  </div>
                  <div>
                    {t("detailReceiverAddress1")}: {order.receiverAddress1}
                  </div>
                  {order.receiverAddress2 && (
                    <div>
                      {t("detailReceiverAddress2")}: {order.receiverAddress2}
                    </div>
                  )}
                  <div>
                    {order.receiverCity}, {order.receiverState}, {order.receiverCountry} (
                    {order.receiverZipCode})
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing calculations */}
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-3 mb-4 gap-3">
                <h3 className="font-bold text-lg text-foreground">{t("pricingInfo")}</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isRecalculating}
                    onClick={() => handleRecalculate(false)}
                    className="border-border hover:bg-accent text-xs font-semibold cursor-pointer"
                  >
                    {isRecalculating ? (
                      <RefreshCw className="h-3 w-3 animate-spin mr-1" />
                    ) : (
                      <RefreshCw className="h-3 w-3 mr-1" />
                    )}
                    {t("recalculateBtn")} (Giá gốc)
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isRecalculating}
                    onClick={() => handleRecalculate(true)}
                    className="border-border hover:bg-accent text-xs font-semibold text-[#0F798C] border-[#0F798C]/20 hover:bg-[#0F798C]/5 cursor-pointer"
                  >
                    {isRecalculating ? (
                      <RefreshCw className="h-3 w-3 animate-spin mr-1" />
                    ) : (
                      <RefreshCw className="h-3 w-3 mr-1" />
                    )}
                    {t("recalculateBtn")} (Giá hiện hành)
                  </Button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-6">
                <div className="bg-muted/30 p-4 rounded-xl flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                    {t("detailBaseShippingFee")}
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    ${Number(order.baseShippingFee || 0).toFixed(2)}
                  </span>
                </div>
                <div className="bg-muted/30 p-4 rounded-xl flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                    {t("detailFuelSurcharge")}
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    ${Number(order.surchargeFee || 0).toFixed(2)}
                  </span>
                </div>
                <div className="bg-[#0F798C]/5 dark:bg-cyan-950/20 p-4 rounded-xl flex flex-col gap-1 border border-[#0F798C]/10">
                  <span className="text-xs text-[#0F798C] dark:text-cyan-400 uppercase font-bold tracking-wider">
                    {t("detailTotalCollected")}
                  </span>
                  <span className="text-xl font-bold text-[#0F798C] dark:text-cyan-400">
                    ${Number(order.totalFee || 0).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Detailed Cost Breakdown Table */}
              <div className="mt-4">
                <h4 className="font-bold text-sm text-muted-foreground mb-3">
                  {t("feeItemsTitle")}
                </h4>
                <div className="border border-border rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-border text-sm">
                    <thead className="bg-muted/40">
                      <tr>
                        <th className="px-4 py-2.5 text-left font-semibold text-muted-foreground">
                          {t("feeTypeLabel")}
                        </th>
                        <th className="px-4 py-2.5 text-right font-semibold text-muted-foreground">
                          {t("feeAmountLabel")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {order.feeItems && order.feeItems.length > 0 ? (
                        order.feeItems.map((item) => (
                          <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                            <td className="px-4 py-2.5 font-medium text-foreground">
                              {t(`feeType.${item.feeType}`) || item.name}
                            </td>
                            <td className="px-4 py-2.5 text-right font-semibold text-foreground">
                              ${Number(item.amount).toFixed(2)} {item.currency}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <>
                          <tr className="hover:bg-muted/10 transition-colors">
                            <td className="px-4 py-2.5 font-medium text-foreground">
                              {t("detailBaseShippingFee")}
                            </td>
                            <td className="px-4 py-2.5 text-right font-semibold text-foreground">
                              ${Number(order.baseShippingFee || 0).toFixed(2)} USD
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/10 transition-colors">
                            <td className="px-4 py-2.5 font-medium text-foreground">
                              {t("detailFuelSurcharge")}
                            </td>
                            <td className="px-4 py-2.5 text-right font-semibold text-foreground">
                              ${Number(order.surchargeFee || 0).toFixed(2)} USD
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Admin Status Mutation Panel */}
        <div className="flex flex-col gap-6">
          {/* Customer Info Card */}
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6 flex flex-col gap-3">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2 border-b border-border pb-2">
                <User className="h-5 w-5 text-[#0F798C] dark:text-cyan-400" />
                {t("customerInfo")}
              </h3>
              <div className="text-sm font-medium text-foreground flex flex-col gap-2">
                <div className="flex justify-between pb-1.5 border-b border-border/40">
                  <span className="text-muted-foreground font-normal">{t("customerName")}</span>
                  <span>
                    {order.customer?.name || order.customer?.username || `ID: #${order.customerId}`}
                  </span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-border/40">
                  <span className="text-muted-foreground font-normal">{t("customerEmail")}</span>
                  <span className="text-xs break-all">{order.customer?.email}</span>
                </div>
                {order.customer?.phone && (
                  <div className="flex justify-between pb-1.5 border-b border-border/40">
                    <span className="text-muted-foreground font-normal">{t("customerPhone")}</span>
                    <span>{order.customer.phone}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-normal">{t("customerAccount")}</span>
                  <span className="text-xs text-muted-foreground font-mono">
                    @{order.customer?.username}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Mutation Form */}
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#0F798C] dark:text-cyan-400" />
                {t("updateStatus")}
              </h3>
              <form onSubmit={handleUpdateStatus} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold text-muted-foreground">
                    {t("selectNewStatus")}
                  </Label>
                  <Select
                    value={newStatus}
                    onValueChange={(val) => setNewStatus(val as OrderStatus)}
                  >
                    <SelectTrigger className="w-full bg-background/50 border-input">
                      <SelectValue placeholder={t("selectStatusPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {ORDER_STATUS_OPTIONS.map((statusVal) => (
                        <SelectItem key={statusVal} value={statusVal}>
                          {t(`status.${statusVal}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="statusNote" className="text-xs font-bold text-muted-foreground">
                    {t("statusNoteLabel")}
                  </Label>
                  <Input
                    id="statusNote"
                    type="text"
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder={t("statusNotePlaceholder")}
                    className="w-full bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isUpdatingStatus || !newStatus}
                  className="w-full bg-[#0F798C] hover:bg-[#0F798C]/90 text-white font-semibold py-2 rounded-lg cursor-pointer"
                >
                  {isUpdatingStatus && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                  )}
                  {t("saveChanges")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Manually Add Scan Timeline Checkpoint Form */}
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-[#0F798C] dark:text-cyan-400" />
                {t("addCheckpointTitle")}
              </h3>
              <form onSubmit={handleAddCheckpoint} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="checkpointDesc"
                    className="text-xs font-bold text-muted-foreground"
                  >
                    {t("checkpointDescLabel")}
                  </Label>
                  <Input
                    id="checkpointDesc"
                    type="text"
                    required
                    value={checkpointDesc}
                    onChange={(e) => setCheckpointDesc(e.target.value)}
                    placeholder={t("checkpointDescPlaceholder")}
                    className="w-full bg-background/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="checkpointLoc"
                    className="text-xs font-bold text-muted-foreground"
                  >
                    {t("checkpointLocLabel")}
                  </Label>
                  <Input
                    id="checkpointLoc"
                    type="text"
                    value={checkpointLoc}
                    onChange={(e) => setCheckpointLoc(e.target.value)}
                    placeholder={t("checkpointLocPlaceholder")}
                    className="w-full bg-background/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="checkpointTime"
                    className="text-xs font-bold text-muted-foreground"
                  >
                    {t("checkpointTimeLabel")}
                  </Label>
                  <Input
                    id="checkpointTime"
                    type="datetime-local"
                    required
                    value={checkpointTime}
                    onChange={(e) => setCheckpointTime(e.target.value)}
                    className="w-full bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isAddingCheckpoint || !checkpointDesc.trim()}
                  className="w-full bg-[#0F798C] hover:bg-[#0F798C]/90 text-white font-semibold py-2 rounded-lg cursor-pointer"
                >
                  {isAddingCheckpoint && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                  )}
                  {t("addCheckpointBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Timelines: Checkpoints and Activity Logs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Track & Trace Timeline */}
        <Card className="rounded-xl border border-border bg-card">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg border-b border-border pb-2 text-foreground mb-4">
              {t("checkpointsTitle")}
            </h3>
            {order.trackingCheckpoints.length === 0 ? (
              <div className="text-sm text-muted-foreground italic py-4">{t("noCheckpoints")}</div>
            ) : (
              <div className="relative border-l border-[#0F798C]/40 ml-2.5 flex flex-col gap-6 py-2">
                {order.trackingCheckpoints.map((cp) => (
                  <div key={cp.id} className="relative pl-6">
                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F798C] ring-4 ring-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <div className="flex flex-col text-sm">
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(cp.checkpointDate), "dd/MM/yyyy HH:mm")}
                      </span>
                      <span className="font-semibold text-foreground">{cp.description}</span>
                      {cp.location && (
                        <span className="text-xs text-muted-foreground font-medium italic">
                          {t("locationPrefix")}: {cp.location}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Audit Activity Logs */}
        <Card className="rounded-xl border border-border bg-card">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg border-b border-border pb-2 text-foreground mb-4">
              {t("activityLogsTitle")}
            </h3>
            <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-1">
              {order.activityLogs.length === 0 ? (
                <div className="text-sm text-muted-foreground italic py-4">
                  {t("noActivityLogs")}
                </div>
              ) : (
                order.activityLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-muted/40 p-3.5 rounded-xl text-xs flex flex-col gap-1.5"
                  >
                    <div className="flex justify-between text-muted-foreground font-semibold">
                      <span>
                        {t("createdByPrefix")}: {log.actorName} (@{log.actorUsername})
                      </span>
                      <span>{format(new Date(log.createdAt), "dd/MM/yyyy HH:mm:ss")}</span>
                    </div>
                    <div className="text-foreground font-medium">{log.description}</div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <ConfirmModal
        open={showPurchaseConfirm}
        onOpenChange={setShowPurchaseConfirm}
        title={t("confirmPurchaseLabelTitle")}
        description={t("confirmPurchaseLabelDesc", { orderCode: order.orderCode })}
        icon={<ShoppingCart className="size-6 text-emerald-600 dark:text-emerald-400" />}
        iconBgClass="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 ring-4 ring-emerald-500/10"
        confirmText={t("purchaseLabelBtn")}
        confirmButtonClass="bg-emerald-600 hover:bg-emerald-700 text-white"
        isSubmitting={isPurchasingLabel}
        onConfirm={handlePurchaseLabel}
      />

      <ConfirmModal
        open={showVoidConfirm}
        onOpenChange={setShowVoidConfirm}
        title={t("confirmVoidLabelTitle")}
        description={t("confirmVoidLabelDesc", { orderCode: order.orderCode })}
        icon={<Trash2 className="size-6 text-rose-600 dark:text-rose-400" />}
        iconBgClass="bg-rose-50 dark:bg-rose-950/40 text-rose-600 ring-4 ring-rose-500/10"
        confirmText={t("voidLabelBtn")}
        confirmButtonClass="bg-rose-600 hover:bg-rose-700 text-white"
        isSubmitting={isVoidingLabel}
        onConfirm={handleVoidLabel}
      />

      <ConfirmModal
        open={showReconcileConfirm}
        onOpenChange={setShowReconcileConfirm}
        title="Xác nhận khấu trừ bổ sung tiền ví"
        description={`Bạn có chắc chắn muốn thực hiện khấu trừ bổ sung cước phí nhãn tem cho đơn hàng #${order.orderCode} vào ví khách hàng?`}
        icon={<AlertCircle className="size-6 text-amber-600 dark:text-amber-400" />}
        iconBgClass="bg-amber-50 dark:bg-amber-950/40 text-amber-600 ring-4 ring-amber-500/10"
        confirmText="Xác nhận khấu trừ"
        confirmButtonClass="bg-amber-600 hover:bg-amber-700 text-white"
        isSubmitting={isReconciling}
        onConfirm={handleReconcilePayment}
      />
    </div>
  );
}
