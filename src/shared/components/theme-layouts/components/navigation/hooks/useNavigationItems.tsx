import { trpc } from "@admin/lib/trpc";
import { useMemo } from "react";
import type { NavItemType } from "../../../../../@app/core/navigation/types/NavItemType";
import appUtils from "../../../../../@app/utils";
import navigationHelper from "../../../../../@app/utils/navigationHelper";
import useUser from "../../../../../@auth/useUser";
import useI18n from "../../../../../@i18n/useI18n";
import { useNavigationContext } from "../contexts/useNavigationContext";

function useNavigationItems() {
  const { navigationItems: navigationData } = useNavigationContext();

  const { data: user } = useUser();
  const sessionPermissions = user?.permissions;
  const userRole = user?.role;
  const isSuperAdmin = sessionPermissions?.includes("*");

  const { data: me } = trpc.viewer.auth.me.useQuery(undefined, {
    enabled: Boolean(user) && !isSuperAdmin,
    staleTime: 5 * 60 * 1000,
  });

  const effectivePermissions = isSuperAdmin
    ? sessionPermissions
    : (me?.permissions ?? sessionPermissions);
  const { languageId } = useI18n();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // biome-ignore lint/correctness/useExhaustiveDependencies: languageId forces re-memoization on language change
  const data = useMemo(() => {
    const _navigation = navigationHelper.unflattenNavigation(navigationData);

    function setAdditionalData(data: NavItemType[]): NavItemType[] {
      return data?.map((item) => ({
        hasPermission: Boolean(appUtils.hasPermission(item?.auth, effectivePermissions, userRole)),
        ...item,
        ...(item?.children ? { children: setAdditionalData(item?.children) } : {}),
      }));
    }

    const translatedValues = setAdditionalData(_navigation);

    return translatedValues;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigationData, effectivePermissions, userRole, languageId]);

  const flattenData = useMemo(() => {
    return navigationHelper.flattenNavigation(data);
  }, [data]);

  return { data, flattenData };
}

export default useNavigationItems;
