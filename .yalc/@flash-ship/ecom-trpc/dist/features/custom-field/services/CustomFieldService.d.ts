import type { CustomFieldValueRepository } from "@ecom/features/custom-field/repositories/CustomFieldValueRepository";
import type { FieldGroupRepository, FindGroupsOpts } from "@ecom/features/custom-field/repositories/FieldGroupRepository";
import type { FieldItemRepository } from "@ecom/features/custom-field/repositories/FieldItemRepository";
import type { PrismaClient } from "@ecom/prisma";
import { Prisma } from "@ecom/prisma";
/** A single condition within a rule group */
export interface RuleCondition {
    name: string;
    type: "==" | "!=";
    value: string;
}
/** One rule group: conditions are ANDed together */
export type RuleGroup = RuleCondition[];
/**
 * Stored in FieldGroup.rules as JSON.
 * Groups are ORed together — a content item matches if ANY group passes.
 * Empty array → group always shows (no restriction).
 */
export type FieldGroupRules = RuleGroup[];
/** Context passed when evaluating rules for a specific content item */
export interface RuleContext {
    modelName?: string;
    categoryId?: number;
    pageTemplate?: string;
    postFormat?: string;
    userRoles?: string[];
}
export interface FieldBoxValue {
    fieldItemId: number;
    value: string | null;
}
export interface FieldBox {
    groupId: number;
    groupTitle: string;
    items: Array<{
        id: number;
        slug: string;
        title: string;
        type: string;
        placeholder: string | null;
        instructions: string | null;
        options: unknown;
        defaultValue: string | null;
        order: number;
        parentId: number | null;
        value: string | null;
    }>;
}
/** Botble-compatible export shape for a single field group */
export interface ExportedFieldGroup {
    id: number;
    title: string;
    order: number;
    status: {
        value: string;
    };
    rules: string;
    items: ExportedFieldItem[];
}
export interface ExportedFieldItem {
    id: number;
    title: string;
    slug: string;
    type: string;
    order: number;
    instructions: string | null;
    options: unknown;
    defaultValue: string | null;
    children: ExportedFieldItem[];
}
export interface ICustomFieldServiceDeps {
    prisma: PrismaClient;
    groupRepo: FieldGroupRepository;
    itemRepo: FieldItemRepository;
    valueRepo: CustomFieldValueRepository;
}
export declare class CustomFieldService {
    private deps;
    constructor(deps: ICustomFieldServiceDeps);
    listGroups(opts?: FindGroupsOpts): Promise<{
        rows: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            _count: {
                items: number;
            };
            title: string;
            order: number;
            rules: Prisma.JsonValue;
        }[];
        total: number;
    }>;
    getGroup(id: number): Promise<{
        items: {
            type: string;
            id: number;
            title: string;
            slug: string;
            order: number;
            parentId: number | null;
            options: Prisma.JsonValue;
            placeholder: string | null;
            instructions: string | null;
            defaultValue: string | null;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        order: number;
        rules: Prisma.JsonValue;
    }>;
    createGroup(data: {
        title: string;
        order?: number;
        rules?: unknown;
        status?: string;
    }): Promise<{
        id: number;
        title: string;
    }>;
    updateGroup(id: number, data: {
        title?: string;
        order?: number;
        rules?: unknown;
        status?: string;
    }): Promise<{
        id: number;
        title: string;
    }>;
    deleteGroup(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        order: number;
        rules: Prisma.JsonValue | null;
    }>;
    addItem(data: {
        groupId: number;
        slug: string;
        title: string;
        type: string;
        placeholder?: string;
        instructions?: string;
        options?: unknown;
        defaultValue?: string;
        order?: number;
        parentId?: number;
    }): Promise<{
        type: string;
        id: number;
        title: string;
        slug: string;
    }>;
    updateItem(id: number, data: {
        slug?: string;
        title?: string;
        type?: string;
        placeholder?: string;
        instructions?: string;
        options?: unknown;
        defaultValue?: string;
        order?: number;
        parentId?: number | null;
    }): Promise<{
        type: string;
        id: number;
        title: string;
        slug: string;
    }>;
    removeItem(id: number): Promise<{
        type: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        order: number;
        parentId: number | null;
        options: Prisma.JsonValue | null;
        groupId: number;
        placeholder: string | null;
        instructions: string | null;
        defaultValue: string | null;
    }>;
    /**
     * Get field groups filtered by context rules.
     * Only published groups are returned — drafts are never shown in the editor.
     * Empty rules array → group always shows.
     */
    getFieldsForContext(context: RuleContext): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        _count: {
            items: number;
        };
        title: string;
        order: number;
        rules: Prisma.JsonValue;
    }[]>;
    /**
     * Get field groups + their current values for a specific content item.
     * Used by the editor CustomFieldsPanel component.
     * Uses batch loading to avoid N+1 queries.
     */
    getFieldBoxes(modelName: string, modelId: number, context?: Omit<RuleContext, "modelName">): Promise<FieldBox[]>;
    /**
     * Bulk save all custom field values for a model (called from editor).
     * Wrapped in a transaction — either all values save or none do.
     */
    saveModelFields(modelName: string, modelId: number, values: {
        fieldItemId: number;
        value: string | null;
    }[]): Promise<{
        value: string | null;
        id: number;
        fieldItemId: number;
    }[]>;
    /**
     * Remove all custom field values associated with a model instance.
     * Call this when a Post/Page is deleted to prevent orphan data.
     */
    deleteModelFields(modelName: string, modelId: number): Promise<Prisma.BatchPayload>;
    getRuleGroups(): Promise<import("@ecom/features/custom-field/CustomFieldRuleRegistry").ResolvedRuleGroup[]>;
    /**
     * Deep clone a field group and all its items.
     * Maintains parent-child relationships via a remapping pass.
     */
    duplicateGroup(id: number): Promise<{
        items: {
            type: string;
            id: number;
            title: string;
            slug: string;
            order: number;
            parentId: number | null;
            options: Prisma.JsonValue;
            placeholder: string | null;
            instructions: string | null;
            defaultValue: string | null;
        }[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        order: number;
        rules: Prisma.JsonValue;
    } | null>;
    /**
     * Export field groups in Botble-compatible JSON format.
     * Uses batch loading to avoid N+1 queries.
     * @param ids - If omitted, exports all groups.
     */
    exportGroups(ids?: number[]): Promise<ExportedFieldGroup[]>;
    /**
     * Import field groups from Botble-compatible JSON.
     * Validates each group's structure before any DB writes (fail-fast).
     * Groups are created sequentially so each group's ID is available for child items.
     * Throws on any validation or DB error.
     */
    importGroups(data: unknown[]): Promise<{
        created: number;
    }>;
    private mapModelNameRuleValue;
    /**
     * Botble-compatible rule evaluation.
     * Groups are ORed — returns true if ANY group fully matches.
     * Conditions within a group are ANDed.
     */
    private checkRules;
    private checkRuleGroup;
    private evaluateCondition;
    private resolveContextValue;
    private serializeItem;
    private importItems;
}
//# sourceMappingURL=CustomFieldService.d.ts.map