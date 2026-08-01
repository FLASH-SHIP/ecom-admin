import ModuleI18nProvider from "@admin/components/i18n/ModuleI18nProvider";
import { PermissionGuard } from "@admin/components/layout/PermissionGuard";
import { Permissions } from "@flash-ship/ecom-lib/permissions";
import TopupManagementClient from "@admin/app/(main)/topup-management/components/TopupManagementClient";

export default function TopupManagementPage() {
  return (
    <ModuleI18nProvider namespaces={["topup", "customers", "users"]}>
      <PermissionGuard permissions={[Permissions.TOPUP_TRANSACTIONS_READ]}>
        <TopupManagementClient />
      </PermissionGuard>
    </ModuleI18nProvider>
  );
}
