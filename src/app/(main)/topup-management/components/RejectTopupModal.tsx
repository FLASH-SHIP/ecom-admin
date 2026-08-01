"use client";

import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { ConfirmModalType, TopupConfirmModal } from "@flash-ship/ecom-ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface RejectTopupModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onSuccess: () => void;
}

/**
 * Component Modal Từ Chối Giao Dịch Nạp Tiền (Dành cho Admin)
 * - Tái sử dụng `TopupConfirmModal` từ `@flash-ship/ecom-ui` với kiểu `ConfirmModalType.DANGER` enum.
 * - Hỗ trợ ô nhập Lý do từ chối (Textarea) và kiểm tra bắt buộc nhập.
 */
export function RejectTopupModal({
  transaction,
  onClose,
  onSuccess,
}: RejectTopupModalProps) {
  const t = useTranslations("topup");
  const { toast } = useToast();
  const [reason, setReason] = useState("");
  const [errorText, setErrorText] = useState("");

  const cancelMutation = trpc.customer.topup.cancel.useMutation();

  if (!transaction) return null;

  const handleConfirm = () => {
    if (!reason.trim()) {
      const err = t("dialog.rejectReasonPlaceholder") || "Vui lòng nhập lý do từ chối";
      setErrorText(err);
      toast(err, "error");
      return;
    }

    // Call TRPC mutation (maps to status TopupStatus.REJECT = 3 in topup_transactions table)
    cancelMutation.mutate(
      { id: Number(transaction.id), reason: reason.trim() },
      {
        onSuccess: () => {
          toast(t("dialog.successReject") || "Đã từ chối giao dịch thành công", "success");
          setReason("");
          setErrorText("");
          onClose();
          onSuccess();
        },
        onError: (err) => {
          toast(err.message || t("dialog.errorReject") || "Từ chối giao dịch thất bại", "error");
        },
      },
    );
  };

  const handleCancel = () => {
    setReason("");
    setErrorText("");
    onClose();
  };

  return (
    <TopupConfirmModal
      open={Boolean(transaction)}
      onOpenChange={handleCancel}
      type={ConfirmModalType.DANGER}
      title={String(t("dialog.rejectTitle"))}
      amountLabel={String(t("dialog.wireAmount"))}
      transactionCode={transaction.transactionCode}
      transactionCodeLabel={String(t("dialog.transactionCode"))}
      customerName={transaction.customerName}
      customerLabel={String(t("dialog.customer"))}
      amount={transaction.wireAmount ? Number(transaction.wireAmount) : undefined}
      paymentMethod={transaction.paymentMethod ? String(transaction.paymentMethod) : undefined}
      paymentMethodLabel={String(t("dialog.paymentMethod"))}
      paymentMethodIcon={transaction.paymentMethodIcon}
      cancelText={String(t("dialog.cancel"))}
      confirmText={String(t("dialog.confirmReject"))}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      isSubmitting={cancelMutation.isPending}
      showReasonInput={true}
      reasonValue={reason}
      onReasonChange={(val) => {
        setReason(val);
        if (val.trim()) setErrorText("");
      }}
      reasonErrorText={errorText}
      reasonPlaceholder={String(t("dialog.rejectReasonPlaceholder"))}
      reasonLabel={String(t("dialog.rejectReason"))}
    />
  );
}
