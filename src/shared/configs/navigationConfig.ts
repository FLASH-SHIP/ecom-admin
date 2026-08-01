import { Permissions } from "@flash-ship/ecom-lib/permissions";
import type { NavItemType } from "../@app/core/navigation/types/NavItemType";

/**
 * CMS Navigation Configuration for Ecom Admin.
 *
 * Follows the Botble CMS sidebar convention:
 *  - Engagement (Tương tác)
 *  - Content (Nội dung)
 *  - Utilities + Settings
 *  - "Quản trị hệ thống" as a direct link to /system (Tổng quan page)
 *
 * Uses lucide: icon prefix — the only icon set supported by icon.
 */
const navigationConfig: NavItemType[] = [
  // ── General ─────────────────────────────────────────────────────
  {
    id: "general",
    title: "General",
    translate: "nav.general",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Bảng điều khiển",
        translate: "nav.dashboard",
        type: "item",
        icon: "lucide:layout-dashboard",
        url: "/",
        end: true,
      },
    ],
  },

  // ── Engagement ───────────────────────────────────────────────────
  {
    id: "engagement",
    title: "Tương tác",
    translate: "nav.engagement",
    type: "group",
    children: [
      {
        id: "customers",
        title: "Khách hàng",
        translate: "nav.customers",
        type: "item",
        icon: "lucide:user-check",
        url: "/customers",
        auth: [Permissions.CUSTOMERS_READ],
      },
      {
        id: "orders",
        title: "Đơn hàng",
        translate: "nav.orders",
        type: "item",
        icon: "lucide:shopping-bag",
        url: "/orders",
        auth: [Permissions.CUSTOMERS_READ],
      },
      {
        id: "customer-groups",
        title: "Nhóm khách hàng",
        translate: "nav.customerGroups",
        type: "item",
        icon: "lucide:users",
        url: "/customers/groups",
        auth: [Permissions.CUSTOMER_GROUPS_READ],
      },
      {
        id: "verification-codes",
        title: "Lịch sử gửi mã",
        translate: "nav.verificationCodes",
        type: "item",
        icon: "lucide:clipboard-list",
        url: "/customers/verification-codes",
        auth: [Permissions.CUSTOMERS_READ],
      },
      {
        id: "comments",
        title: "Bình luận",
        translate: "nav.comments",
        type: "item",
        icon: "lucide:message-circle",
        url: "/comments",
        auth: [Permissions.COMMENTS_READ],
      },
      {
        id: "contacts",
        title: "Liên hệ",
        translate: "nav.contacts",
        type: "item",
        icon: "lucide:mail",
        url: "/contacts",
        auth: [Permissions.CONTACTS_READ],
      },
      {
        id: "notifications-broadcast",
        title: "Chiến dịch gửi tin",
        translate: "nav.notificationsBroadcast",
        type: "item",
        icon: "lucide:megaphone",
        url: "/broadcasts",
        auth: [Permissions.NOTIFICATIONS_BROADCAST_READ],
      },
    ],
  },

  // ── Finance ───────────────────────────────────────────────────────
  {
    id: "finance",
    title: "Tài chính",
    translate: "nav.finance",
    type: "group",
    children: [
      {
        id: "topup-management",
        title: "Quản lý nạp tiền",
        translate: "nav.topupManagement",
        type: "item",
        icon: "lucide:wallet",
        url: "/topup-management",
        auth: [Permissions.TOPUP_TRANSACTIONS_READ],
      },
    ],
  },

  // ── Content ─────────────────────────────────────────────────────
  {
    id: "content",
    title: "Nội dung",
    translate: "nav.content",
    type: "group",
    children: [
      {
        id: "pages",
        title: "Trang",
        translate: "nav.pages",
        type: "item",
        icon: "lucide:file",
        url: "/pages",
        auth: [Permissions.PAGES_READ],
      },
      {
        id: "posts",
        title: "Blog",
        translate: "nav.posts",
        type: "item",
        icon: "lucide:file-text",
        url: "/posts",
        auth: [Permissions.POSTS_READ],
      },
      {
        id: "categories",
        title: "Danh mục",
        translate: "nav.categories",
        type: "item",
        icon: "lucide:folder-tree",
        url: "/categories",
        auth: [Permissions.CATEGORIES_READ],
      },
      {
        id: "tags",
        title: "Thẻ",
        translate: "nav.tags",
        type: "item",
        icon: "lucide:tag",
        url: "/tags",
        auth: [Permissions.TAGS_READ],
      },
      {
        id: "media",
        title: "Thư viện ảnh",
        translate: "nav.media",
        type: "item",
        icon: "lucide:image",
        url: "/media",
        auth: [Permissions.MEDIA_READ],
      },
    ],
  },

  // ── Utilities ────────────────────────────────────────────────────
  {
    id: "utilities",
    title: "Tiện ích",
    translate: "nav.utilities",
    type: "group",
    children: [
      {
        id: "custom-fields",
        title: "Trường tùy chỉnh",
        translate: "nav.customFields",
        type: "item",
        icon: "lucide:sliders-horizontal",
        url: "/custom-fields",
        auth: [Permissions.CUSTOM_FIELDS_READ],
      },
      {
        id: "tools",
        title: "Công cụ",
        translate: "nav.tools",
        type: "collapse",
        icon: "lucide:wrench",
        children: [
          {
            id: "tools-webhooks",
            title: "Webhooks",
            translate: "nav.webhooks",
            type: "item",
            icon: "lucide:webhook",
            url: "/tools/webhooks",
            auth: [Permissions.WEBHOOKS_READ],
          },
          {
            id: "tools-data-sync",
            title: "Đồng bộ dữ liệu",
            translate: "nav.dataSync",
            type: "item",
            icon: "lucide:refresh-cw",
            url: "/tools/data-synchronize",
            auth: [Permissions.SYSTEM_MANAGE],
          },
        ],
      },
      {
        id: "settings",
        title: "Cài đặt",
        translate: "nav.settings",
        type: "item",
        icon: "lucide:settings",
        url: "/settings",
        auth: [Permissions.SETTINGS_READ],
        children: [
          {
            id: "settings-rates",
            title: "Bảng giá cước",
            translate: "nav.rates",
            type: "item",
            url: "/settings/rates",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-general",
            title: "Cài đặt chung",
            translate: "nav.general",
            type: "item",
            url: "/settings/general",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-divisions",
            title: "Địa giới hành chính",
            translate: "nav.divisions",
            type: "item",
            url: "/settings/divisions",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-us-divisions",
            title: "Bang & Thành phố Mỹ",
            translate: "nav.usDivisions",
            type: "item",
            url: "/settings/us-divisions",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-partners",
            title: "Đối tác liên kết",
            translate: "nav.partners",
            type: "item",
            url: "/settings/partners",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-phone",
            title: "Số điện thoại",
            translate: "nav.phone",
            type: "item",
            url: "/settings/phone",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-media",
            title: "Phương tiện",
            translate: "nav.media",
            type: "item",
            url: "/settings/media",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-languages",
            title: "Ngôn ngữ",
            translate: "nav.languages",
            type: "item",
            url: "/settings/languages",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-tracking",
            title: "Theo dõi vận đơn",
            translate: "nav.tracking",
            type: "item",
            url: "/settings/tracking",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-packing",
            title: "Quy cách đóng gói",
            translate: "nav.packing",
            type: "item",
            url: "/settings/packing",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-email",
            title: "Cấu hình Email",
            translate: "nav.email",
            type: "item",
            url: "/settings/email",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-push",
            title: "Thông báo Push",
            translate: "nav.push",
            type: "item",
            url: "/settings/push",
            auth: [Permissions.SETTINGS_READ],
          },
          {
            id: "settings-email-blacklist",
            title: "Danh sách đen Email",
            translate: "nav.blacklist",
            type: "item",
            url: "/settings/email/blacklist",
            auth: [Permissions.SETTINGS_READ],
          },
        ],
      },
    ],
  },

  // ── Platform Administration — Botble-style collapsible at bottom ──
  {
    id: "admin-group",
    title: "Quản trị",
    translate: "nav.adminGroup",
    type: "group",
    children: [
      {
        id: "system",
        title: "Quản trị hệ thống",
        translate: "nav.platformAdmin",
        type: "item",
        icon: "lucide:shield-check",
        url: "/system",
        end: true,
        auth: [Permissions.SYSTEM_READ],
        // Children are intentionally NOT rendered on sidebar (type:"item" ignores children in NavVerticalItemBase),
        // but flattenNavigation() recurses into them — so they remain discoverable in search and shortcuts.
        children: [
          {
            id: "system-users",
            title: "Người dùng",
            translate: "nav.users",
            type: "item",
            icon: "lucide:users",
            url: "/system/users",
            auth: [Permissions.USERS_READ],
          },
          {
            id: "system-roles",
            title: "Nhóm và phân quyền",
            translate: "nav.roles",
            type: "item",
            icon: "lucide:lock",
            url: "/system/roles",
            auth: [Permissions.ROLES_READ],
          },
          {
            id: "system-audit-logs",
            title: "Nhật ký hoạt động",
            translate: "nav.auditLogs",
            type: "item",
            icon: "lucide:clipboard-list",
            url: "/system/audit-logs",
            auth: [Permissions.AUDIT_LOGS_READ],
          },
          {
            id: "system-request-logs",
            title: "Nhật ký truy vấn",
            translate: "nav.requestLogs",
            type: "item",
            icon: "lucide:activity",
            url: "/system/request-logs",
            auth: [Permissions.AUDIT_LOGS_READ],
          },
          {
            id: "system-cache",
            title: "Quản lý bộ nhớ đệm",
            translate: "nav.systemCache",
            type: "item",
            icon: "lucide:database-backup",
            url: "/system/cache",
            auth: [Permissions.SYSTEM_MANAGE],
          },
          {
            id: "system-info",
            title: "Thông tin hệ thống",
            translate: "nav.systemInfo",
            type: "item",
            icon: "lucide:info",
            url: "/system/info",
            auth: [Permissions.SYSTEM_READ],
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
