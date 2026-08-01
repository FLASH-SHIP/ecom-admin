"use client";

import { ConfirmModal } from "@admin/components/modals/ConfirmModal";
import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { CheckCircle2, Hash, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface ApproveTopupModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function ApproveTopupModal({
  transaction,
  onClose,
  onSuccess,
}: ApproveTopupModalProps) {
  const t = useTranslations("topup");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const approveMutation = trpc.customer.topup.approveTopupRequest.useMutation();

  if (!transaction) return null;

  // LƯU Ý NGHIỆP VỤ: Xác định số tiền được phê duyệt hiển thị trên modal.
  // Ưu tiên sử dụng wireAmountApprove (nếu đã qua bước Điều chỉnh trước đó), ngược lại dùng wireAmount gốc.
  const wireAmountApproved =
    Number(transaction.wireAmountApprove) > 0
      ? Number(transaction.wireAmountApprove)
      : Number(transaction.wireAmount);

  const amountFormatted = `$${wireAmountApproved.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  const customerName = transaction.customerName || transaction.customerEmail || t("dialog.customer");
  const customerCode = transaction.customerCode || transaction.customerId;

  /**
   * Thao tác gửi xác nhận phê duyệt giao dịch sang Backend (TRPC).
   * Backend sẽ thực hiện quy trình Single Source of Truth Flow:
   * 1. Charging sang Ví Độc Lập TRƯỚC.
   * 2. Lấy balance thực tế mới nhất làm accountBalanceAfter.
   * 3. Cập nhật status = 2 (CONFIRMED) & cập nhật trọn vẹn 3 trường accountBalanceBefore, amountChange, accountBalanceAfter trong DB local.
   */
  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await approveMutation.mutateAsync({ id: transaction.id });
      // Toast hiển thị vị trí góc trên bên phải (top-right) mặc định
      toast(t("dialog.successApprove"), "success");
      onClose();
      onSuccess();
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      toast(errMsg || t("dialog.errorApprove"), "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const descriptionContent = (
    <div className="flex flex-col gap-3.5 mt-1">
      {/* Approved Amount Card */}
      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/40 text-center gap-1 shadow-sm">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
          {t("dialog.approvedAmountLabel")}
        </span>
        <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">
          {amountFormatted}
        </span>
      </div>

      {/* Customer & Transaction Info Details Card */}
      <div className="rounded-xl p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 space-y-2 text-left">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <User className="size-3.5 text-slate-400" />
            <span>{t("dialog.customer")}:</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-100">
            <span>{customerName}</span>
            {customerCode && (
              <span className="inline-flex items-center rounded-md bg-slate-200/70 dark:bg-slate-700 px-1.5 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300">
                {customerCode}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/40 dark:border-slate-700/40">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <Hash className="size-3.5 text-slate-400" />
            <span>{t("dialog.transactionCode")}:</span>
          </div>
          <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
            {transaction.transactionCode}
          </span>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400 px-2 leading-normal">
        {t("dialog.approveModalSubtext")}
      </p>
    </div>
  );

  return (
    <ConfirmModal
      open={Boolean(transaction)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      icon={<CheckCircle2 className="size-7 text-emerald-600 dark:text-emerald-400" />}
      iconBgClass="bg-emerald-100/90 dark:bg-emerald-950/80 ring-8 ring-emerald-500/10 dark:ring-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-sm"
      title={t("dialog.approveModalTitle")}
      description={descriptionContent}
      confirmText={t("dialog.confirmApprove")}
      cancelText={t("dialog.cancel")}
      confirmVariant="default"
      confirmButtonClass="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20"
      isSubmitting={isSubmitting}
      onConfirm={handleConfirm}
      onCancel={onClose}
    />
  );
}
