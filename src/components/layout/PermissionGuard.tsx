"use client";

import { trpc } from "@admin/lib/trpc";
import useUser from "@ecom/shared/@auth/useUser";
import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import Error403Page from "../errors/Error403Page";

interface PermissionGuardProps {
  permissions: string[];
  children: ReactNode;
  fallback?: ReactNode;
  mode?: "page" | "section";
}

export function useRequirePermission(permissions: string[]): {
  isLoading: boolean;
  hasPermission: boolean;
} {
  const { data: user, isGuest } = useUser();

  // Instant check for Wildcard * (Super Admin)
  const sessionPerms = user?.permissions ?? [];
  const isSuperAdmin = sessionPerms.includes("*");

  // Query detailed user permissions dynamically over tRPC with 5-minute RAM cache
  const { data: me, isLoading: isMeLoading } = trpc.viewer.auth.me.useQuery(undefined, {
    enabled: !isGuest && Boolean(user) && !isSuperAdmin,
    staleTime: 5 * 60 * 1000,
  });

  if (isGuest || !user) {
    return { isLoading: false, hasPermission: false };
  }

  if (isSuperAdmin) {
    return { isLoading: false, hasPermission: true };
  }

  if (isMeLoading) {
    return { isLoading: true, hasPermission: false };
  }

  const effectivePerms = me?.permissions ?? sessionPerms;
  const hasPermission = permissions.every((perm) => effectivePerms.includes(perm));

  return { isLoading: false, hasPermission };
}

export function PermissionGuard({
  permissions,
  children,
  fallback,
  mode = "section",
}: PermissionGuardProps) {
  const { isLoading, hasPermission } = useRequirePermission(permissions);
  const t = useTranslations("errors");

  if (isLoading) {
    return (
      <div className="flex h-32 items-center justify-center">
        <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!hasPermission) {
    if (fallback !== undefined) {
      return <>{fallback}</>;
    }

    if (mode === "page") {
      return <Error403Page />;
    }

    return (
      <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-red-50 px-4 py-3 text-sm text-destructive dark:bg-red-950/20">
        <AlertCircle className="size-4 shrink-0" />
        {t("FORBIDDEN")}
      </div>
    );
  }

  return <>{children}</>;
}
