"use client";

import { Button } from "@flash-ship/ecom-ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Loader2 } from "lucide-react";
import React from "react";

/**
 * Component Modal Xác nhận Base dùng chung toàn hệ thống Admin (ecom-admin).
 * 
 * Đặc điểm thiết kế & Tính năng:
 * - Căn giữa màn hình với bo góc 2xl (`rounded-2xl`) & bóng đổ 2xl (`shadow-2xl`).
 * - Hỗ trợ Icon header với hiệu ứng vòng sáng (ring glow) thu hút ánh nhìn.
 * - Cho phép truyền `title` và `description` dạng React.ReactNode (hỗ trợ render thẻ chi tiết, badge, số tiền highlight).
 * - Cặp nút Hủy / Xác nhận dàn hàng ngang cân bằng (`grid grid-cols-2 gap-3`).
 * - Tự động chặn đóng modal và hiển thị Spinner Loader2 khi `isSubmitting = true`.
 */
export interface ConfirmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  iconBgClass?: string;
  confirmText?: string;
  cancelText?: string;
  showCancelButton?: boolean;
  confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  confirmButtonClass?: string;
  isSubmitting?: boolean;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void;
}

export function ConfirmModal({
  open,
  onOpenChange,
  title,
  description,
  icon,
  iconBgClass = "bg-primary/10 text-primary ring-4 ring-primary/5",
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  showCancelButton = true,
  confirmVariant = "default",
  confirmButtonClass,
  isSubmitting = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const handleCancel = () => {
    if (isSubmitting) return;
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => !isSubmitting && onOpenChange(val)}>
      <DialogContent className="max-w-[420px] rounded-2xl p-6 gap-5 focus:outline-none border border-slate-100 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900">
        <DialogHeader className="flex flex-col items-center text-center gap-3 space-y-0 pt-1">
          {icon && (
            <div className="relative flex items-center justify-center mb-1">
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform ${iconBgClass}`}
              >
                {icon}
              </div>
            </div>
          )}
          <DialogTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </DialogTitle>
          {description && (
            <div className="w-full text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              {description}
            </div>
          )}
        </DialogHeader>

        <DialogFooter className="grid grid-cols-2 gap-3 pt-2 sm:space-x-0">
          {showCancelButton && (
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="h-10 w-full rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {cancelText}
            </Button>
          )}
          <Button
            type="button"
            variant={confirmVariant}
            onClick={onConfirm}
            disabled={isSubmitting}
            className={`h-10 w-full rounded-xl text-xs font-semibold gap-1.5 transition-all active:scale-[0.98] ${
              confirmButtonClass || ""
            }`}
          >
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
