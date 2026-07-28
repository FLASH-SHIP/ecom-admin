export declare const listGroups: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        filters?: {
            fieldKey: string;
            operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
            value: string;
            value2?: string | undefined;
        }[] | undefined;
        search?: string | undefined;
        sortBy?: "status" | "id" | "createdAt" | "title" | undefined;
        sortDir?: "asc" | "desc" | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
    };
    output: {
        rows: {
            status: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                items: number;
            };
            order: number;
            title: string;
            rules: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        }[];
        total: number;
    };
    meta: object;
}>;
export declare const getGroup: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        items: {
            type: string;
            id: number;
            parentId: number | null;
            order: number;
            slug: string;
            options: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            title: string;
            placeholder: string | null;
            instructions: string | null;
            defaultValue: string | null;
        }[];
        order: number;
        title: string;
        rules: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
    };
    meta: object;
}>;
export declare const createGroup: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        title: string;
        order?: number | undefined;
        rules?: {
            name: string;
            type: "==" | "!=";
            value: string;
        }[][] | undefined;
        status?: "pending" | "published" | "draft" | undefined;
    };
    output: {
        id: number;
        title: string;
    };
    meta: object;
}>;
export declare const updateGroup: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        title?: string | undefined;
        order?: number | undefined;
        rules?: {
            name: string;
            type: "==" | "!=";
            value: string;
        }[][] | null | undefined;
        status?: "pending" | "published" | "draft" | undefined;
    };
    output: {
        id: number;
        title: string;
    };
    meta: object;
}>;
export declare const deleteGroup: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        title: string;
        rules: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
    };
    meta: object;
}>;
export declare const duplicateGroup: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        items: {
            type: string;
            id: number;
            parentId: number | null;
            order: number;
            slug: string;
            options: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            title: string;
            placeholder: string | null;
            instructions: string | null;
            defaultValue: string | null;
        }[];
        order: number;
        title: string;
        rules: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
    } | null;
    meta: object;
}>;
export declare const getFieldsForContext: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        modelName?: string | undefined;
        categoryId?: number | undefined;
        pageTemplate?: string | undefined;
        postFormat?: string | undefined;
    };
    output: {
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            items: number;
        };
        order: number;
        title: string;
        rules: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
    }[];
    meta: object;
}>;
export declare const addItem: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        groupId: number;
        slug: string;
        title: string;
        type: "number" | "email" | "url" | "select" | "date" | "file" | "image" | "color" | "text" | "textarea" | "checkbox" | "radio" | "wysiwyg" | "repeater";
        placeholder?: string | undefined;
        instructions?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | undefined;
        defaultValue?: string | undefined;
        order?: number | undefined;
        parentId?: number | undefined;
    };
    output: {
        type: string;
        id: number;
        slug: string;
        title: string;
    };
    meta: object;
}>;
export declare const updateItem: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        slug?: string | undefined;
        title?: string | undefined;
        type?: "number" | "email" | "url" | "select" | "date" | "file" | "image" | "color" | "text" | "textarea" | "checkbox" | "radio" | "wysiwyg" | "repeater" | undefined;
        placeholder?: string | undefined;
        instructions?: string | undefined;
        options?: {
            label: string;
            value: string;
        }[] | null | undefined;
        defaultValue?: string | null | undefined;
        order?: number | undefined;
        parentId?: number | null | undefined;
    };
    output: {
        type: string;
        id: number;
        slug: string;
        title: string;
    };
    meta: object;
}>;
export declare const removeItem: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        type: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        groupId: number;
        parentId: number | null;
        order: number;
        slug: string;
        options: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        title: string;
        placeholder: string | null;
        instructions: string | null;
        defaultValue: string | null;
    };
    meta: object;
}>;
/**
 * Returns available rule definitions for the visual Rules Builder UI.
 * Resolves all registered dataProviders (DB calls for category list, etc.).
 */
export declare const getRuleGroups: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: import("@ecom/features/custom-field/CustomFieldRuleRegistry").ResolvedRuleGroup[];
    meta: object;
}>;
/**
 * Returns field groups + current values for a specific content model instance.
 * Used by CustomFieldsPanel in the Post/Page editor.
 */
export declare const getFieldBoxes: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        modelName: "posts" | "pages";
        modelId: number;
        categoryId?: number | undefined;
        pageTemplate?: string | undefined;
        postFormat?: string | undefined;
    };
    output: import("@ecom/features/custom-field/services/CustomFieldService").FieldBox[];
    meta: object;
}>;
/**
 * Bulk-save custom field values from the editor panel.
 * Limited to 200 values per call to prevent oversized transactions.
 */
export declare const saveModelFields: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        modelName: "posts" | "pages";
        modelId: number;
        values: {
            fieldItemId: number;
            value: string | null;
        }[];
    };
    output: {
        id: number;
        value: string | null;
        fieldItemId: number;
    }[];
    meta: object;
}>;
/**
 * Export field groups in Botble-compatible JSON format.
 */
export declare const exportGroups: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        ids?: number[] | undefined;
    };
    output: import("@ecom/features/custom-field/services/CustomFieldService").ExportedFieldGroup[];
    meta: object;
}>;
/**
 * Import field groups from Botble-compatible JSON.
 * Limited to 50 groups per call.
 */
export declare const importGroups: import("@trpc/server").TRPCMutationProcedure<{
    input: Record<string, unknown>[];
    output: {
        created: number;
    };
    meta: object;
}>;
//# sourceMappingURL=custom-fields.handler.d.ts.map