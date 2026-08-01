"use client";

import { Button } from "@flash-ship/ecom-ui/components/button";
import { DateRangePicker } from "@flash-ship/ecom-ui/components/date-range-picker";
import {
  SearchableSelect,
  type SearchableSelectOption,
} from "@flash-ship/ecom-ui/components/searchable-select";
import { RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export interface TopupFilterSectionProps {
  dateFrom: string | undefined;
  dateTo: string | undefined;
  setDateFrom: (date: string | undefined) => void;
  setDateTo: (date: string | undefined) => void;
  customerIdFilter: string;
  setCustomerIdFilter: (id: string) => void;
  customerSelectOptions: SearchableSelectOption[];
  paymentMethodFilter: string;
  setPaymentMethodFilter: (id: string) => void;
  paymentMethodSelectOptions: SearchableSelectOption[];
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  statusSelectOptions: SearchableSelectOption[];
  onReset: () => void;
}

export function TopupFilterSection({
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  customerIdFilter,
  setCustomerIdFilter,
  customerSelectOptions,
  paymentMethodFilter,
  setPaymentMethodFilter,
  paymentMethodSelectOptions,
  statusFilter,
  setStatusFilter,
  statusSelectOptions,
  onReset,
}: TopupFilterSectionProps) {
  const t = useTranslations("topup");

  return (
    <div className="flex flex-wrap items-center gap-2.5 p-3 rounded-lg border border-border bg-card shadow-sm">
      <DateRangePicker
        valueFrom={dateFrom}
        valueTo={dateTo}
        disableFuture={true}
        onChange={(from, to) => {
          setDateFrom(from);
          setDateTo(to);
        }}
        onClear={() => {
          setDateFrom(undefined);
          setDateTo(undefined);
        }}
        className="w-[240px] h-8 text-xs"
      />

      <SearchableSelect
        value={customerIdFilter}
        onValueChange={(val) => setCustomerIdFilter(val || "ALL")}
        options={customerSelectOptions}
        placeholder={t("filter.customer")}
        searchPlaceholder={t("filter.searchCustomer")}
        allowClear={false}
        className="w-[180px] h-8 text-xs"
      />

      <SearchableSelect
        value={paymentMethodFilter}
        onValueChange={(val) => setPaymentMethodFilter(val || "ALL")}
        options={paymentMethodSelectOptions}
        placeholder={t("filter.paymentMethod")}
        searchPlaceholder={t("filter.searchPaymentMethod")}
        allowClear={false}
        className="w-[190px] h-8 text-xs"
      />

      <SearchableSelect
        value={statusFilter}
        onValueChange={(val) => setStatusFilter(val || "ALL")}
        options={statusSelectOptions}
        placeholder={t("filter.status")}
        searchPlaceholder={t("filter.searchStatus")}
        allowClear={false}
        className="w-[150px] h-8 text-xs"
      />

      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="h-8 w-8 p-0 shrink-0"
        title={t("filter.refresh")}
      >
        <RefreshCw className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
