/**
 * Singleton registry for custom field display rules.
 *
 * Mirrors Botble's CustomFieldSupport::ruleGroups pattern:
 * - registerRule(group, title, slug, dataProvider) — add a new rule type
 * - expandRule(group, title, slug, data)           — merge data into an existing rule
 * - getRuleGroups()                                — resolve all providers → UI structure
 *
 * Consumers (blog, page) call register/expand at app bootstrap via their
 * customFieldRules.ts files so the registry is populated before any request.
 */
export type DataProvider = () => Record<string, string> | Promise<Record<string, string>>;
export interface RuleDefinition {
    title: string;
    slug: string;
    /** Resolved lazily on getRuleGroups() call */
    dataProvider: DataProvider;
}
export interface ResolvedRuleDefinition {
    title: string;
    slug: string;
    data: Record<string, string>;
}
export interface ResolvedRuleGroup {
    name: string;
    rules: ResolvedRuleDefinition[];
}
declare class CustomFieldRuleRegistryImpl {
    private readonly groups;
    /**
     * Register a new rule type within a group.
     * If the slug already exists the dataProvider is replaced.
     */
    registerRule(group: string, title: string, slug: string, dataProvider: DataProvider): this;
    /**
     * Expand (merge) additional data into an existing rule without replacing its provider.
     * If the slug doesn't exist yet, it is created with the given data as a static provider.
     * This mirrors Botble's expandRule() which merges option maps.
     */
    expandRule(group: string, title: string, slug: string, data: DataProvider): this;
    /**
     * Resolve all data providers and return the full UI-ready structure.
     * Called by the tRPC getRuleGroups procedure.
     */
    getRuleGroups(): Promise<ResolvedRuleGroup[]>;
    /** For testing — reset all registrations */
    _reset(): void;
}
export declare const CustomFieldRuleRegistry: CustomFieldRuleRegistryImpl;
export {};
//# sourceMappingURL=CustomFieldRuleRegistry.d.ts.map