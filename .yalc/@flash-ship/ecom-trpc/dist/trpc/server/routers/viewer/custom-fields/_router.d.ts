export declare const customFieldsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    listGroups: import("@trpc/server").TRPCQueryProcedure<{
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
    getGroup: import("@trpc/server").TRPCQueryProcedure<{
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
    createGroup: import("@trpc/server").TRPCMutationProcedure<{
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
    updateGroup: import("@trpc/server").TRPCMutationProcedure<{
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
    deleteGroup: import("@trpc/server").TRPCMutationProcedure<{
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
    duplicateGroup: import("@trpc/server").TRPCMutationProcedure<{
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
    getFieldsForContext: import("@trpc/server").TRPCQueryProcedure<{
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
    getRuleGroups: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: import("@ecom/features/custom-field/CustomFieldRuleRegistry").ResolvedRuleGroup[];
        meta: object;
    }>;
    getFieldBoxes: import("@trpc/server").TRPCQueryProcedure<{
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
    addItem: import("@trpc/server").TRPCMutationProcedure<{
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
    updateItem: import("@trpc/server").TRPCMutationProcedure<{
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
    removeItem: import("@trpc/server").TRPCMutationProcedure<{
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
    saveModelFields: import("@trpc/server").TRPCMutationProcedure<{
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
    exportGroups: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            ids?: number[] | undefined;
        };
        output: import("@ecom/features/custom-field/services/CustomFieldService").ExportedFieldGroup[];
        meta: object;
    }>;
    importGroups: import("@trpc/server").TRPCMutationProcedure<{
        input: Record<string, unknown>[];
        output: {
            created: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map