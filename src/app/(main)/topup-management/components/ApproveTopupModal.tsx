"use client";

import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { ConfirmModalType, TopupConfirmModal } from "@flash-ship/ecom-ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface ApproveTopupModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onSuccess: () => void;
}

/**
 * Component Modal Phê Duyệt Nạp Tiền (Dành cho Admin)
 * - Tái sử dụng `TopupConfirmModal` từ `@flash-ship/ecom-ui` với kiểu `ConfirmModalType.SUCCESS` enum.
 * - Hiển thị thẻ Số tiền duyệt, Khách hàng, Mã giao dịch và nút Confirm màu Xanh lá.
 */
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

  const customerName = transaction.customerName || transaction.customerEmail || String(t("dialog.customer"));
  const customerCode = transaction.customerCode || transaction.customerId;

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await approveMutation.mutateAsync({ id: transaction.id });
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

  return (
    <TopupConfirmModal
      open={Boolean(transaction)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      type={ConfirmModalType.SUCCESS}
      title={String(t("dialog.approveModalTitle"))}
      amountLabel={String(t("dialog.approvedAmountLabel"))}
      amount={wireAmountApproved}
      customerName={customerName}
      customerCode={customerCode}
      customerLabel={String(t("dialog.customer"))}
      transactionCode={transaction.transactionCode}
      transactionCodeLabel={String(t("dialog.transactionCode"))}
      paymentMethod={transaction.paymentMethod ? String(transaction.paymentMethod) : undefined}
      paymentMethodIcon={transaction.paymentMethodIcon}
      paymentMethodLabel={String(t("dialog.paymentMethod"))}
      confirmQuestion={String(t("dialog.approveModalSubtext"))}
      cancelText={String(t("dialog.cancel"))}
      confirmText={String(t("dialog.confirmApprove"))}
      isSubmitting={isSubmitting}
      onConfirm={handleConfirm}
      onCancel={onClose}
    />
  );
}
