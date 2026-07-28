export declare const mediaRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    folders: import("@trpc/server").TRPCBuiltRouter<{
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
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                parentId?: number | null | undefined;
                search?: string | undefined;
            } | undefined;
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                _count: {
                    children: number;
                    files: number;
                };
                parentId: number | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                _count: {
                    children: number;
                    files: number;
                };
                parentId: number | null;
                children: {
                    name: string;
                    id: number;
                    slug: string;
                }[];
            };
            meta: object;
        }>;
        tree: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                name: string;
                id: number;
                slug: string;
                _count: {
                    files: number;
                };
                children: {
                    name: string;
                    id: number;
                    slug: string;
                    children: {
                        name: string;
                        id: number;
                        slug: string;
                    }[];
                }[];
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                slug?: string | undefined;
                parentId?: number | null | undefined;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                slug: string;
                parentId: number | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                slug?: string | undefined;
                parentId?: number | null | undefined;
            };
            output: {
                name: string;
                id: number;
                updatedAt: Date;
                slug: string;
                parentId: number | null;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                force?: boolean | undefined;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                slug: string;
                parentId: number | null;
                color: string | null;
                isFavorite: boolean;
            };
            meta: object;
        }>;
    }>>;
    files: import("@trpc/server").TRPCBuiltRouter<{
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
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                folderId?: number | null | undefined;
                mimeType?: string | undefined;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "name" | "createdAt" | "size" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                data: {
                    name: string;
                    id: number;
                    createdAt: Date;
                    url: string;
                    fileName: string;
                    width: number | null;
                    height: number | null;
                    mimeType: string;
                    size: number;
                    disk: string;
                    alt: string | null;
                    folderId: number | null;
                    uploadedBy: string | null;
                }[];
                meta: {
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                url: string;
                description: string | null;
                fileName: string;
                width: number | null;
                height: number | null;
                mimeType: string;
                size: number;
                disk: string;
                alt: string | null;
                folderId: number | null;
                uploadedBy: string | null;
                folder: {
                    name: string;
                    id: number;
                    slug: string;
                } | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                alt?: string | undefined;
                description?: string | undefined;
                folderId?: number | null | undefined;
            };
            output: {
                name: string;
                id: number;
                updatedAt: Date;
                url: string;
                description: string | null;
                fileName: string;
                width: number | null;
                height: number | null;
                mimeType: string;
                size: number;
                alt: string | null;
                folderId: number | null;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                url: string;
                description: string | null;
                fileName: string;
                width: number | null;
                height: number | null;
                isFavorite: boolean;
                mimeType: string;
                size: number;
                disk: string;
                alt: string | null;
                folderId: number | null;
                uploadedBy: string | null;
                visibility: string;
                accessMode: string | null;
            };
            meta: object;
        }>;
        move: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
                folderId: number | null;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        removeMany: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                totalFiles: number;
                totalSize: number;
            };
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=_router.d.ts.map