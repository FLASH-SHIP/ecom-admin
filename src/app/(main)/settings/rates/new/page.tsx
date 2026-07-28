"use client";

import { PermissionGuard } from "@admin/components/layout/PermissionGuard";
import { Permissions } from "@flash-ship/ecom-lib/permissions";
import { RateCardForm } from "../components/RateCardForm";

export default function NewRateCardPage() {
  return (
    <PermissionGuard permissions={[Permissions.RATES_CREATE]}>
      <RateCardForm rateCardId={null} />
    </PermissionGuard>
  );
}
