"use client";

import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { TopupStatus } from "@flash-ship/ecom-types";
import { Button } from "@flash-ship/ecom-ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Textarea } from "@flash-ship/ecom-ui/components/textarea";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface RejectTopupModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onSuccess: () => void;
}

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
      setErrorText(t("dialog.rejectReasonPlaceholder") || "Vui lòng nhập lý do từ chối");
      toast("Vui lòng nhập lý do từ chối", "error");
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

  return (
    <Dialog
      open={Boolean(transaction)}
      onOpenChange={() => {
        setReason("");
        setErrorText("");
        onClose();
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
            {t("dialog.rejectTitle")}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-2">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {t("dialog.rejectTitle")}{" "}
            <strong className="text-slate-900 dark:text-slate-100">#{transaction.transactionCode}</strong>{" "}
            ({transaction.customerName})
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {t("dialog.rejectReason")} <span className="text-red-500">*</span>:
            </label>
            <Textarea
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (e.target.value.trim()) setErrorText("");
              }}
              placeholder={t("dialog.rejectReasonPlaceholder")}
              rows={3}
              className={`text-xs resize-none ${errorText ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            />
            {errorText && <span className="text-[11px] text-red-500">{errorText}</span>}
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setReason("");
              setErrorText("");
              onClose();
            }}
            className="h-8 text-xs"
          >
            {t("dialog.cancel")}
          </Button>
          <Button
            variant="default"
            size="sm"
            disabled={cancelMutation.isPending}
            className="h-8 text-xs bg-red-600 hover:bg-red-700 text-white min-w-[90px] flex items-center justify-center gap-1.5"
            onClick={handleConfirm}
          >
            {cancelMutation.isPending ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{t("dialog.confirmReject")}</span>
              </>
            ) : (
              t("dialog.confirmReject")
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
