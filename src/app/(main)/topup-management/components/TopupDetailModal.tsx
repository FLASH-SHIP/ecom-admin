"use client";

import { CopyCell } from "@admin/components/data-table/CopyCell";
import { formatDateTime } from "@admin/utils/dateFormat";
import { Button } from "@flash-ship/ecom-ui/components/button";
import { Card } from "@flash-ship/ecom-ui/components/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { TooltipProvider } from "@flash-ship/ecom-ui/components/tooltip";
import { Calendar, CreditCard, FileText, Image as ImageIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface TopupDetailModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onOpenImagePreview: (images: string[]) => void;
  statusConfig: Record<number, { label: string; bgClass: string }>;
}

export function TopupDetailModal({
  transaction,
  onClose,
  onOpenImagePreview,
  statusConfig,
}: TopupDetailModalProps) {
  const t = useTranslations("topup");

  if (!transaction) return null;

  const imgs = transaction.wireImages ?? [];
  const statusInfo = statusConfig[transaction.status] ?? {
    label: t("status.waiting"),
    bgClass: "bg-amber-100 text-amber-800",
  };

  const imageArray = imgs
    .map((i: any) => (typeof i === "string" ? i : i.imageUrl || i.url || i.path || ""))
    .filter(Boolean);

  return (
    <TooltipProvider>
      <Dialog open={Boolean(transaction)} onOpenChange={() => onClose()}>
        <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden bg-white dark:bg-slate-950 rounded-xl shadow-xl flex flex-col max-h-[90vh]">
          {/* Header Cố định */}
          <DialogHeader className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between shrink-0">
            <DialogTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {t("dialog.detailTitle", { id: transaction.id })}
            </DialogTitle>
          </DialogHeader>

          {/* Content Cuộn Y */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 text-xs text-slate-700 dark:text-slate-300">
            {/* 1. Card Mã giao dịch & Khách hàng */}
            <Card className="p-4 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Transaction Code
                </span>
                <CopyCell value={transaction.transactionCode}>
                  <span className="font-bold text-xs text-primary bg-primary/10 px-2 py-0.5 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                    {transaction.transactionCode}
                  </span>
                </CopyCell>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {(transaction.customerName || "K")[0].toUpperCase()}
                </div>
                <div className="flex flex-col truncate">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-xs truncate">
                      {transaction.customerName}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.2 rounded">
                      {transaction.customerCode || transaction.customerId}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 truncate mt-0.5">{transaction.customerEmail}</span>
                </div>
              </div>
            </Card>

            {/* 2. Hero Card: Tổng quan tài chính & Trạng thái */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2.5">
                <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">
                  Trạng thái giao dịch
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap shadow-2xs ${statusInfo.bgClass}`}
                >
                  {statusInfo.label}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {t("table.wireAmount")}
                  </span>
                  <span className="text-base font-bold text-slate-100 font-mono">
                    ${transaction.wireAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 pl-3 border-l border-slate-700/60">
                  <span className="text-[11px] text-emerald-400 font-medium">
                    {t("table.realAmount")}
                  </span>
                  <span className="text-base font-bold text-emerald-400 font-mono">
                    ${transaction.wireAmountApprove.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Card Chi tiết phương thức & chứng từ */}
            <Card className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 divide-y divide-slate-200/60 dark:divide-slate-800/80 overflow-hidden shadow-2xs">
              {/* Ngày gửi xác nhận (submission_date) */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t("table.submissionDate")}</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {formatDateTime(transaction.submissionDate, "DD/MM/YYYY HH:mm:ss")}
                </span>
              </div>

              {/* Ngày chuyển khoản (wire_date) */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t("table.wireDate")}</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {formatDateTime(transaction.wireDate, "DD/MM/YYYY")}
                </span>
              </div>

              {/* Phương thức thanh toán */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                  <CreditCard className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t("table.paymentMethod")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {transaction.paymentMethodIcon ? (
                    <img
                      src={transaction.paymentMethodIcon}
                      alt={transaction.paymentMethodName}
                      className="w-4 h-4 rounded-full object-contain shrink-0"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      $
                    </div>
                  )}
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {transaction.paymentMethodName}
                  </span>
                </div>
              </div>

              {/* Chứng từ thanh toán */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                  <ImageIcon className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t("table.proofImages")}</span>
                </div>
                {imageArray.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => onOpenImagePreview(imageArray)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-slate-200 font-medium border border-slate-200/80 dark:border-slate-700 transition-colors cursor-pointer whitespace-nowrap outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-primary" />
                    <span>{t("table.viewProofImages", { count: imageArray.length })}</span>
                  </button>
                ) : (
                  <span className="text-slate-400 font-normal">—</span>
                )}
              </div>
            </Card>

            {/* 4. Card Ghi chú */}
            <Card className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px] uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{t("table.description")}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap bg-white dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                {transaction.description || "—"}
              </p>
            </Card>
          </div>

          {/* Footer Cố định */}
          <DialogFooter className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-end gap-2 shrink-0">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="h-8 text-xs font-medium text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700"
            >
              {t("dialog.cancel")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
