"use client";

import { useToast } from "@admin/components/toast-provider";
import { Button } from "@flash-ship/ecom-ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Input } from "@flash-ship/ecom-ui/components/input";
import { Label } from "@flash-ship/ecom-ui/components/label";
import { NumberInput } from "@flash-ship/ecom-ui/components/NumberInput";
import {
  SearchableSelect,
  type SearchableSelectOption,
} from "@flash-ship/ecom-ui/components/searchable-select";
import { useTranslations } from "next-intl";
import { useState } from "react";

export interface CreateTopupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customerOptions: SearchableSelectOption[];
  paymentMethodOptions: SearchableSelectOption[];
  onSuccess: () => void;
}

export function CreateTopupModal({
  open,
  onOpenChange,
  customerOptions,
  paymentMethodOptions,
  onSuccess,
}: CreateTopupModalProps) {
  const t = useTranslations("topup");
  const { toast } = useToast();

  const [customerId, setCustomerId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!customerId || !amount) {
      toast("Vui lòng chọn khách hàng và nhập số tiền", "error");
      return;
    }
    toast(t("dialog.successCreate"), "success");
    onOpenChange(false);
    setCustomerId("");
    setAmount("");
    setDescription("");
    onSuccess();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">{t("dialog.createTitle")}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              {t("dialog.customer")} (*):
            </Label>
            <SearchableSelect
              value={customerId}
              onValueChange={setCustomerId}
              options={customerOptions}
              placeholder={t("filter.searchCustomer")}
              searchPlaceholder={t("filter.searchCustomer")}
              allowClear={true}
              className="w-full h-9 text-xs"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold text-slate-700">
              {t("dialog.paymentMethod")} (*):
            </Label>
            <SearchableSelect
              value={paymentMethodId}
              onValueChange={setPaymentMethodId}
              options={paymentMethodOptions}
              placeholder={t("filter.searchPaymentMethod")}
              searchPlaceholder={t("filter.searchPaymentMethod")}
              allowClear={true}
              className="w-full h-9 text-xs"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="topup-amount-input" className="text-xs font-semibold text-slate-700">
              {t("dialog.amount")} (*):
            </Label>
            <NumberInput
              id="topup-amount-input"
              placeholder="500"
              precision={2}
              min={0}
              value={amount}
              onChange={(_num, rawStr) => setAmount(rawStr)}
              className="h-9 text-xs"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="topup-description-input" className="text-xs font-semibold text-slate-700">
              {t("dialog.description")}:
            </Label>
            <Input
              id="topup-description-input"
              placeholder="..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-9 text-xs"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)} className="h-8 text-xs">
            {t("dialog.cancel")}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleCreate}
          >
            {t("dialog.confirmCreate")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
