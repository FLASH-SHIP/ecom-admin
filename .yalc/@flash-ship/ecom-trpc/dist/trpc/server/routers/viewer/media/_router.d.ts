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
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    children: number;
                    files: number;
                };
                parentId: number | null;
                slug: string;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    children: number;
                    files: number;
                };
                parentId: number | null;
                children: {
                    id: number;
                    name: string;
                    slug: string;
                }[];
                slug: string;
            };
            meta: object;
        }>;
        tree: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: number;
                name: string;
                _count: {
                    files: number;
                };
                children: {
                    id: number;
                    name: string;
                    children: {
                        id: number;
                        name: string;
                        slug: string;
                    }[];
                    slug: string;
                }[];
                slug: string;
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
                id: number;
                createdAt: Date;
                name: string;
                parentId: number | null;
                slug: string;
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
                id: number;
                name: string;
                updatedAt: Date;
                parentId: number | null;
                slug: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                force?: boolean | undefined;
            };
            output: {
                id: number;
                createdAt: Date;
                name: string;
                deletedAt: Date | null;
                updatedAt: Date;
                parentId: number | null;
                slug: string;
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
                sortBy?: "createdAt" | "name" | "size" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                data: {
                    url: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    fileName: string;
                    width: number | null;
                    size: number;
                    height: number | null;
                    folderId: number | null;
                    mimeType: string;
                    disk: string;
                    alt: string | null;
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
                url: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                fileName: string;
                width: number | null;
                size: number;
                height: number | null;
                folderId: number | null;
                mimeType: string;
                disk: string;
                alt: string | null;
                uploadedBy: string | null;
                folder: {
                    id: number;
                    name: string;
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
                url: string;
                description: string | null;
                id: number;
                name: string;
                updatedAt: Date;
                fileName: string;
                width: number | null;
                size: number;
                height: number | null;
                folderId: number | null;
                mimeType: string;
                alt: string | null;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                url: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                deletedAt: Date | null;
                updatedAt: Date;
                fileName: string;
                width: number | null;
                size: number;
                height: number | null;
                folderId: number | null;
                mimeType: string;
                disk: string;
                alt: string | null;
                uploadedBy: string | null;
                visibility: string;
                accessMode: string | null;
                isFavorite: boolean;
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