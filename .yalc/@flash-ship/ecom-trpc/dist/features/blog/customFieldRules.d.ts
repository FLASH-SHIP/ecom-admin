import type { PrismaClient } from "@ecom/prisma";
/**
 * Register custom field display rules for Blog content (Posts + Categories).
 *
 * Called once at app bootstrap (DI container init) to populate the singleton
 * CustomFieldRuleRegistry with blog-specific rule types — mirrors Botble's
 * registerBlogFields() in CustomFieldServiceProvider.php.
 */
export declare function registerBlogCustomFieldRules(prisma: PrismaClient): void;
//# sourceMappingURL=customFieldRules.d.ts.map