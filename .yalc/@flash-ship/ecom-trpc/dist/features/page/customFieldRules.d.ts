import type { PrismaClient } from "@ecom/prisma";
/**
 * Register custom field display rules for Page content.
 *
 * Called once at app bootstrap to populate the singleton CustomFieldRuleRegistry.
 * Mirrors Botble's registerPagesFields() in CustomFieldServiceProvider.php.
 */
export declare function registerPageCustomFieldRules(prisma: PrismaClient): void;
//# sourceMappingURL=customFieldRules.d.ts.map