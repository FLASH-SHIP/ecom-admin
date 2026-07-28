/**
 * Centralized permission constants for Ecom.
 *
 * Convention: `module.resource.action`
 * Dynamic hierarchy: sections group modules; modules group permissions; parent permissions represent dependencies.
 */
export declare const Permissions: {
    readonly POSTS_READ: "blog.posts.read";
    readonly POSTS_CREATE: "blog.posts.create";
    readonly POSTS_UPDATE: "blog.posts.update";
    readonly POSTS_DELETE: "blog.posts.delete";
    readonly CATEGORIES_READ: "blog.categories.read";
    readonly CATEGORIES_CREATE: "blog.categories.create";
    readonly CATEGORIES_UPDATE: "blog.categories.update";
    readonly CATEGORIES_DELETE: "blog.categories.delete";
    readonly TAGS_READ: "blog.tags.read";
    readonly TAGS_CREATE: "blog.tags.create";
    readonly TAGS_UPDATE: "blog.tags.update";
    readonly TAGS_DELETE: "blog.tags.delete";
    readonly PAGES_READ: "pages.read";
    readonly PAGES_CREATE: "pages.create";
    readonly PAGES_UPDATE: "pages.update";
    readonly PAGES_DELETE: "pages.delete";
    readonly MEDIA_READ: "media.read";
    readonly MEDIA_UPLOAD: "media.upload";
    readonly MEDIA_UPDATE: "media.update";
    readonly MEDIA_DELETE: "media.delete";
    readonly USERS_READ: "users.read";
    readonly USERS_CREATE: "users.create";
    readonly USERS_UPDATE: "users.update";
    readonly USERS_DELETE: "users.delete";
    readonly ROLES_READ: "roles.read";
    readonly ROLES_CREATE: "roles.create";
    readonly ROLES_UPDATE: "roles.update";
    readonly ROLES_DELETE: "roles.delete";
    readonly CUSTOMERS_READ: "customers.read";
    readonly CUSTOMERS_CREATE: "customers.create";
    readonly CUSTOMERS_UPDATE: "customers.update";
    readonly CUSTOMERS_DELETE: "customers.delete";
    readonly CUSTOMER_GROUPS_READ: "customer-groups.read";
    readonly CUSTOMER_GROUPS_CREATE: "customer-groups.create";
    readonly CUSTOMER_GROUPS_UPDATE: "customer-groups.update";
    readonly CUSTOMER_GROUPS_DELETE: "customer-groups.delete";
    readonly CUSTOM_FIELDS_READ: "custom-fields.read";
    readonly CUSTOM_FIELDS_CREATE: "custom-fields.create";
    readonly CUSTOM_FIELDS_UPDATE: "custom-fields.update";
    readonly CUSTOM_FIELDS_DELETE: "custom-fields.delete";
    readonly SETTINGS_READ: "settings.read";
    readonly SETTINGS_UPDATE: "settings.update";
    readonly RATES_READ: "rates.read";
    readonly RATES_CREATE: "rates.create";
    readonly RATES_UPDATE: "rates.update";
    readonly RATES_APPROVE: "rates.approve";
    readonly RATES_DELETE: "rates.delete";
    readonly AUDIT_LOGS_READ: "audit-logs.read";
    readonly AUDIT_LOGS_PURGE: "audit-logs.purge";
    readonly SYSTEM_READ: "system.read";
    readonly SYSTEM_MANAGE: "system.manage";
    readonly TOOLS_EXPORT: "tools.export";
    readonly TOOLS_IMPORT: "tools.import";
    readonly WEBHOOKS_READ: "webhooks.read";
    readonly WEBHOOKS_CREATE: "webhooks.create";
    readonly WEBHOOKS_UPDATE: "webhooks.update";
    readonly WEBHOOKS_DELETE: "webhooks.delete";
    readonly COMMENTS_READ: "comments.read";
    readonly COMMENTS_MODERATE: "comments.moderate";
    readonly COMMENTS_DELETE: "comments.delete";
    readonly CONTACTS_READ: "contacts.read";
    readonly CONTACTS_MANAGE: "contacts.manage";
    readonly CONTACTS_DELETE: "contacts.delete";
    readonly PARTNERS_READ: "settings.partners.read";
    readonly PARTNERS_CREATE: "settings.partners.create";
    readonly PARTNERS_UPDATE: "settings.partners.update";
    readonly PARTNERS_DELETE: "settings.partners.delete";
    readonly NOTIFICATIONS_BROADCAST_READ: "notifications.broadcast.read";
    readonly NOTIFICATIONS_BROADCAST_CREATE: "notifications.broadcast.create";
    readonly NOTIFICATIONS_BROADCAST_DELETE: "notifications.broadcast.delete";
    readonly NOTIFICATIONS_SETTINGS_READ: "notifications.settings.read";
    readonly NOTIFICATIONS_SETTINGS_UPDATE: "notifications.settings.update";
};
export type PermissionName = (typeof Permissions)[keyof typeof Permissions];
export interface SystemPermission {
    name: string;
    displayName: string;
    group: string;
    section: string;
    module: string;
    parent?: string;
}
/**
 * All permission entries mapped with structural hierarchy.
 */
export declare const ALL_PERMISSIONS: SystemPermission[];
//# sourceMappingURL=permissions.d.ts.map