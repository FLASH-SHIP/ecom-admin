/**
 * Root tRPC app router — split into 3 namespaces:
 *
 * - `viewer`: Admin-only routes (requires User session via NextAuth)
 * - `public`: Public routes (no auth, customer-facing read-only)
 * - `customer`: Customer routes (requires Customer session)
 */
export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../init").ZodErrorDetail[];
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
    viewer: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        auth: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            me: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    id: string;
                    email: string;
                    name: string | null;
                    phone: string | null;
                    username: string | null;
                    locale: string | null;
                    avatarUrl: string | null;
                    emailVerified: Date | null;
                    createdAt: Date;
                    roles: {
                        id: number;
                        name: string;
                        displayName: string | null;
                    }[];
                    permissions: string[];
                };
                meta: object;
            }>;
            getUserProfile: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    userId: string;
                };
                output: {
                    id: string;
                    email: string;
                    name: string | null;
                    phone: string | null;
                    username: string | null;
                    locale: string | null;
                    avatarUrl: string | null;
                    emailVerified: Date | null;
                    createdAt: Date;
                    roles: {
                        id: number;
                        name: string;
                        displayName: string | null;
                    }[];
                    permissions: string[];
                };
                meta: object;
            }>;
            updateProfile: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId?: string | undefined;
                    name?: string | undefined;
                    username?: string | undefined;
                    phone?: string | null | undefined;
                    avatarUrl?: string | null | undefined;
                    locale?: "vi" | "en" | undefined;
                };
                output: {
                    email: string;
                    locale: string | null;
                    id: string;
                    name: string | null;
                    username: string | null;
                    phone: string | null;
                    avatarUrl: string | null;
                };
                meta: object;
            }>;
            changePasswordSelf: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId: string;
                    newPassword: string;
                    confirmPassword: string;
                    currentPassword?: string | undefined;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            getPreferences: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    userId?: string | undefined;
                };
                output: {
                    theme: "light" | "dark";
                };
                meta: object;
            }>;
            updatePreferences: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId?: string | undefined;
                    theme?: "light" | "dark" | undefined;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
        }>>;
        posts: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                    authorId?: string | undefined;
                    categoryId?: number | undefined;
                    isFeatured?: boolean | undefined;
                    search?: string | undefined;
                    includeDeleted?: boolean | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "title" | "publishedAt" | "views" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    excerpt: string | null;
                    featuredImage: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                }>;
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    title: string;
                    slug?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    bannerImage?: string | undefined;
                    isFeatured?: boolean | undefined;
                    allowComments?: boolean | undefined;
                    formatType?: string | undefined;
                    externalSource?: string | undefined;
                    sponsoredBy?: string | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                    scheduledAt?: string | null | undefined;
                    expiresAt?: string | null | undefined;
                    categoryIds?: number[] | undefined;
                    tagIds?: number[] | undefined;
                    authorId?: string | undefined;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    title?: string | undefined;
                    slug?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | null | undefined;
                    bannerImage?: string | null | undefined;
                    isFeatured?: boolean | undefined;
                    allowComments?: boolean | undefined;
                    formatType?: string | null | undefined;
                    externalSource?: string | null | undefined;
                    sponsoredBy?: string | null | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                    scheduledAt?: string | null | undefined;
                    expiresAt?: string | null | undefined;
                    categoryIds?: number[] | undefined;
                    tagIds?: number[] | undefined;
                    authorId?: string | undefined;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            publish: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            archive: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            clone: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            restore: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
                meta: object;
            }>;
            permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            bulkDelete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: {
                    success: number;
                    failed: number;
                };
                meta: object;
            }>;
            bulkPublish: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: {
                    success: number;
                    failed: number;
                };
                meta: object;
            }>;
            bulkArchive: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: {
                    success: number;
                    failed: number;
                };
                meta: object;
            }>;
            bulkRestore: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: {
                    success: number;
                    failed: number;
                };
                meta: object;
            }>;
        }>>;
        pages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    search?: string | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                    parentId?: number | null | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "order" | "title" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: {
                    data: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        _count: {
                            children: number;
                        };
                        parentId: number | null;
                        order: number;
                        slug: string;
                        title: string;
                        publishedAt: Date | null;
                        authorId: string;
                        author: {
                            id: string;
                            name: string | null;
                        };
                        template: string | null;
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
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    updatedAt: Date;
                    parentId: number | null;
                    order: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    bannerImage: string | null;
                    authorId: string;
                    author: {
                        email: string;
                        id: string;
                        name: string | null;
                    };
                    template: string | null;
                    heroBanner: string | null;
                    layout: string | null;
                    hideTitle: boolean;
                    hideBreadcrumb: boolean;
                    hideSidebar: boolean;
                    hideFooter: boolean;
                    gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    subtitle: string | null;
                    ctaText: string | null;
                    ctaLink: string | null;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    title: string;
                    slug: string;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    template?: string | undefined;
                    order?: number | undefined;
                    parentId?: number | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                    scheduledAt?: string | null | undefined;
                    bannerImage?: string | undefined;
                    heroBanner?: string | undefined;
                    layout?: string | undefined;
                    hideTitle?: boolean | undefined;
                    hideBreadcrumb?: boolean | undefined;
                    hideSidebar?: boolean | undefined;
                    hideFooter?: boolean | undefined;
                    gallery?: string[] | undefined;
                    subtitle?: string | undefined;
                    ctaText?: string | undefined;
                    ctaLink?: string | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    slug: string;
                    title: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    title?: string | undefined;
                    slug?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    template?: string | undefined;
                    order?: number | undefined;
                    parentId?: number | null | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                    scheduledAt?: string | null | undefined;
                    bannerImage?: string | undefined;
                    heroBanner?: string | undefined;
                    layout?: string | undefined;
                    hideTitle?: boolean | undefined;
                    hideBreadcrumb?: boolean | undefined;
                    hideSidebar?: boolean | undefined;
                    hideFooter?: boolean | undefined;
                    gallery?: string[] | undefined;
                    subtitle?: string | undefined;
                    ctaText?: string | undefined;
                    ctaLink?: string | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    slug: string;
                    title: string;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    updatedAt: Date;
                    parentId: number | null;
                    order: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    bannerImage: string | null;
                    authorId: string;
                    scheduledAt: Date | null;
                    template: string | null;
                    heroBanner: string | null;
                    layout: string | null;
                    hideTitle: boolean;
                    hideBreadcrumb: boolean;
                    hideSidebar: boolean;
                    hideFooter: boolean;
                    gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    subtitle: string | null;
                    ctaText: string | null;
                    ctaLink: string | null;
                };
                meta: object;
            }>;
            revisions: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    pageId: number;
                };
                output: {
                    id: number;
                    createdAt: Date;
                    title: string;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    note: string | null;
                }[];
                meta: object;
            }>;
            revision: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                    createdAt: Date;
                    referenceId: number;
                    referenceType: string;
                    title: string;
                    content: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    note: string | null;
                };
                meta: object;
            }>;
        }>>;
        categories: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "name" | "order" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                } | undefined;
                output: {
                    items: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            tree: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    children: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        children: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            name: string;
                            order: number;
                            slug: string;
                            icon: string | null;
                        }[];
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    slug?: string | undefined;
                    description?: string | undefined;
                    icon?: string | undefined;
                    isFeatured?: number | undefined;
                    isDefault?: number | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                    parentId?: number | undefined;
                    order?: number | undefined;
                };
                output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    slug?: string | undefined;
                    description?: string | null | undefined;
                    icon?: string | null | undefined;
                    isFeatured?: number | undefined;
                    isDefault?: number | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                    parentId?: number | null | undefined;
                    order?: number | undefined;
                };
                output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
                meta: object;
            }>;
            restore: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
                meta: object;
            }>;
        }>>;
        tags: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "name" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                } | undefined;
                output: {
                    rows: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        name: string;
                        _count: {
                            posts: number;
                        };
                        slug: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        posts: number;
                    };
                    slug: string;
                    authorId: string | null;
                    translations: {
                        description: string | null;
                        id: number;
                        name: string;
                        langCode: string;
                    }[];
                    authorType: string;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    slug?: string | undefined;
                    description?: string | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    slug: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    slug?: string | undefined;
                    description?: string | undefined;
                    status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        posts: number;
                    };
                    slug: string;
                    authorId: string | null;
                    translations: {
                        description: string | null;
                        id: number;
                        name: string;
                        langCode: string;
                    }[];
                    authorType: string;
                } | null;
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    slug: string;
                };
                meta: object;
            }>;
            restore: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    slug: string;
                };
                meta: object;
            }>;
            permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
        }>>;
        media: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
        roles: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        permissions: number;
                        users: number;
                    };
                    displayName: string | null;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: unknown;
                };
                output: {
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        users: number;
                    };
                    displayName: string | null;
                    permissions: {
                        permission: {
                            id: number;
                            name: string;
                            group: string | null;
                            displayName: string | null;
                        };
                    }[];
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    displayName?: string | undefined;
                    description?: string | undefined;
                };
                output: {
                    description: string | null;
                    id: number;
                    name: string;
                    displayName: string | null;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: unknown;
                    displayName?: string | undefined;
                    description?: string | undefined;
                };
                output: {
                    description: string | null;
                    id: number;
                    name: string;
                    displayName: string | null;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: unknown;
                };
                output: {
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    displayName: string | null;
                };
                meta: object;
            }>;
            syncPermissions: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    roleId: unknown;
                    permissionIds: unknown[];
                };
                output: {
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        users: number;
                    };
                    displayName: string | null;
                    permissions: {
                        permission: {
                            id: number;
                            name: string;
                            group: string | null;
                            displayName: string | null;
                        };
                    }[];
                } | null;
                meta: object;
            }>;
            permissions: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    [k: string]: {
                        id: number;
                        name: string;
                        group: string | null;
                        displayName: string | null;
                    }[];
                };
                meta: object;
            }>;
        }>>;
        users: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    search?: string | undefined;
                    status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: {
                    data: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto[];
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
                    id: string;
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                    password: string;
                    name?: string | undefined;
                    username?: string | undefined;
                    phone?: string | null | undefined;
                    locale?: string | undefined;
                    roleIds?: unknown[] | undefined;
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                    name?: string | undefined;
                    username?: string | undefined;
                    phone?: string | null | undefined;
                    avatarUrl?: string | undefined;
                    locale?: string | undefined;
                    status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
            changePassword: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId: string;
                    newPassword: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            syncRoles: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId: string;
                    roleIds: unknown[];
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
            toggleSuperAdmin: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    userId: string;
                    isSuperAdmin: boolean;
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                };
                output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
                meta: object;
            }>;
        }>>;
        customFields: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
        settings: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            getAll: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: Record<string, string | null>;
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    key: string;
                };
                output: string | null;
                meta: object;
            }>;
            getMany: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    keys: string[];
                };
                output: Record<string, string | null>;
                meta: object;
            }>;
            set: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    key: string;
                    value: string | null;
                };
                output: {
                    key: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    value: string | null;
                };
                meta: object;
            }>;
            bulkSet: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    items: {
                        key: string;
                        value: string | null;
                    }[];
                };
                output: {
                    key: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    value: string | null;
                }[];
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    key: string;
                };
                output: {
                    key: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    value: string | null;
                };
                meta: object;
            }>;
        }>>;
        languages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    code: string;
                    locale: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                    isRtl: boolean;
                }[];
                meta: object;
            }>;
            getActive: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
                meta: object;
            }>;
            getById: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    locale: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                    isRtl: boolean;
                };
                meta: object;
            }>;
            getDefault: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    locale: string;
                    code: string;
                    flag?: string | undefined;
                    isRtl?: boolean | undefined;
                    order?: number | undefined;
                };
                output: {
                    code: string;
                    locale: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                    isRtl: boolean;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    locale?: string | undefined;
                    code?: string | undefined;
                    flag?: string | undefined;
                    isRtl?: boolean | undefined;
                    order?: number | undefined;
                    isActive?: boolean | undefined;
                };
                output: {
                    code: string;
                    locale: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                    isRtl: boolean;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            setDefault: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    locale: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                    isRtl: boolean;
                };
                meta: object;
            }>;
            getRelatedItems: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    referenceId: number;
                    referenceType: string;
                };
                output: {
                    id: number;
                    referenceId: number;
                    referenceType: string;
                    language: {
                        code: string;
                        locale: string;
                        id: number;
                        name: string;
                        flag: string | null;
                    };
                    origin: string;
                    langCode: string;
                }[];
                meta: object;
            }>;
            saveContentLanguage: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    referenceId: number;
                    referenceType: string;
                    langCode: string;
                    refFrom?: number | undefined;
                };
                output: {
                    id: number;
                    referenceId: number;
                    referenceType: string;
                    origin: string;
                    langCode: string;
                };
                meta: object;
            }>;
            worldLanguages: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: readonly [{
                    readonly name: "Afrikaans";
                    readonly locale: "af";
                    readonly code: "af";
                    readonly flag: "za";
                }, {
                    readonly name: "አማርኛ";
                    readonly locale: "am";
                    readonly code: "am";
                    readonly flag: "et";
                }, {
                    readonly name: "العربية";
                    readonly locale: "ar";
                    readonly code: "ar";
                    readonly flag: "sa";
                    readonly isRtl: true;
                }, {
                    readonly name: "العربية المغربية";
                    readonly locale: "ary";
                    readonly code: "ary";
                    readonly flag: "ma";
                    readonly isRtl: true;
                }, {
                    readonly name: "Azərbaycan";
                    readonly locale: "az";
                    readonly code: "az";
                    readonly flag: "az";
                }, {
                    readonly name: "گؤنئی آذربایجان";
                    readonly locale: "azb";
                    readonly code: "azb";
                    readonly flag: "az";
                    readonly isRtl: true;
                }, {
                    readonly name: "Беларуская мова";
                    readonly locale: "bel";
                    readonly code: "bel";
                    readonly flag: "by";
                }, {
                    readonly name: "български";
                    readonly locale: "bg_BG";
                    readonly code: "bg_BG";
                    readonly flag: "bg";
                }, {
                    readonly name: "বাংলা";
                    readonly locale: "bn_BD";
                    readonly code: "bn_BD";
                    readonly flag: "bd";
                }, {
                    readonly name: "བོད་སྐད";
                    readonly locale: "bo";
                    readonly code: "bo";
                    readonly flag: "cn";
                }, {
                    readonly name: "Bosanski";
                    readonly locale: "bs_BA";
                    readonly code: "bs_BA";
                    readonly flag: "ba";
                }, {
                    readonly name: "Catalan";
                    readonly locale: "ca";
                    readonly code: "ca_ES";
                    readonly flag: "es";
                }, {
                    readonly name: "Cebuano";
                    readonly locale: "ceb";
                    readonly code: "ceb";
                    readonly flag: "ph";
                }, {
                    readonly name: "Čeština";
                    readonly locale: "cs_CZ";
                    readonly code: "cs_CZ";
                    readonly flag: "cz";
                }, {
                    readonly name: "Cymraeg";
                    readonly locale: "cy";
                    readonly code: "cy";
                    readonly flag: "gb";
                }, {
                    readonly name: "Dansk";
                    readonly locale: "da_DK";
                    readonly code: "da_DK";
                    readonly flag: "dk";
                }, {
                    readonly name: "Deutsch (Schweiz)";
                    readonly locale: "de_CH";
                    readonly code: "de_CH";
                    readonly flag: "ch";
                }, {
                    readonly name: "Deutsch (Schweiz, Informell)";
                    readonly locale: "de_CH_informal";
                    readonly code: "de_CH_informal";
                    readonly flag: "ch";
                }, {
                    readonly name: "Deutsch";
                    readonly locale: "de_DE";
                    readonly code: "de_DE";
                    readonly flag: "de";
                }, {
                    readonly name: "Deutsch (Formal)";
                    readonly locale: "de_DE_formal";
                    readonly code: "de_DE_formal";
                    readonly flag: "de";
                }, {
                    readonly name: "Ελληνικά";
                    readonly locale: "el";
                    readonly code: "el";
                    readonly flag: "gr";
                }, {
                    readonly name: "English";
                    readonly locale: "en";
                    readonly code: "en";
                    readonly flag: "us";
                }, {
                    readonly name: "English (US)";
                    readonly locale: "en_US";
                    readonly code: "en_US";
                    readonly flag: "us";
                }, {
                    readonly name: "English (Australia)";
                    readonly locale: "en_AU";
                    readonly code: "en_AU";
                    readonly flag: "au";
                }, {
                    readonly name: "English (Canada)";
                    readonly locale: "en_CA";
                    readonly code: "en_CA";
                    readonly flag: "ca";
                }, {
                    readonly name: "English (UK)";
                    readonly locale: "en_GB";
                    readonly code: "en_GB";
                    readonly flag: "gb";
                }, {
                    readonly name: "English (New Zealand)";
                    readonly locale: "en_NZ";
                    readonly code: "en_NZ";
                    readonly flag: "nz";
                }, {
                    readonly name: "English (South Africa)";
                    readonly locale: "en_ZA";
                    readonly code: "en_ZA";
                    readonly flag: "za";
                }, {
                    readonly name: "Español (Argentina)";
                    readonly locale: "es_AR";
                    readonly code: "es_AR";
                    readonly flag: "ar";
                }, {
                    readonly name: "Español (Chile)";
                    readonly locale: "es_CL";
                    readonly code: "es_CL";
                    readonly flag: "cl";
                }, {
                    readonly name: "Español (Colombia)";
                    readonly locale: "es_CO";
                    readonly code: "es_CO";
                    readonly flag: "co";
                }, {
                    readonly name: "Español";
                    readonly locale: "es_ES";
                    readonly code: "es_ES";
                    readonly flag: "es";
                }, {
                    readonly name: "Español (Guatemala)";
                    readonly locale: "es_GT";
                    readonly code: "es_GT";
                    readonly flag: "gt";
                }, {
                    readonly name: "Español (México)";
                    readonly locale: "es_MX";
                    readonly code: "es_MX";
                    readonly flag: "mx";
                }, {
                    readonly name: "Español (Perú)";
                    readonly locale: "es_PE";
                    readonly code: "es_PE";
                    readonly flag: "pe";
                }, {
                    readonly name: "Español (Venezuela)";
                    readonly locale: "es_VE";
                    readonly code: "es_VE";
                    readonly flag: "ve";
                }, {
                    readonly name: "Eesti";
                    readonly locale: "et";
                    readonly code: "et";
                    readonly flag: "ee";
                }, {
                    readonly name: "Euskara";
                    readonly locale: "eu";
                    readonly code: "eu";
                    readonly flag: "es";
                }, {
                    readonly name: "فارسی (افغانستان)";
                    readonly locale: "fa_AF";
                    readonly code: "fa_AF";
                    readonly flag: "af";
                    readonly isRtl: true;
                }, {
                    readonly name: "فارسی";
                    readonly locale: "fa_IR";
                    readonly code: "fa_IR";
                    readonly flag: "ir";
                    readonly isRtl: true;
                }, {
                    readonly name: "Suomi";
                    readonly locale: "fi";
                    readonly code: "fi";
                    readonly flag: "fi";
                }, {
                    readonly name: "Føroyskt";
                    readonly locale: "fo";
                    readonly code: "fo";
                    readonly flag: "fo";
                }, {
                    readonly name: "Français";
                    readonly locale: "fr";
                    readonly code: "fr";
                    readonly flag: "fr";
                }, {
                    readonly name: "Français (Belgique)";
                    readonly locale: "fr_BE";
                    readonly code: "fr_BE";
                    readonly flag: "be";
                }, {
                    readonly name: "Français (France)";
                    readonly locale: "fr_FR";
                    readonly code: "fr_FR";
                    readonly flag: "fr";
                }, {
                    readonly name: "Frysk";
                    readonly locale: "fy";
                    readonly code: "fy";
                    readonly flag: "nl";
                }, {
                    readonly name: "Gàidhlig";
                    readonly locale: "gd";
                    readonly code: "gd";
                    readonly flag: "gb";
                }, {
                    readonly name: "Galego";
                    readonly locale: "gl_ES";
                    readonly code: "gl_ES";
                    readonly flag: "es";
                }, {
                    readonly name: "ગુજરાતી";
                    readonly locale: "gu";
                    readonly code: "gu";
                    readonly flag: "in";
                }, {
                    readonly name: "هزاره گی";
                    readonly locale: "haz";
                    readonly code: "haz";
                    readonly flag: "af";
                    readonly isRtl: true;
                }, {
                    readonly name: "עברית";
                    readonly locale: "he_IL";
                    readonly code: "he_IL";
                    readonly flag: "il";
                    readonly isRtl: true;
                }, {
                    readonly name: "हिन्दी";
                    readonly locale: "hi_IN";
                    readonly code: "hi_IN";
                    readonly flag: "in";
                }, {
                    readonly name: "Hrvatski";
                    readonly locale: "hr";
                    readonly code: "hr";
                    readonly flag: "hr";
                }, {
                    readonly name: "Kreyòl Ayisyen";
                    readonly locale: "ht";
                    readonly code: "ht";
                    readonly flag: "ht";
                }, {
                    readonly name: "Magyar";
                    readonly locale: "hu_HU";
                    readonly code: "hu_HU";
                    readonly flag: "hu";
                }, {
                    readonly name: "Հայերեն";
                    readonly locale: "hy";
                    readonly code: "hy";
                    readonly flag: "am";
                }, {
                    readonly name: "Bahasa Indonesia";
                    readonly locale: "id";
                    readonly code: "id";
                    readonly flag: "id";
                }, {
                    readonly name: "Bahasa Indonesia";
                    readonly locale: "id_ID";
                    readonly code: "id_ID";
                    readonly flag: "id";
                }, {
                    readonly name: "Íslenska";
                    readonly locale: "is_IS";
                    readonly code: "is_IS";
                    readonly flag: "is";
                }, {
                    readonly name: "Italiano";
                    readonly locale: "it_IT";
                    readonly code: "it_IT";
                    readonly flag: "it";
                }, {
                    readonly name: "日本語";
                    readonly locale: "ja";
                    readonly code: "ja";
                    readonly flag: "jp";
                }, {
                    readonly name: "Basa Jawa";
                    readonly locale: "jv_ID";
                    readonly code: "jv_ID";
                    readonly flag: "id";
                }, {
                    readonly name: "ქართული";
                    readonly locale: "ka_GE";
                    readonly code: "ka_GE";
                    readonly flag: "ge";
                }, {
                    readonly name: "Қазақ тілі";
                    readonly locale: "kk";
                    readonly code: "kk";
                    readonly flag: "kz";
                }, {
                    readonly name: "Cambodia";
                    readonly locale: "kh";
                    readonly code: "kh";
                    readonly flag: "kh";
                }, {
                    readonly name: "한국어";
                    readonly locale: "ko_KR";
                    readonly code: "ko_KR";
                    readonly flag: "kr";
                }, {
                    readonly name: "Кыргызча";
                    readonly locale: "ky_KG";
                    readonly code: "ky_KG";
                    readonly flag: "kg";
                }, {
                    readonly name: "کوردی";
                    readonly locale: "ckb";
                    readonly code: "ckb";
                    readonly flag: "iq";
                    readonly isRtl: true;
                }, {
                    readonly name: "ພາສາລາວ";
                    readonly locale: "lo";
                    readonly code: "lo";
                    readonly flag: "la";
                }, {
                    readonly name: "Lietuviškai";
                    readonly locale: "lt_LT";
                    readonly code: "lt_LT";
                    readonly flag: "lt";
                }, {
                    readonly name: "Latviešu valoda";
                    readonly locale: "lv";
                    readonly code: "lv";
                    readonly flag: "lv";
                }, {
                    readonly name: "македонски јазик";
                    readonly locale: "mk_MK";
                    readonly code: "mk_MK";
                    readonly flag: "mk";
                }, {
                    readonly name: "Монгол хэл";
                    readonly locale: "mn";
                    readonly code: "mn";
                    readonly flag: "mn";
                }, {
                    readonly name: "मराठी";
                    readonly locale: "mr";
                    readonly code: "mr";
                    readonly flag: "in";
                }, {
                    readonly name: "Bahasa Melayu";
                    readonly locale: "ms_MY";
                    readonly code: "ms_MY";
                    readonly flag: "my";
                }, {
                    readonly name: "ဗမာစာ";
                    readonly locale: "my_MM";
                    readonly code: "my_MM";
                    readonly flag: "mm";
                }, {
                    readonly name: "Maldives";
                    readonly locale: "mv";
                    readonly code: "mv";
                    readonly flag: "mv";
                    readonly isRtl: true;
                }, {
                    readonly name: "Norsk Bokmål";
                    readonly locale: "nb_NO";
                    readonly code: "nb_NO";
                    readonly flag: "no";
                }, {
                    readonly name: "नेपाली";
                    readonly locale: "ne_NP";
                    readonly code: "ne_NP";
                    readonly flag: "np";
                }, {
                    readonly name: "Nederlands";
                    readonly locale: "nl_NL";
                    readonly code: "nl_NL";
                    readonly flag: "nl";
                }, {
                    readonly name: "Nederlands (Formal)";
                    readonly locale: "nl_NL_formal";
                    readonly code: "nl_NL_formal";
                    readonly flag: "nl";
                }, {
                    readonly name: "Norsk Nynorsk";
                    readonly locale: "nn_NO";
                    readonly code: "nn_NO";
                    readonly flag: "no";
                }, {
                    readonly name: "Polski";
                    readonly locale: "pl_PL";
                    readonly code: "pl_PL";
                    readonly flag: "pl";
                }, {
                    readonly name: "پښتو";
                    readonly locale: "ps";
                    readonly code: "ps";
                    readonly flag: "af";
                    readonly isRtl: true;
                }, {
                    readonly name: "Português (Brasil)";
                    readonly locale: "pt_BR";
                    readonly code: "pt_BR";
                    readonly flag: "br";
                }, {
                    readonly name: "Português";
                    readonly locale: "pt_PT";
                    readonly code: "pt_PT";
                    readonly flag: "pt";
                }, {
                    readonly name: "Română";
                    readonly locale: "ro_RO";
                    readonly code: "ro_RO";
                    readonly flag: "ro";
                }, {
                    readonly name: "Русский";
                    readonly locale: "ru_RU";
                    readonly code: "ru_RU";
                    readonly flag: "ru";
                }, {
                    readonly name: "සිංහල";
                    readonly locale: "si_LK";
                    readonly code: "si_LK";
                    readonly flag: "lk";
                }, {
                    readonly name: "Slovenčina";
                    readonly locale: "sk_SK";
                    readonly code: "sk_SK";
                    readonly flag: "sk";
                }, {
                    readonly name: "Slovenščina";
                    readonly locale: "sl_SI";
                    readonly code: "sl_SI";
                    readonly flag: "si";
                }, {
                    readonly name: "Af-Soomaali";
                    readonly locale: "so_SO";
                    readonly code: "so_SO";
                    readonly flag: "so";
                }, {
                    readonly name: "Shqip";
                    readonly locale: "sq";
                    readonly code: "sq";
                    readonly flag: "al";
                }, {
                    readonly name: "Shqip (Shqipëri)";
                    readonly locale: "sq_AL";
                    readonly code: "sq_AL";
                    readonly flag: "al";
                }, {
                    readonly name: "Српски језик";
                    readonly locale: "sr_RS";
                    readonly code: "sr_RS";
                    readonly flag: "rs";
                }, {
                    readonly name: "Basa Sunda";
                    readonly locale: "su_ID";
                    readonly code: "su_ID";
                    readonly flag: "id";
                }, {
                    readonly name: "Svenska";
                    readonly locale: "sv_SE";
                    readonly code: "sv_SE";
                    readonly flag: "se";
                }, {
                    readonly name: "Ślōnskŏ gŏdka";
                    readonly locale: "szl";
                    readonly code: "szl";
                    readonly flag: "pl";
                }, {
                    readonly name: "Swahili";
                    readonly locale: "sw";
                    readonly code: "sw";
                    readonly flag: "ke";
                }, {
                    readonly name: "தமிழ்";
                    readonly locale: "ta_LK";
                    readonly code: "ta_LK";
                    readonly flag: "lk";
                }, {
                    readonly name: "ไทย";
                    readonly locale: "th";
                    readonly code: "th";
                    readonly flag: "th";
                }, {
                    readonly name: "ትግርኛ";
                    readonly locale: "ti";
                    readonly code: "ti";
                    readonly flag: "er";
                }, {
                    readonly name: "Tagalog";
                    readonly locale: "tl";
                    readonly code: "tl";
                    readonly flag: "ph";
                }, {
                    readonly name: "Türkçe";
                    readonly locale: "tr";
                    readonly code: "tr";
                    readonly flag: "tr";
                }, {
                    readonly name: "Türkçe (Türkiye)";
                    readonly locale: "tr_TR";
                    readonly code: "tr_TR";
                    readonly flag: "tr";
                }, {
                    readonly name: "Uyƣurqə";
                    readonly locale: "ug_CN";
                    readonly code: "ug_CN";
                    readonly flag: "cn";
                }, {
                    readonly name: "Українська";
                    readonly locale: "uk";
                    readonly code: "uk";
                    readonly flag: "ua";
                }, {
                    readonly name: "اردو";
                    readonly locale: "ur";
                    readonly code: "ur";
                    readonly flag: "pk";
                    readonly isRtl: true;
                }, {
                    readonly name: "Oʻzbek";
                    readonly locale: "uz_UZ";
                    readonly code: "uz_UZ";
                    readonly flag: "uz";
                }, {
                    readonly name: "Tiếng Việt";
                    readonly locale: "vi";
                    readonly code: "vi";
                    readonly flag: "vn";
                }, {
                    readonly name: "中文 (中国)";
                    readonly locale: "zh_CN";
                    readonly code: "zh_CN";
                    readonly flag: "cn";
                }, {
                    readonly name: "中文 (香港)";
                    readonly locale: "zh_HK";
                    readonly code: "zh_HK";
                    readonly flag: "hk";
                }, {
                    readonly name: "中文 (台灣)";
                    readonly locale: "zh_TW";
                    readonly code: "zh_TW";
                    readonly flag: "tw";
                }, {
                    readonly name: "Tajik";
                    readonly locale: "tg";
                    readonly code: "tg";
                    readonly flag: "tj";
                }];
                meta: object;
            }>;
        }>>;
        auditLogs: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    sortBy?: "id" | "createdAt" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        user: {
                            email: string;
                            id: string;
                            name: string | null;
                            avatarUrl: string | null;
                        } | null;
                        id: number;
                        createdAt: Date;
                        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        action: string;
                        ipAddress: string | null;
                        module: string;
                        entityId: string | null;
                        entityType: string | null;
                        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    user: {
                        email: string;
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    } | null;
                    userAgent: string | null;
                    id: number;
                    createdAt: Date;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    action: string;
                    ipAddress: string | null;
                    module: string;
                    entityId: string | null;
                    entityType: string | null;
                    oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                } | null;
                meta: object;
            }>;
            stats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    total: number;
                    todayCount: number;
                    byModule: {
                        module: string;
                        count: number;
                    }[];
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    userAgent: string | null;
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    action: string;
                    ipAddress: string | null;
                    module: string;
                    entityId: string | null;
                    entityType: string | null;
                    oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                };
                meta: object;
            }>;
            purgeAll: import("@trpc/server").TRPCMutationProcedure<{
                input: void;
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            purge: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    olderThanDays: number;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
        }>>;
        system: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            requestLogs: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    filters?: {
                        fieldKey: string;
                        operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                        value: string;
                        value2?: string | undefined;
                    }[] | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    pageSize?: number | undefined;
                    sortBy?: "duration" | "id" | "createdAt" | "statusCode" | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        url: string;
                        user: {
                            email: string;
                            id: string;
                            name: string | null;
                        } | null;
                        userAgent: string | null;
                        duration: number | null;
                        id: number;
                        createdAt: Date;
                        ipAddress: string | null;
                        statusCode: number | null;
                        method: string;
                        referer: string | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            requestStats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    total: number;
                    todayCount: number;
                    errorCount: number;
                    byMethod: {
                        method: string;
                        count: number;
                    }[];
                };
                meta: object;
            }>;
            purgeRequestLogs: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    olderThanDays: number;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            deleteRequestLog: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    url: string;
                    userAgent: string | null;
                    userId: string | null;
                    duration: number | null;
                    id: number;
                    createdAt: Date;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    ipAddress: string | null;
                    statusCode: number | null;
                    method: string;
                    referer: string | null;
                };
                meta: object;
            }>;
            systemInfo: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    nodeVersion: string;
                    platform: NodeJS.Platform;
                    arch: NodeJS.Architecture;
                    env: string;
                    timezone: string;
                    hostname: string;
                    processUptime: number;
                    systemUptime: number;
                    memoryUsage: NodeJS.MemoryUsage;
                    system: {
                        totalMem: number;
                        freeMem: number;
                        cpuModel: string;
                        cpuCores: number;
                        loadAvg: [number, number, number];
                    };
                    disk: {
                        total: number;
                        used: number;
                        free: number;
                        mountpoint: string;
                    } | null;
                    osRelease: string | null;
                    database: {
                        ok: boolean;
                        latencyMs: number | null;
                    };
                    redis: {
                        ok: boolean;
                        latencyMs: number | null;
                        usedMemory: string | null;
                    };
                };
                meta: object;
            }>;
            dashboardStats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    content: {
                        totalPosts: number;
                        publishedPosts: number;
                        draftPosts: number;
                        scheduledPosts: number;
                        totalPages: number;
                        totalCategories: number;
                        totalTags: number;
                    };
                    engagement: {
                        totalComments: number;
                        pendingComments: number;
                        totalContacts: number;
                        newContacts: number;
                    };
                    people: {
                        totalCustomers: number;
                    };
                    media: {
                        totalMedia: number;
                        totalSize: number;
                    };
                    recentPosts: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        slug: string;
                        title: string;
                    }[];
                    popularPosts: {
                        id: number;
                        slug: string;
                        title: string;
                        views: number;
                    }[];
                };
                meta: object;
            }>;
            publishingTrends: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    days?: number | undefined;
                } | undefined;
                output: {
                    date: string;
                    count: number;
                }[];
                meta: object;
            }>;
            popularContent: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    limit?: number | undefined;
                } | undefined;
                output: {
                    id: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                }[];
                meta: object;
            }>;
            statusBreakdown: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    count: number;
                }[];
                meta: object;
            }>;
            authorStats: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    limit?: number | undefined;
                } | undefined;
                output: {
                    authorId: string;
                    name: string;
                    email: string;
                    postCount: number;
                    totalViews: number;
                }[];
                meta: object;
            }>;
            categoryStats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    id: number;
                    name: string;
                    slug: string;
                    postCount: number;
                }[];
                meta: object;
            }>;
            engagementOverview: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    days?: number | undefined;
                } | undefined;
                output: {
                    period: string;
                    newComments: number;
                    newContacts: number;
                    newCustomers: number;
                };
                meta: object;
            }>;
            workflowTransitions: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    currentStatus: string;
                };
                output: {
                    currentStatus: string;
                    availableTransitions: string[];
                };
                meta: object;
            }>;
            workflowDescription: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: Record<string, string>;
                meta: object;
            }>;
            cacheStats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    redis: {
                        memoryUsed: string;
                        version: string;
                        uptimeSeconds: number;
                        connectedClients: number;
                        hitRate: number | null;
                        hits: number;
                        misses: number;
                    };
                    namespaces: {
                        cache: number;
                        rateLimit: number;
                        byNamespace: Record<string, number>;
                    };
                };
                meta: object;
            }>;
            clearCache: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
                };
                output: {
                    namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
                    cleared: number;
                };
                meta: object;
            }>;
            getQueueDashboardUrl: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    url: string;
                };
                meta: object;
            }>;
            listLogFiles: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    filename: string;
                    size: number;
                    mtime: Date;
                }[];
                meta: object;
            }>;
            getProcessStatus: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: unknown;
                meta: object;
            }>;
            executeProcessAction: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    action: "restart" | "stop" | "reload";
                    target: string;
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: {
                    success: boolean;
                    message: string;
                };
                meta: object;
            }>;
            pingServices: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: unknown;
                meta: object;
            }>;
            queryRedis: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    action: "get" | "scan" | "del";
                    sudoPassword: string;
                    maintenanceKey: string;
                    pattern?: string | undefined;
                    key?: string | undefined;
                };
                output: unknown;
                meta: object;
            }>;
            executeDbCommand: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    action: "migrate-deploy" | "migrate-reset" | "migrate-status" | "db-push" | "validate" | "generate" | "seed";
                    sudoPassword: string;
                    maintenanceKey: string;
                    seedOnly?: string | undefined;
                };
                output: {
                    success: boolean;
                    output: string;
                };
                meta: object;
            }>;
            executeLogCommand: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    sudoPassword: string;
                    maintenanceKey: string;
                    filename?: string | undefined;
                    lines?: number | undefined;
                    level?: string | undefined;
                    search?: string | undefined;
                };
                output: {
                    success: boolean;
                    output: string;
                };
                meta: object;
            }>;
            getLogLevel: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    level: string;
                };
                meta: object;
            }>;
            updateLogLevel: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    level: string;
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: {
                    success: boolean;
                    oldLevel: string;
                    newLevel: string;
                };
                meta: object;
            }>;
            getDatabaseStats: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: {
                    databaseSizeBytes: number;
                    tables: Array<{
                        tableName: string;
                        rowCount: number;
                        totalSizeBytes: number;
                        tableSizeBytes: number;
                        indexSizeBytes: number;
                    }>;
                };
                meta: object;
            }>;
            getRedisStats: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    sudoPassword: string;
                    maintenanceKey: string;
                };
                output: {
                    memory: Record<string, string>;
                    stats: Record<string, string>;
                    keysSummary: Array<{
                        pattern: string;
                        count: number;
                    }>;
                };
                meta: object;
            }>;
        }>>;
        customers: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    groupId?: number | undefined;
                    rateCardId?: number | undefined;
                };
                output: {
                    items: {
                        email: string;
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                        id: string;
                        createdAt: Date;
                        name: string | null;
                        customerCode: string | null;
                        username: string;
                        phone: string | null;
                        avatarUrl: string | null;
                        emailVerified: Date | null;
                        lastLoginAt: Date | null;
                        group: {
                            code: string;
                            id: number;
                            name: string;
                        } | null;
                        groupId: number | null;
                        _count: {
                            socialAccounts: number;
                            activityLogs: number;
                        };
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: string;
                };
                output: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    description: string | null;
                    id: string;
                    createdAt: Date;
                    name: string | null;
                    customerCode: string | null;
                    username: string;
                    usernameChangeCount: number;
                    usernameChangedAt: Date | null;
                    phone: string | null;
                    avatarUrl: string | null;
                    emailVerified: Date | null;
                    lastLoginAt: Date | null;
                    dob: Date | null;
                    gender: string | null;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    updatedAt: Date;
                    group: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                    socialAccounts: {
                        email: string | null;
                        id: number;
                        createdAt: Date;
                        name: string | null;
                        provider: string;
                    }[];
                    activityLogs: {
                        id: number;
                        createdAt: Date;
                        action: string;
                        ipAddress: string | null;
                    }[];
                    groupId: number | null;
                } | null;
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                    username?: string | undefined;
                    name?: string | undefined;
                    phone?: string | undefined;
                    dob?: string | undefined;
                    gender?: "male" | "female" | "other" | undefined;
                    description?: string | undefined;
                    password?: string | undefined;
                    groupId?: number | null | undefined;
                };
                output: {
                    email: string;
                    id: string;
                    name: string | null;
                    customerCode: string | null;
                    username: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                    username?: string | undefined;
                    name?: string | undefined;
                    phone?: string | undefined;
                    avatarUrl?: string | undefined;
                    dob?: string | null | undefined;
                    gender?: "male" | "female" | "other" | null | undefined;
                    description?: string | null | undefined;
                    status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
                    groupId?: number | null | undefined;
                };
                output: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    id: string;
                    name: string | null;
                    username: string;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                };
                output: {
                    id: string;
                };
                meta: object;
            }>;
            stats: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    total: number;
                    active: number;
                    inactive: number;
                    banned: number;
                };
                meta: object;
            }>;
            checkUsername: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    username: string;
                };
                output: {
                    available: boolean;
                };
                meta: object;
            }>;
            verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                };
                output: {
                    id: string;
                    emailVerified: Date | null;
                };
                meta: object;
            }>;
            setPassword: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                    password: string;
                };
                output: {
                    id: string;
                };
                meta: object;
            }>;
            auditHistory: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: string;
                };
                output: {
                    items: {
                        user: {
                            email: string;
                            id: string;
                            name: string | null;
                            avatarUrl: string | null;
                        } | null;
                        id: number;
                        createdAt: Date;
                        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        action: string;
                        ipAddress: string | null;
                        module: string;
                        entityId: string | null;
                        entityType: string | null;
                        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            verificationCodesList: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        code: string;
                        email: string;
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
                        id: number;
                        expiresAt: Date;
                        createdAt: Date;
                        updatedAt: Date;
                        attempts: number;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
        }>>;
        customerGroups: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: string | undefined;
                    sortDir?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        code: string;
                        description: string | null;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        _count: {
                            customers: number;
                        };
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            listAll: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    description: string | null;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        customers: number;
                        rateCards: number;
                    };
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    code: string;
                    name: string;
                    description?: string | null | undefined;
                };
                output: {
                    code: string;
                    description: string | null;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    code?: string | undefined;
                    name?: string | undefined;
                    description?: string | null | undefined;
                };
                output: {
                    code: string;
                    description: string | null;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            getMembers: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    groupId: number;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        email: string;
                        id: string;
                        createdAt: Date;
                        name: string | null;
                        username: string;
                        phone: string | null;
                        group: {
                            code: string;
                            id: number;
                            name: string;
                        } | null;
                        groupId: number | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            getAvailableCustomers: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    groupId: number;
                    search?: string | undefined;
                    limit?: number | undefined;
                };
                output: {
                    email: string;
                    id: string;
                    name: string | null;
                    username: string;
                    phone: string | null;
                    group: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                    groupId: number | null;
                }[];
                meta: object;
            }>;
            assignMembers: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    groupId: number;
                    customerIds: string[];
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            removeMembers: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    groupId: number;
                    customerIds: string[];
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
        }>>;
        tools: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            export: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    module: "customers" | "categories" | "tags" | "posts" | "pages" | "settings" | "all";
                };
                output: {
                    exportedAt: string;
                    version: string;
                    data: {
                        posts: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            slug: string;
                            isFeatured: boolean;
                            title: string;
                            views: number;
                            content: string | null;
                            excerpt: string | null;
                            allowComments: boolean;
                            formatType: string | null;
                            author: {
                                email: string;
                                id: string;
                                name: string | null;
                            };
                            categories: {
                                category: {
                                    id: number;
                                    name: string;
                                };
                            }[];
                            tags: {
                                tag: {
                                    id: number;
                                    name: string;
                                };
                            }[];
                        }[];
                        categories: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            description: string | null;
                            id: number;
                            createdAt: Date;
                            name: string;
                            parentId: number | null;
                            order: number;
                            slug: string;
                        }[];
                        tags: {
                            id: number;
                            createdAt: Date;
                            name: string;
                            slug: string;
                        }[];
                        pages: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            createdAt: Date;
                            order: number;
                            slug: string;
                            title: string;
                            content: string | null;
                            excerpt: string | null;
                            template: string | null;
                        }[];
                        customers: {
                            email: string;
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                            id: string;
                            createdAt: Date;
                            name: string | null;
                            username: string;
                            phone: string | null;
                            emailVerified: Date | null;
                        }[];
                        settings: {
                            key: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            value: string | null;
                        }[];
                    };
                } | {
                    module: string;
                    data: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        slug: string;
                        isFeatured: boolean;
                        title: string;
                        views: number;
                        content: string | null;
                        excerpt: string | null;
                        allowComments: boolean;
                        formatType: string | null;
                        author: {
                            email: string;
                            id: string;
                            name: string | null;
                        };
                        categories: {
                            category: {
                                id: number;
                                name: string;
                            };
                        }[];
                        tags: {
                            tag: {
                                id: number;
                                name: string;
                            };
                        }[];
                    }[];
                } | {
                    module: string;
                    data: {
                        id: number;
                        createdAt: Date;
                        name: string;
                        slug: string;
                    }[];
                } | {
                    module: string;
                    data: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        order: number;
                        slug: string;
                        title: string;
                        content: string | null;
                        excerpt: string | null;
                        template: string | null;
                    }[];
                } | {
                    module: string;
                    data: {
                        email: string;
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                        id: string;
                        createdAt: Date;
                        name: string | null;
                        username: string;
                        phone: string | null;
                        emailVerified: Date | null;
                    }[];
                } | {
                    module: string;
                    data: {
                        key: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        value: string | null;
                    }[];
                };
                meta: object;
            }>;
            import: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    module: "categories" | "tags" | "posts" | "pages" | "settings";
                    data: Record<string, unknown>[];
                };
                output: import("@ecom/features/tools/services/ImportService").ImportResult;
                meta: object;
            }>;
            fullBackup: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/tools/services/ImportExportService").ExportData;
                meta: object;
            }>;
            fullRestore: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    version: string;
                    exportedAt: string;
                    posts: Record<string, unknown>[];
                    pages: Record<string, unknown>[];
                    categories: Record<string, unknown>[];
                    tags: Record<string, unknown>[];
                    redirects: Record<string, unknown>[];
                };
                output: {
                    categories: number;
                    tags: number;
                    posts: number;
                    pages: number;
                    redirects: number;
                };
                meta: object;
            }>;
            checkDuplicates: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    title: string;
                    type: "page" | "post";
                    slug?: string | undefined;
                    excludeId?: number | undefined;
                };
                output: {
                    titleDuplicates: string[];
                    slugDuplicate: boolean;
                };
                meta: object;
            }>;
            fullTextSearch: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    query: string;
                    types?: ("page" | "post")[] | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    results: import("@ecom/features/search/services/FullTextSearchService").SearchResult[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            bulk: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                deletePosts: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: number[];
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                statusPosts: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: number[];
                        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                categoryAssign: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        postIds: number[];
                        categoryIds: number[];
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                deleteCategories: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: number[];
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                deleteTags: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: number[];
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                deletePages: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: number[];
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                    meta: object;
                }>;
                statusCustomers: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        ids: string[];
                        status: "ACTIVE" | "INACTIVE" | "BANNED";
                    };
                    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<string>;
                    meta: object;
                }>;
            }>>;
        }>>;
        seo: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag";
                    entityId: number;
                };
                output: {
                    id: number;
                    seoTitle: string | null;
                    seoDescription: string | null;
                    seoImage: string | null;
                    indexMode: string | null;
                } | null;
                meta: object;
            }>;
            save: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag";
                    entityId: number;
                    data: {
                        seoTitle?: string | undefined;
                        seoDescription?: string | undefined;
                        seoImage?: string | undefined;
                        indexMode?: "index" | "noindex" | undefined;
                    };
                };
                output: {
                    id: number;
                    seoTitle: string | null;
                    seoDescription: string | null;
                    seoImage: string | null;
                    indexMode: string | null;
                } | null;
                meta: object;
            }>;
        }>>;
        revisions: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    referenceId: number;
                    referenceType: "page" | "post";
                };
                output: {
                    id: number;
                    createdAt: Date;
                    title: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    note: string | null;
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
                    referenceId: number;
                    referenceType: string;
                    title: string;
                    content: string | null;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    note: string | null;
                };
                meta: object;
            }>;
        }>>;
        translations: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            languages: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    id: number;
                    name: string;
                    order: number;
                    isDefault: boolean;
                    flag: string | null;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityId: number;
                    langCode: string;
                };
                output: {
                    id: number;
                    slug: string | null;
                    title: string;
                    content: string | null;
                    excerpt: string | null;
                    langCode: string;
                } | {
                    description: string | null;
                    id: number;
                    name: string;
                    langCode: string;
                } | {
                    id: number;
                    label: string;
                    langCode: string;
                } | null;
                meta: object;
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityId: number;
                };
                output: {
                    id: number;
                    slug: string | null;
                    title: string;
                    content: string | null;
                    excerpt: string | null;
                    langCode: string;
                }[] | {
                    description: string | null;
                    id: number;
                    name: string;
                    langCode: string;
                }[] | {
                    id: number;
                    label: string;
                    langCode: string;
                }[];
                meta: object;
            }>;
            save: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityId: number;
                    langCode: string;
                    data: Record<string, string | undefined>;
                };
                output: {
                    id: number;
                    slug: string | null;
                    title: string;
                    content: string | null;
                    excerpt: string | null;
                    langCode: string;
                } | {
                    description: string | null;
                    id: number;
                    name: string;
                    langCode: string;
                } | {
                    id: number;
                    label: string;
                    langCode: string;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityId: number;
                    langCode: string;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            translationStatus: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityId: number;
                };
                output: {
                    translations: {
                        langCode: string;
                    }[];
                    originLangCode: string;
                };
                meta: object;
            }>;
            batchTranslationStatus: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post" | "category" | "tag" | "menuItem";
                    entityIds: number[];
                };
                output: Record<number, string[]>;
                meta: object;
            }>;
        }>>;
        webhooks: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    url: string;
                    id: number;
                    ownerId: string | null;
                    ownerType: string | null;
                    createdAt: Date;
                    name: string;
                    _count: {
                        logs: number;
                    };
                    isActive: boolean;
                    secret: string | null;
                    oldSecret: string | null;
                    secretUpdatedAt: Date | null;
                    events: string[];
                    retries: number;
                    timeout: number;
                    failureCount: number;
                    apiVersion: string;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    url: string;
                    id: number;
                    ownerId: string | null;
                    ownerType: string | null;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    secret: string | null;
                    oldSecret: string | null;
                    secretUpdatedAt: Date | null;
                    events: string[];
                    retries: number;
                    timeout: number;
                    failureCount: number;
                    apiVersion: string;
                };
                meta: object;
            }>;
            availableEvents: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: ("ping" | "order.created" | "order.status_updated" | "order.checkpoint_added" | "member.registered" | "post.created" | "post.updated" | "post.published" | "post.deleted" | "page.created" | "page.updated" | "page.published" | "page.deleted")[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    url: string;
                    events: string[];
                    secret?: string | undefined;
                    retries?: number | undefined;
                    timeout?: number | undefined;
                };
                output: {
                    id: number;
                    name: string;
                    secret: string | null;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    url?: string | undefined;
                    secret?: string | undefined;
                    events?: string[] | undefined;
                    isActive?: boolean | undefined;
                    retries?: number | undefined;
                    timeout?: number | undefined;
                };
                output: {
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    url: string;
                    id: number;
                    ownerId: string | null;
                    ownerType: string | null;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    secret: string | null;
                    oldSecret: string | null;
                    secretUpdatedAt: Date | null;
                    events: string[];
                    retries: number;
                    timeout: number;
                    failureCount: number;
                    apiVersion: string;
                };
                meta: object;
            }>;
            logs: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    webhookId: number;
                };
                output: {
                    error: string | null;
                    id: number;
                    createdAt: Date;
                    success: boolean;
                    event: string;
                    payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    response: string | null;
                    statusCode: number | null;
                    attempts: number;
                }[];
                meta: object;
            }>;
        }>>;
        comments: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    postId?: number | undefined;
                    pageId?: number | undefined;
                    status?: "approved" | "pending" | "spam" | "trash" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        status: string;
                        id: number;
                        createdAt: Date;
                        _count: {
                            replies: number;
                        };
                        customerId: string | null;
                        ipAddress: string | null;
                        parentId: number | null;
                        content: string;
                        postId: number | null;
                        pageId: number | null;
                        authorName: string | null;
                        authorEmail: string | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                    createdAt: Date;
                    customerId: string | null;
                    ipAddress: string | null;
                    parentId: number | null;
                    content: string;
                    postId: number | null;
                    pageId: number | null;
                    authorName: string | null;
                    authorEmail: string | null;
                    replies: {
                        status: string;
                        id: number;
                        createdAt: Date;
                        content: string;
                        authorName: string | null;
                    }[];
                };
                meta: object;
            }>;
            statusCounts: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    [k: string]: number;
                };
                meta: object;
            }>;
            approve: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                };
                meta: object;
            }>;
            markSpam: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                };
                meta: object;
            }>;
            trash: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    customerId: string | null;
                    ipAddress: string | null;
                    parentId: number | null;
                    content: string;
                    postId: number | null;
                    pageId: number | null;
                    authorName: string | null;
                    authorEmail: string | null;
                };
                meta: object;
            }>;
        }>>;
        contacts: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    formSlug?: string | undefined;
                    status?: "new" | "read" | "replied" | "archived" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        message: string;
                        email: string;
                        status: string;
                        id: number;
                        createdAt: Date;
                        name: string;
                        phone: string | null;
                        formSlug: string;
                        subject: string | null;
                        assigneeId: string | null;
                        repliedAt: Date | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    message: string;
                    email: string;
                    status: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    updatedAt: Date;
                    ipAddress: string | null;
                    formSlug: string;
                    subject: string | null;
                    assigneeId: string | null;
                    repliedAt: Date | null;
                    assignee: {
                        id: string;
                        name: string | null;
                    } | null;
                };
                meta: object;
            }>;
            statusCounts: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    [k: string]: number;
                };
                meta: object;
            }>;
            updateStatus: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    status: "new" | "read" | "replied" | "archived";
                };
                output: {
                    status: string;
                    id: number;
                };
                meta: object;
            }>;
            assignTo: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    assigneeId: string;
                };
                output: {
                    id: number;
                    assigneeId: string | null;
                };
                meta: object;
            }>;
            markReplied: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: string;
                    id: number;
                    repliedAt: Date | null;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    message: string;
                    email: string;
                    status: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    updatedAt: Date;
                    ipAddress: string | null;
                    formSlug: string;
                    subject: string | null;
                    assigneeId: string | null;
                    repliedAt: Date | null;
                };
                meta: object;
            }>;
        }>>;
        notifications: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    page?: number | undefined;
                    perPage?: number | undefined;
                    unreadOnly?: boolean | undefined;
                    cursor?: number | undefined;
                    search?: string | undefined;
                    type?: string | undefined;
                } | undefined;
                output: {
                    items: {
                        type: string;
                        link: string | null;
                        id: number;
                        createdAt: Date;
                        titleKey: string;
                        messageKey: string;
                        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        isRead: boolean;
                        isSensitive: boolean;
                        deliveryClass: string;
                        sentAt: Date | null;
                        deliveredAt: Date | null;
                        clickedAt: Date | null;
                    }[];
                    nextCursor: number | undefined;
                } | {
                    items: {
                        type: string;
                        link: string | null;
                        id: number;
                        createdAt: Date;
                        titleKey: string;
                        messageKey: string;
                        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        isRead: boolean;
                        isSensitive: boolean;
                        deliveryClass: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            unreadCount: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: number;
                meta: object;
            }>;
            markRead: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    read?: boolean | undefined;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            markAllRead: import("@trpc/server").TRPCMutationProcedure<{
                input: void;
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            registerToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                    platform: string;
                    deviceInfo?: string | undefined;
                };
                output: {
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    customerId: string | null;
                    token: string;
                    platform: string;
                    deviceInfo: string | null;
                };
                meta: object;
            }>;
            unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            getPreferences: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    eventType: string;
                    category: "order" | "system" | "blog" | "account" | "wallet";
                    labelKey: string;
                    descriptionKey: string;
                    channels: {
                        inApp: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        push: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        email: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        webhook: {
                            value: boolean;
                            mandatory: boolean;
                        };
                    };
                    dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
                }[];
                meta: object;
            }>;
            updatePreference: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    eventType: string;
                    channels: {
                        inApp?: boolean | undefined;
                        push?: boolean | undefined;
                        email?: boolean | undefined;
                        webhook?: boolean | undefined;
                    };
                    dndConfig?: Record<string, any> | undefined;
                };
                output: {
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    customerId: string | null;
                    eventType: string;
                    channelInApp: boolean;
                    channelPush: boolean;
                    channelEmail: boolean;
                    channelWebhook: boolean;
                    dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                };
                meta: object;
            }>;
            listTemplates: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    channelInApp: boolean;
                    channelPush: boolean;
                    channelEmail: boolean;
                    titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    layoutType: string | null;
                }[];
                meta: object;
            }>;
            updateTemplate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    titleTemplate?: Record<string, string> | undefined;
                    messageTemplate?: Record<string, string> | undefined;
                    emailSubjectTemplate?: Record<string, string> | undefined;
                    emailBodyTemplate?: Record<string, string> | undefined;
                    variables?: Record<string, string> | undefined;
                    channelInApp?: boolean | undefined;
                    channelPush?: boolean | undefined;
                    channelEmail?: boolean | undefined;
                    layoutType?: string | null | undefined;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    channelInApp: boolean;
                    channelPush: boolean;
                    channelEmail: boolean;
                    titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    layoutType: string | null;
                };
                meta: object;
            }>;
            sendTestTemplate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    emailRecipient: string;
                    variables?: Record<string, any> | undefined;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            resetTemplate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    channelInApp: boolean;
                    channelPush: boolean;
                    channelEmail: boolean;
                    titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    layoutType: string | null;
                };
                meta: object;
            }>;
            listScheduled: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        message: string;
                        status: string;
                        link: string | null;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        title: string;
                        scheduledAt: Date;
                        targetType: string;
                        targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                        failedReason: string | null;
                        templateId: number | null;
                    }[];
                    total: number;
                };
                meta: object;
            }>;
            createScheduled: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    targetType: string;
                    title: string;
                    message: string;
                    scheduledAt: unknown;
                    targetIds?: string[] | undefined;
                    link?: string | null | undefined;
                };
                output: {
                    message: string;
                    status: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    title: string;
                    scheduledAt: Date;
                    targetType: string;
                    targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    failedReason: string | null;
                    templateId: number | null;
                };
                meta: object;
            }>;
            deleteScheduled: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    message: string;
                    status: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    title: string;
                    scheduledAt: Date;
                    targetType: string;
                    targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    failedReason: string | null;
                    templateId: number | null;
                };
                meta: object;
            }>;
            previewTemplate: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    variables: Record<string, any>;
                    type?: string | undefined;
                    templateId?: number | undefined;
                    customEmailBody?: string | undefined;
                    customEmailSubject?: string | undefined;
                    locale?: string | undefined;
                };
                output: {
                    subject: string;
                    html: string;
                    text: string;
                };
                meta: object;
            }>;
            testDispatch: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    templateId: number;
                    variables: Record<string, any>;
                    emailRecipient: string;
                    locale?: string | undefined;
                };
                output: {
                    type: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    titleKey: string;
                    messageKey: string;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    isRead: boolean;
                    isSensitive: boolean;
                    deliveryClass: string;
                } | null;
                meta: object;
            }>;
            blacklist: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                        page?: number | undefined;
                        perPage?: number | undefined;
                        search?: string | undefined;
                    };
                    output: {
                        items: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            reason: string;
                        }[];
                        total: number;
                        page: number;
                        perPage: number;
                        stats: {
                            bounce: number;
                            complaint: number;
                            manual: number;
                        };
                    };
                    meta: object;
                }>;
                add: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        email: string;
                        reason: string;
                    };
                    output: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        reason: string;
                    };
                    meta: object;
                }>;
                addBulk: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        entries: {
                            email: string;
                            reason: string;
                        }[];
                    };
                    output: void;
                    meta: object;
                }>;
                remove: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        email: string;
                    };
                    output: void;
                    meta: object;
                }>;
                removeBulk: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        emails: string[];
                    };
                    output: void;
                    meta: object;
                }>;
                updateReason: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        email: string;
                        reason: string;
                    };
                    output: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        reason: string;
                    };
                    meta: object;
                }>;
                syncCache: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        emails: string[];
                    };
                    output: void;
                    meta: object;
                }>;
            }>>;
        }>>;
        redirects: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    search?: string | undefined;
                    isActive?: boolean | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: {
                    items: {
                        id: number;
                        createdAt: Date;
                        isActive: boolean;
                        statusCode: number;
                        note: string | null;
                        fromPath: string;
                        toPath: string;
                        hitCount: number;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    fromPath: string;
                    toPath: string;
                    statusCode?: number | undefined;
                    note?: string | undefined;
                };
                output: {
                    id: number;
                    isActive: boolean;
                    statusCode: number;
                    fromPath: string;
                    toPath: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    fromPath?: string | undefined;
                    toPath?: string | undefined;
                    statusCode?: number | undefined;
                    isActive?: boolean | undefined;
                    note?: string | undefined;
                };
                output: {
                    id: number;
                    isActive: boolean;
                    statusCode: number;
                    fromPath: string;
                    toPath: string;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    isActive: boolean;
                    statusCode: number;
                    note: string | null;
                    fromPath: string;
                    toPath: string;
                    hitCount: number;
                };
                meta: object;
            }>;
        }>>;
        taxonomies: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    type?: string | undefined;
                    parentId?: number | null | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: {
                    items: {
                        type: string;
                        description: string | null;
                        id: number;
                        createdAt: Date;
                        name: string;
                        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        _count: {
                            children: number;
                        };
                        parentId: number | null;
                        order: number;
                        slug: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    parentId: number | null;
                    children: {
                        id: number;
                        name: string;
                        order: number;
                        slug: string;
                    }[];
                    order: number;
                    slug: string;
                };
                meta: object;
            }>;
            tree: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    type: string;
                };
                output: {
                    id: number;
                    name: string;
                    children: {
                        id: number;
                        name: string;
                        children: {
                            id: number;
                            name: string;
                            order: number;
                            slug: string;
                        }[];
                        order: number;
                        slug: string;
                    }[];
                    order: number;
                    slug: string;
                }[];
                meta: object;
            }>;
            types: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    type: string;
                    count: number;
                }[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    slug: string;
                    type: string;
                    description?: string | undefined;
                    parentId?: number | undefined;
                    order?: number | undefined;
                    metadata?: Record<string, unknown> | undefined;
                };
                output: {
                    type: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    updatedAt: Date;
                    parentId: number | null;
                    order: number;
                    slug: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    slug?: string | undefined;
                    description?: string | undefined;
                    parentId?: number | null | undefined;
                    order?: number | undefined;
                    metadata?: Record<string, unknown> | undefined;
                };
                output: {
                    type: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    updatedAt: Date;
                    parentId: number | null;
                    order: number;
                    slug: string;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    updatedAt: Date;
                    parentId: number | null;
                    order: number;
                    slug: string;
                };
                meta: object;
            }>;
        }>>;
        templates: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    type?: string | undefined;
                    search?: string | undefined;
                    isActive?: boolean | undefined;
                } | undefined;
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    isActive: boolean;
                    slug: string;
                    thumbnail: string | null;
                }[];
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    isActive: boolean;
                    slug: string;
                    content: string | null;
                    structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    thumbnail: string | null;
                    createdBy: string | null;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    slug: string;
                    type: "email" | "page" | "post";
                    content?: string | undefined;
                    structure?: Record<string, unknown> | undefined;
                    thumbnail?: string | undefined;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    slug: string;
                    content: string | null;
                    structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    thumbnail: string | null;
                    createdBy: string | null;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    slug?: string | undefined;
                    content?: string | undefined;
                    structure?: Record<string, unknown> | undefined;
                    thumbnail?: string | undefined;
                    isActive?: boolean | undefined;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    slug: string;
                    content: string | null;
                    structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    thumbnail: string | null;
                    createdBy: string | null;
                };
                meta: object;
            }>;
            duplicate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    slug: string;
                    content: string | null;
                    structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    thumbnail: string | null;
                    createdBy: string | null;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    type: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    slug: string;
                    content: string | null;
                    structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    thumbnail: string | null;
                    createdBy: string | null;
                };
                meta: object;
            }>;
        }>>;
        contentLocks: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            acquire: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post";
                    entityId: number;
                };
                output: {
                    acquired: boolean;
                    lock: import("@ecom/features/content-lock/ContentLockService").ContentLock;
                };
                meta: object;
            }>;
            release: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post";
                    entityId: number;
                };
                output: boolean;
                meta: object;
            }>;
            check: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityType: "page" | "post";
                    entityId: number;
                };
                output: import("@ecom/features/content-lock/ContentLockService").ContentLock | null;
                meta: object;
            }>;
            heartbeat: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entityType: "page" | "post";
                    entityId: number;
                };
                output: boolean;
                meta: object;
            }>;
        }>>;
        rateCards: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            calculate: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    shippingMethod: "EXPRESS" | "EPACKET";
                    country: string;
                    weight: number;
                    customerId: string;
                    origin?: string | null | undefined;
                    calculationDate?: unknown;
                };
                output: {
                    freightCost: number;
                    appliedRateCardId: number;
                    appliedRateCardSnapshot: {
                        rateCardId: number;
                        rateCardCode: string;
                        rateCardName: string;
                        currency: string;
                        itemId: number;
                        startWeight: number;
                        endWeight: number;
                        rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
                        amount: number;
                    };
                };
                meta: object;
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id?: number | undefined;
                    code?: string | undefined;
                    type?: "DEFAULT" | "CUSTOM" | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                    shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                    country?: string | undefined;
                    origin?: string | undefined;
                    search?: string | undefined;
                    name?: string | undefined;
                    startDate?: unknown;
                    endDate?: unknown;
                    customerGroupId?: number | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "code" | "type" | "status" | "id" | "createdAt" | "name" | "updatedAt" | "startDate" | "endDate" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                    startDate: Date | null;
                    endDate: Date | null;
                    country: string;
                    origin: string | null;
                    currency: string;
                    weightStep: import("@prisma/client-runtime-utils").Decimal;
                    minWeight: import("@prisma/client-runtime-utils").Decimal;
                    maxWeight: import("@prisma/client-runtime-utils").Decimal;
                    groups: {
                        customerGroup: {
                            code: string;
                            id: number;
                            name: string;
                        };
                        customerGroupId: number;
                    }[];
                }>;
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    items: {
                        id: number;
                        startWeight: import("@prisma/client-runtime-utils").Decimal;
                        endWeight: import("@prisma/client-runtime-utils").Decimal;
                        rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
                        amount: import("@prisma/client-runtime-utils").Decimal;
                    }[];
                    shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                    startDate: Date | null;
                    endDate: Date | null;
                    country: string;
                    origin: string | null;
                    currency: string;
                    weightStep: import("@prisma/client-runtime-utils").Decimal;
                    minWeight: import("@prisma/client-runtime-utils").Decimal;
                    maxWeight: import("@prisma/client-runtime-utils").Decimal;
                    groups: {
                        customerGroup: {
                            code: string;
                            id: number;
                            name: string;
                        };
                        customerGroupId: number;
                    }[];
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    code: string;
                    name: string;
                    shippingMethod: "EXPRESS" | "EPACKET";
                    weightStep: number;
                    minWeight: number;
                    maxWeight: number;
                    type?: "DEFAULT" | "CUSTOM" | undefined;
                    country?: string | undefined;
                    origin?: string | null | undefined;
                    currency?: string | undefined;
                    startDate?: unknown;
                    endDate?: unknown;
                    customerGroupIds?: number[] | undefined;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    code?: string | undefined;
                    name?: string | undefined;
                    type?: "DEFAULT" | "CUSTOM" | undefined;
                    shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                    country?: string | undefined;
                    origin?: string | null | undefined;
                    currency?: string | undefined;
                    weightStep?: number | undefined;
                    minWeight?: number | undefined;
                    maxWeight?: number | undefined;
                    startDate?: unknown;
                    endDate?: unknown;
                    customerGroupIds?: number[] | undefined;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            submitForReview: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            approve: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            reject: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    reason?: string | undefined;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            assignGroups: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    customerGroupIds: number[];
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            checkOverlap: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    shippingMethod: "EXPRESS" | "EPACKET";
                    country: string;
                    excludeId?: number | undefined;
                    origin?: string | null | undefined;
                    customerGroupIds?: number[] | undefined;
                    startDate?: unknown;
                    endDate?: unknown;
                };
                output: {
                    hasOverlap: boolean;
                    overlappingCards: {
                        code: string;
                        id: number;
                        startDate: Date | null;
                        endDate: Date | null;
                    }[];
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            listLogs: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    user: {
                        email: string;
                        id: string;
                        name: string | null;
                    } | null;
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    action: string;
                    oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                }[];
                meta: object;
            }>;
            importSlabs: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    rateCardId: number;
                    slabs: {
                        startWeight: number;
                        endWeight: number;
                        rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
                        amount: number;
                    }[];
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            exportSlabsTemplate: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    minWeight: number;
                    maxWeight: number;
                    weightStep: number;
                    rateType?: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG" | undefined;
                };
                output: {
                    slabs: {
                        startWeight: number;
                        endWeight: number;
                        rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
                        amount: number;
                    }[];
                };
                meta: object;
            }>;
            listGroups: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
            duplicate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
        }>>;
        partners: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    search?: string | undefined;
                    status?: "ACTIVE" | "INACTIVE" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "code" | "status" | "id" | "createdAt" | "name" | "updatedAt" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    code: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    contactName: string | null;
                    contactEmail: string | null;
                    contactPhone: string | null;
                }>;
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    apiConfig: Record<string, unknown> | null;
                    code: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    contactName: string | null;
                    contactEmail: string | null;
                    contactPhone: string | null;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    code: string;
                    name: string;
                    contactName?: string | null | undefined;
                    contactEmail?: string | null | undefined;
                    contactPhone?: string | null | undefined;
                    status?: "ACTIVE" | "INACTIVE" | undefined;
                    description?: string | null | undefined;
                    apiConfig?: Record<string, unknown> | null | undefined;
                };
                output: {
                    code: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    code?: string | undefined;
                    name?: string | undefined;
                    contactName?: string | null | undefined;
                    contactEmail?: string | null | undefined;
                    contactPhone?: string | null | undefined;
                    status?: "ACTIVE" | "INACTIVE" | undefined;
                    description?: string | null | undefined;
                    apiConfig?: Record<string, unknown> | null | undefined;
                };
                output: {
                    code: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                    id: number;
                    name: string;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                } | null;
                meta: object;
            }>;
            listServices: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    partnerId: number;
                };
                output: {
                    code: string;
                    type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    isActive: boolean;
                    partnerId: number;
                    statusMapping: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    webhookSecret: string | null;
                    timeoutMs: number;
                    rateLimitPerMinute: number;
                }[];
                meta: object;
            }>;
            addService: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    partnerId: number;
                    code: string;
                    name: string;
                    type: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE";
                    statusMapping?: Record<string, unknown> | null | undefined;
                    isActive?: boolean | undefined;
                    webhookSecret?: string | null | undefined;
                    timeoutMs?: number | undefined;
                    rateLimitPerMinute?: number | undefined;
                };
                output: {
                    code: string;
                    id: number;
                    name: string;
                    partnerId: number;
                };
                meta: object;
            }>;
            updateService: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: unknown;
                    code?: string | undefined;
                    name?: string | undefined;
                    type?: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE" | undefined;
                    statusMapping?: Record<string, unknown> | null | undefined;
                    isActive?: boolean | undefined;
                    webhookSecret?: string | null | undefined;
                    timeoutMs?: number | undefined;
                    rateLimitPerMinute?: number | undefined;
                };
                output: {
                    code: string;
                    id: number;
                    name: string;
                    partnerId: number;
                };
                meta: object;
            }>;
            deleteService: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: unknown;
                };
                output: {
                    id: number;
                } | null;
                meta: object;
            }>;
            testConnection: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    tempConfig?: Record<string, unknown> | null | undefined;
                };
                output: {
                    success: boolean;
                    message: string;
                };
                meta: object;
            }>;
        }>>;
        packing: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    search?: string | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                    orderBy?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        description: string | null;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        image: string | null;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    image: string | null;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    image: string | null;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    image?: string | null | undefined;
                    description?: string | null | undefined;
                    status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    image: string | null;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
        }>>;
        divisions: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            listProvinces: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    divisionType?: string | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                    orderBy?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        code: number;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        divisionType: string;
                        codeName: string;
                        phoneCode: number;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            getProvince: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    phoneCode: number;
                };
                meta: object;
            }>;
            createProvince: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    code: number;
                    divisionType: string;
                    phoneCode: number;
                    codeName?: string | undefined;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    phoneCode: number;
                };
                meta: object;
            }>;
            updateProvince: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    code?: number | undefined;
                    divisionType?: string | undefined;
                    codeName?: string | undefined;
                    phoneCode?: number | undefined;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    phoneCode: number;
                };
                meta: object;
            }>;
            deleteProvince: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            listWards: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    provinceCode?: number | undefined;
                    search?: string | undefined;
                    divisionType?: string | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                    orderBy?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        code: number;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        province: {
                            name: string;
                        };
                        divisionType: string;
                        codeName: string;
                        provinceCode: number;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            getWard: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    provinceCode: number;
                };
                meta: object;
            }>;
            createWard: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    code: number;
                    divisionType: string;
                    provinceCode: number;
                    codeName?: string | undefined;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    provinceCode: number;
                };
                meta: object;
            }>;
            updateWard: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    code?: number | undefined;
                    divisionType?: string | undefined;
                    codeName?: string | undefined;
                    provinceCode?: number | undefined;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    provinceCode: number;
                };
                meta: object;
            }>;
            deleteWard: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            listDivisions: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    countryCode: string;
                    level?: number | undefined;
                    parentId?: number | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                    orderBy?: "asc" | "desc" | undefined;
                };
                output: {
                    items: {
                        code: string;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        divisionType: string;
                        countryCode: string;
                        nameEn: string | null;
                        level: number;
                        parentId: number | null;
                        isActive: boolean;
                        parent: {
                            code: string;
                            id: number;
                            name: string;
                        } | null;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            getDivision: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: number;
                };
                output: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                    parent: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                };
                meta: object;
            }>;
            createDivision: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    countryCode: string;
                    code: string;
                    name: string;
                    divisionType: string;
                    level: number;
                    nameEn?: string | undefined;
                    parentId?: number | undefined;
                };
                output: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                };
                meta: object;
            }>;
            updateDivision: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    name?: string | undefined;
                    nameEn?: string | undefined;
                    divisionType?: string | undefined;
                    isActive?: boolean | undefined;
                };
                output: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                };
                meta: object;
            }>;
        }>>;
        orders: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    customerId?: string | undefined;
                    status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: {
                    data: import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderSummaryResponse[];
                    meta: import("@flash-ship/ecom-lib").PaginationMeta;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: string;
                };
                output: import("./viewer/orders/procedures/orders.handler").CachedOrder | import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderDetailResponse | undefined;
                meta: object;
            }>;
            updateStatus: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                    status: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION";
                    metadata?: Record<string, any> | null | undefined;
                    expectedVersion?: number | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                    id: string;
                    updatedAt: Date;
                    orderCode: string;
                    labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
                    exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
                    importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
                    paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
                    version: number;
                };
                meta: object;
            }>;
            addCheckpoint: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    orderId: string;
                    checkpointDate: string | Date;
                    description: string;
                    location?: string | null | undefined;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            recalculate: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                    forceRefresh?: boolean | undefined;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                    id: string;
                    createdAt: Date;
                    orderCode: string;
                    totalFee: import("@prisma/client-runtime-utils").Decimal;
                };
                meta: object;
            }>;
        }>>;
    }>>;
    public: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        v1: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            blog: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                listPosts: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        categoryId?: number | undefined;
                        isFeatured?: boolean | undefined;
                        search?: string | undefined;
                        page?: number | undefined;
                        perPage?: number | undefined;
                    } | undefined;
                    output: import("@flash-ship/ecom-lib").PaginatedResult<{
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        deletedAt: Date | null;
                        slug: string;
                        isFeatured: boolean;
                        title: string;
                        publishedAt: Date | null;
                        views: number;
                        excerpt: string | null;
                        featuredImage: string | null;
                        authorId: string;
                        author: {
                            id: string;
                            name: string | null;
                            avatarUrl: string | null;
                        };
                        categories: {
                            category: {
                                id: number;
                                name: string;
                                slug: string;
                            };
                        }[];
                    }>;
                    meta: object;
                }>;
                getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        slug: string;
                    };
                    output: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        slug: string;
                        isFeatured: boolean;
                        title: string;
                        publishedAt: Date | null;
                        views: number;
                        content: string | null;
                        excerpt: string | null;
                        featuredImage: string | null;
                        bannerImage: string | null;
                        externalSource: string | null;
                        sponsoredBy: string | null;
                        authorId: string;
                        author: {
                            id: string;
                            name: string | null;
                            avatarUrl: string | null;
                        };
                        categories: {
                            category: {
                                id: number;
                                name: string;
                                slug: string;
                            };
                        }[];
                        tags: {
                            tag: {
                                id: number;
                                name: string;
                                slug: string;
                            };
                        }[];
                    } & {
                        _translatedFrom?: string;
                    };
                    meta: object;
                }>;
                categories: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        children: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            name: string;
                            children: {
                                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                                id: number;
                                name: string;
                                order: number;
                                slug: string;
                                icon: string | null;
                            }[];
                            order: number;
                            slug: string;
                            icon: string | null;
                        }[];
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    meta: object;
                }>;
                tags: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        search?: string | undefined;
                        page?: number | undefined;
                        perPage?: number | undefined;
                    } | undefined;
                    output: {
                        rows: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            createdAt: Date;
                            name: string;
                            _count: {
                                posts: number;
                            };
                            slug: string;
                        }[];
                        total: number;
                        page: number;
                        perPage: number;
                        totalPages: number;
                    };
                    meta: object;
                }>;
                listComments: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        postId: number;
                        page?: number | undefined;
                        perPage?: number | undefined;
                    };
                    output: {
                        items: {
                            status: string;
                            id: number;
                            createdAt: Date;
                            _count: {
                                replies: number;
                            };
                            customerId: string | null;
                            ipAddress: string | null;
                            parentId: number | null;
                            content: string;
                            postId: number | null;
                            pageId: number | null;
                            authorName: string | null;
                            authorEmail: string | null;
                        }[];
                        total: number;
                        page: number;
                        perPage: number;
                    };
                    meta: object;
                }>;
                submitComment: import("@trpc/server").TRPCMutationProcedure<{
                    input: {
                        postId: number;
                        authorName: string;
                        authorEmail: string;
                        content: string;
                        parentId?: number | undefined;
                        website?: string | undefined;
                    };
                    output: {
                        success: boolean;
                        message: string;
                    };
                    meta: object;
                }>;
                relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        postId: number;
                        limit?: number | undefined;
                    };
                    output: ({
                        id: number;
                        title: string;
                        slug: string;
                        excerpt: string | null;
                        featuredImage: string | null;
                        publishedAt: Date | null;
                        score: number;
                    } & {
                        _translatedFrom?: string;
                    })[];
                    meta: object;
                }>;
                search: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        query: string;
                        page?: number | undefined;
                        perPage?: number | undefined;
                    };
                    output: import("@flash-ship/ecom-lib").PaginatedResult<{
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        deletedAt: Date | null;
                        slug: string;
                        isFeatured: boolean;
                        title: string;
                        publishedAt: Date | null;
                        views: number;
                        excerpt: string | null;
                        featuredImage: string | null;
                        authorId: string;
                        author: {
                            id: string;
                            name: string | null;
                            avatarUrl: string | null;
                        };
                        categories: {
                            category: {
                                id: number;
                                name: string;
                                slug: string;
                            };
                        }[];
                    }>;
                    meta: object;
                }>;
            }>>;
            pages: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                    input: void;
                    output: ({
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        _count: {
                            children: number;
                        };
                        parentId: number | null;
                        order: number;
                        slug: string;
                        title: string;
                        publishedAt: Date | null;
                        authorId: string;
                        author: {
                            id: string;
                            name: string | null;
                        };
                        template: string | null;
                    } & {
                        _translatedFrom?: string;
                    })[];
                    meta: object;
                }>;
                getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        slug: string;
                    };
                    output: ({
                        id: number;
                        slug: string;
                        seoMeta: {
                            seoTitle: string | null;
                            seoDescription: string | null;
                            seoImage: string | null;
                            indexMode: string | null;
                        } | null;
                        title: string;
                        publishedAt: Date | null;
                        content: string | null;
                        excerpt: string | null;
                        featuredImage: string | null;
                        template: string | null;
                    } & {
                        _translatedFrom?: string;
                    }) | null;
                    meta: object;
                }>;
            }>>;
            languages: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                getActive: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
                    meta: object;
                }>;
                getDefault: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
                    meta: object;
                }>;
            }>>;
            hscode: import("@trpc/server").TRPCBuiltRouter<{
                ctx: import("..").Context;
                meta: object;
                errorShape: {
                    message: string;
                    data: {
                        zodError: {
                            message: string;
                            details: import("../init").ZodErrorDetail[];
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
                getTree: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: {
                        code: string;
                        description: string;
                    }[];
                    meta: object;
                }>;
                getDetail: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        code: string;
                    };
                    output: {
                        chapter: {
                            code: string;
                            name: string;
                            notesHtml: string | null;
                        };
                        heading: {
                            code: string;
                            name: string;
                        } | null;
                        selectedRate: {
                            code: string;
                            description: string;
                            chapterCode: string;
                            headingCode: string;
                            unit: string | null;
                            generalRate: string | null;
                            specialRate: string | null;
                        } | null;
                        rates: {
                            code: string;
                            description: string;
                            chapterCode: string;
                            headingCode: string;
                            unit: string | null;
                            generalRate: string | null;
                            specialRate: string | null;
                        }[];
                        children: any[];
                    };
                    meta: object;
                }>;
                search: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        query: string;
                    };
                    output: {
                        code: string;
                        description: string;
                        chapterCode: string;
                        headingCode: string;
                        unit: string | null;
                        generalRate: string | null;
                        specialRate: string | null;
                    }[];
                    meta: object;
                }>;
                getHeadingTree: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        code: string;
                    };
                    output: {
                        code: string;
                        description: string;
                        generalRate: string | null;
                        specialRate: string | null;
                        unit: string | null;
                        children: any[];
                    }[];
                    meta: object;
                }>;
                calculate: import("@trpc/server").TRPCQueryProcedure<{
                    input: {
                        code: string;
                        value: number;
                        mode: string;
                        country?: string | undefined;
                        entryDate?: string | undefined;
                        loadingDate?: string | undefined;
                    };
                    output: {
                        dutyRate: string;
                        baseCost: number;
                        totalDuties: number;
                        hmf: number;
                        mpf: number;
                        total: number;
                    };
                    meta: object;
                }>;
                getCountries: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: {
                        flag: string | null;
                        code: string;
                        id: number;
                        name: string;
                    }[];
                    meta: object;
                }>;
                getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
                    input: void;
                    output: {
                        code: string;
                        id: number;
                        name: string;
                    }[];
                    meta: object;
                }>;
            }>>;
        }>>;
        blog: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            listPosts: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    categoryId?: number | undefined;
                    isFeatured?: boolean | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    excerpt: string | null;
                    featuredImage: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                }>;
                meta: object;
            }>;
            getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    slug: string;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    bannerImage: string | null;
                    externalSource: string | null;
                    sponsoredBy: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                    tags: {
                        tag: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                } & {
                    _translatedFrom?: string;
                };
                meta: object;
            }>;
            categories: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    children: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        children: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            name: string;
                            order: number;
                            slug: string;
                            icon: string | null;
                        }[];
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                meta: object;
            }>;
            tags: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: {
                    rows: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        name: string;
                        _count: {
                            posts: number;
                        };
                        slug: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            listComments: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    postId: number;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        status: string;
                        id: number;
                        createdAt: Date;
                        _count: {
                            replies: number;
                        };
                        customerId: string | null;
                        ipAddress: string | null;
                        parentId: number | null;
                        content: string;
                        postId: number | null;
                        pageId: number | null;
                        authorName: string | null;
                        authorEmail: string | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            submitComment: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    postId: number;
                    authorName: string;
                    authorEmail: string;
                    content: string;
                    parentId?: number | undefined;
                    website?: string | undefined;
                };
                output: {
                    success: boolean;
                    message: string;
                };
                meta: object;
            }>;
            relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    postId: number;
                    limit?: number | undefined;
                };
                output: ({
                    id: number;
                    title: string;
                    slug: string;
                    excerpt: string | null;
                    featuredImage: string | null;
                    publishedAt: Date | null;
                    score: number;
                } & {
                    _translatedFrom?: string;
                })[];
                meta: object;
            }>;
            search: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    query: string;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    excerpt: string | null;
                    featuredImage: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                }>;
                meta: object;
            }>;
        }>>;
        pages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: ({
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    _count: {
                        children: number;
                    };
                    parentId: number | null;
                    order: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    template: string | null;
                } & {
                    _translatedFrom?: string;
                })[];
                meta: object;
            }>;
            getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    slug: string;
                };
                output: ({
                    id: number;
                    slug: string;
                    seoMeta: {
                        seoTitle: string | null;
                        seoDescription: string | null;
                        seoImage: string | null;
                        indexMode: string | null;
                    } | null;
                    title: string;
                    publishedAt: Date | null;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    template: string | null;
                } & {
                    _translatedFrom?: string;
                }) | null;
                meta: object;
            }>;
        }>>;
        languages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            getActive: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
                meta: object;
            }>;
            getDefault: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
                meta: object;
            }>;
        }>>;
        health: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            check: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/health/HealthCheckService").HealthCheckResult;
                meta: object;
            }>;
        }>>;
        hscode: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            getTree: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    description: string;
                }[];
                meta: object;
            }>;
            getDetail: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                };
                output: {
                    chapter: {
                        code: string;
                        name: string;
                        notesHtml: string | null;
                    };
                    heading: {
                        code: string;
                        name: string;
                    } | null;
                    selectedRate: {
                        code: string;
                        description: string;
                        chapterCode: string;
                        headingCode: string;
                        unit: string | null;
                        generalRate: string | null;
                        specialRate: string | null;
                    } | null;
                    rates: {
                        code: string;
                        description: string;
                        chapterCode: string;
                        headingCode: string;
                        unit: string | null;
                        generalRate: string | null;
                        specialRate: string | null;
                    }[];
                    children: any[];
                };
                meta: object;
            }>;
            search: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    query: string;
                };
                output: {
                    code: string;
                    description: string;
                    chapterCode: string;
                    headingCode: string;
                    unit: string | null;
                    generalRate: string | null;
                    specialRate: string | null;
                }[];
                meta: object;
            }>;
            getHeadingTree: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                };
                output: {
                    code: string;
                    description: string;
                    generalRate: string | null;
                    specialRate: string | null;
                    unit: string | null;
                    children: any[];
                }[];
                meta: object;
            }>;
            calculate: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                    value: number;
                    mode: string;
                    country?: string | undefined;
                    entryDate?: string | undefined;
                    loadingDate?: string | undefined;
                };
                output: {
                    dutyRate: string;
                    baseCost: number;
                    totalDuties: number;
                    hmf: number;
                    mpf: number;
                    total: number;
                };
                meta: object;
            }>;
            getCountries: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    flag: string | null;
                    code: string;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
            getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
        }>>;
    }>>;
    customer: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        auth: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            sendVerificationCode: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            register: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                    password: string;
                    code: string;
                };
                output: {
                    accessToken: string;
                    refreshToken: string;
                    customer: {
                        email: string;
                        id: string;
                        name: string | null;
                        customerCode: string | null;
                        username: string;
                    };
                };
                meta: object;
            }>;
            login: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    identifier: string;
                    password: string;
                };
                output: {
                    accessToken: string;
                    refreshToken: string;
                    customer: {
                        id: string;
                        email: string;
                        username: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                };
                meta: object;
            }>;
            refreshToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    refreshToken: string;
                };
                output: {
                    accessToken: string;
                    refreshToken: string;
                };
                meta: object;
            }>;
            me: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    accessToken?: string | undefined;
                } | undefined;
                output: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    description: string | null;
                    id: string;
                    createdAt: Date;
                    name: string | null;
                    customerCode: string | null;
                    username: string;
                    usernameChangeCount: number;
                    usernameChangedAt: Date | null;
                    phone: string | null;
                    avatarUrl: string | null;
                    emailVerified: Date | null;
                    lastLoginAt: Date | null;
                    dob: Date | null;
                    gender: string | null;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    updatedAt: Date;
                    group: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                    socialAccounts: {
                        email: string | null;
                        id: number;
                        createdAt: Date;
                        name: string | null;
                        provider: string;
                    }[];
                    activityLogs: {
                        id: number;
                        createdAt: Date;
                        action: string;
                        ipAddress: string | null;
                    }[];
                    groupId: number | null;
                } | null;
                meta: object;
            }>;
            updateProfile: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    accessToken?: string | undefined;
                    username?: string | undefined;
                    name?: string | undefined;
                    phone?: string | undefined;
                    dob?: string | null | undefined;
                    gender?: "male" | "female" | "other" | null | undefined;
                    description?: string | null | undefined;
                };
                output: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    id: string;
                    name: string | null;
                    username: string;
                };
                meta: object;
            }>;
            verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                };
                output: {
                    customerId: string;
                };
                meta: object;
            }>;
            forgotPassword: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                };
                output: {
                    message: string;
                };
                meta: object;
            }>;
            resetPassword: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                    password: string;
                };
                output: {
                    customerId: string;
                };
                meta: object;
            }>;
            changePassword: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    oldPassword: string;
                    newPassword: string;
                    accessToken?: string | undefined;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            checkUsername: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    username: string;
                };
                output: {
                    available: boolean;
                };
                meta: object;
            }>;
            logout: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    refreshToken: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
        }>>;
        divisions: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            listProvinces: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                } | undefined;
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    phoneCode: number;
                }[];
                meta: object;
            }>;
            listWards: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    provinceCode: number;
                    search?: string | undefined;
                };
                output: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    province: {
                        name: string;
                    };
                    divisionType: string;
                    codeName: string;
                    provinceCode: number;
                }[];
                meta: object;
            }>;
            listStates: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    limit?: number | undefined;
                } | undefined;
                output: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                    parent: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                }[];
                meta: object;
            }>;
            listCities: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    parentId: number;
                    search?: string | undefined;
                    limit?: number | undefined;
                };
                output: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                    parent: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                }[];
                meta: object;
            }>;
        }>>;
        orders: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            calculateFreight: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    shippingMethod: "EXPRESS" | "EPACKET";
                    country: string;
                    declaredWeight: number;
                    dimensionLength?: number | null | undefined;
                    dimensionWidth?: number | null | undefined;
                    dimensionHeight?: number | null | undefined;
                    origin?: string | null | undefined;
                };
                output: {
                    baseShippingRate: number;
                    surchargeFee: number;
                    totalAmount: number;
                    chargeableWeight: number;
                    volumeWeight: number;
                    appliedRateCardId: number;
                    appliedRateCardItemId: number;
                };
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    shippingMethod: "EXPRESS" | "EPACKET";
                    receiverName: string;
                    receiverCity: string;
                    receiverState: string;
                    receiverAddress1: string;
                    receiverCountry: string;
                    receiverZipCode: string;
                    detailDescription: string;
                    declaredWeight: number;
                    declaredValue: number;
                    shippingOrigin?: "HAN" | "SGN" | undefined;
                    sellerOrderId?: string | null | undefined;
                    importId?: string | null | undefined;
                    senderName?: string | null | undefined;
                    senderAddress?: string | null | undefined;
                    senderPhone?: string | null | undefined;
                    senderEmail?: string | null | undefined;
                    senderCountry?: string | null | undefined;
                    senderState?: string | null | undefined;
                    senderCity?: string | null | undefined;
                    senderWard?: string | null | undefined;
                    senderZipCode?: string | null | undefined;
                    receiverPhone?: string | null | undefined;
                    receiverEmail?: string | null | undefined;
                    receiverAddress2?: string | null | undefined;
                    dimensionLength?: number | null | undefined;
                    dimensionWidth?: number | null | undefined;
                    dimensionHeight?: number | null | undefined;
                    packingTypeId?: number | null | undefined;
                    isGetLabel?: number | undefined;
                    products?: {
                        description: string;
                        quantity: number;
                        value: number;
                        hsCode?: string | null | undefined;
                        originCountry?: string | null | undefined;
                        weight?: number | null | undefined;
                        sku?: string | null | undefined;
                    }[] | undefined;
                };
                output: {
                    totalFee: number;
                    volumeWeight: number;
                    chargeableWeight: number;
                    dimensionText: string | null;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                    id: string;
                    createdAt: Date;
                    orderCode: string;
                };
                meta: object;
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                    fromDate?: string | undefined;
                    toDate?: string | undefined;
                    shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                    id: string;
                    createdAt: Date;
                    customer: {
                        email: string;
                        name: string | null;
                        username: string;
                    };
                    customerId: string;
                    shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                    shippingOrigin: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingOrigin;
                    sellerOrderId: string | null;
                    receiverName: string;
                    receiverPhone: string | null;
                    receiverCity: string;
                    receiverState: string;
                    receiverAddress1: string;
                    receiverCountry: string;
                    receiverZipCode: string;
                    declaredWeight: number;
                    orderCode: string;
                    labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
                    ecomTrackingNumber: string | null;
                    baseShippingFee: import("@prisma/client-runtime-utils").Decimal;
                    surchargeFee: import("@prisma/client-runtime-utils").Decimal;
                    totalFee: import("@prisma/client-runtime-utils").Decimal;
                }>;
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: string;
                };
                output: import("./customer/orders/procedures/orders.handler").CachedOrder | undefined;
                meta: object;
            }>;
            exportExcel: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    search?: string | undefined;
                    status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                    fromDate?: string | undefined;
                    toDate?: string | undefined;
                    shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                    sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                    sortOrder?: "asc" | "desc" | undefined;
                } | undefined;
                output: {
                    filename: string;
                    fileData: string;
                };
                meta: object;
            }>;
            createImportSession: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    fileName: string;
                    totalRows: number;
                    fileSize?: number | null | undefined;
                };
                output: {
                    id: string;
                };
                meta: object;
            }>;
            importBatch: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    importId: string;
                    batchIndex: number;
                    orders: {
                        excelRowNumbers: number[];
                        shippingMethod: "EXPRESS" | "EPACKET";
                        receiverName: string;
                        receiverCity: string;
                        receiverState: string;
                        receiverAddress1: string;
                        receiverCountry: string;
                        receiverZipCode: string;
                        detailDescription: string;
                        declaredWeight: number;
                        declaredValue: number;
                        shippingOrigin?: "HAN" | "SGN" | undefined;
                        sellerOrderId?: string | null | undefined;
                        senderName?: string | null | undefined;
                        senderAddress?: string | null | undefined;
                        senderPhone?: string | null | undefined;
                        senderEmail?: string | null | undefined;
                        senderCountry?: string | null | undefined;
                        senderState?: string | null | undefined;
                        senderCity?: string | null | undefined;
                        senderZipCode?: string | null | undefined;
                        receiverPhone?: string | null | undefined;
                        receiverEmail?: string | null | undefined;
                        receiverAddress2?: string | null | undefined;
                        dimensionLength?: number | null | undefined;
                        dimensionWidth?: number | null | undefined;
                        dimensionHeight?: number | null | undefined;
                        packagingCode?: string | null | undefined;
                        isGetLabel?: number | undefined;
                        products?: {
                            description: string;
                            quantity: number;
                            value: number;
                            hsCode?: string | null | undefined;
                            originCountry?: string | null | undefined;
                            weight?: number | null | undefined;
                            sku?: string | null | undefined;
                        }[] | undefined;
                    }[];
                };
                output: {
                    successCount: number;
                    failedCount: number;
                    errors: {
                        line: number;
                        columnName: string;
                        enteredValue: string;
                        errorReason: string;
                    }[];
                };
                meta: object;
            }>;
            completeImportSession: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    importId: string;
                    successRows: number;
                    failedRows: number;
                    errors: {
                        line: number;
                        columnName: string;
                        enteredValue: string;
                        errorReason: string;
                    }[];
                    status?: "completed" | "failed" | undefined;
                };
                output: {
                    status: string;
                    id: string;
                };
                meta: object;
            }>;
            listImportSessions: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    page?: number | undefined;
                    perPage?: number | undefined;
                    search?: string | undefined;
                    startDate?: string | undefined;
                    endDate?: string | undefined;
                    timezoneOffset?: string | undefined;
                };
                output: {
                    total: number;
                    items: {
                        status: string;
                        id: string;
                        createdAt: Date;
                        fileName: string;
                        fileSize: number | null;
                        totalRows: number;
                        successRows: number;
                        failedRows: number;
                    }[];
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            getImportSessionDetail: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    id: string;
                };
                output: {
                    status: string;
                    id: string;
                    createdAt: Date;
                    customerId: string;
                    fileName: string;
                    fileSize: number | null;
                    totalRows: number;
                    successRows: number;
                    failedRows: number;
                    errors: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                };
                meta: object;
            }>;
            listPackingTypes: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                } | undefined;
                output: {
                    items: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        description: string | null;
                        id: number;
                        createdAt: Date;
                        name: string;
                        updatedAt: Date;
                        image: string | null;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                    totalPages: number;
                };
                meta: object;
            }>;
        }>>;
        apiKeys: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    id: string;
                    ownerId: string;
                    ownerType: string;
                    maskedKey: string;
                    label: string | null;
                    allowedIps: string[];
                    expiresAt: Date | null;
                    lastUsedAt: Date | null;
                    createdAt: Date;
                }[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    label?: string | null | undefined;
                    expiresAt?: Date | null | undefined;
                    allowedIps?: string[] | null | undefined;
                };
                output: {
                    rawKey: string;
                    maskedKey: string;
                };
                meta: object;
            }>;
            revoke: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
        }>>;
        webhooks: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    url: string;
                    id: number;
                    ownerId: string | null;
                    ownerType: string | null;
                    createdAt: Date;
                    name: string;
                    _count: {
                        logs: number;
                    };
                    isActive: boolean;
                    secret: string | null;
                    oldSecret: string | null;
                    secretUpdatedAt: Date | null;
                    events: string[];
                    retries: number;
                    timeout: number;
                    failureCount: number;
                    apiVersion: string;
                }[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    url: string;
                    events: string[];
                    apiVersion?: string | undefined;
                };
                output: {
                    id: number;
                    name: string;
                    secret: string | null;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            rollSecret: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    secret: string;
                };
                meta: object;
            }>;
            testWebhook: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            listLogs: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    webhookId: number;
                };
                output: {
                    error: string | null;
                    id: number;
                    createdAt: Date;
                    success: boolean;
                    event: string;
                    payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    response: string | null;
                    statusCode: number | null;
                    attempts: number;
                }[];
                meta: object;
            }>;
        }>>;
        notifications: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    page?: number | undefined;
                    perPage?: number | undefined;
                    unreadOnly?: boolean | undefined;
                    cursor?: number | undefined;
                } | undefined;
                output: {
                    items: {
                        type: string;
                        link: string | null;
                        id: number;
                        createdAt: Date;
                        titleKey: string;
                        messageKey: string;
                        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        isRead: boolean;
                        isSensitive: boolean;
                        deliveryClass: string;
                        sentAt: Date | null;
                        deliveredAt: Date | null;
                        clickedAt: Date | null;
                    }[];
                    nextCursor: number | undefined;
                } | {
                    items: {
                        type: string;
                        link: string | null;
                        id: number;
                        createdAt: Date;
                        titleKey: string;
                        messageKey: string;
                        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                        isRead: boolean;
                        isSensitive: boolean;
                        deliveryClass: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            unreadCount: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: number;
                meta: object;
            }>;
            markRead: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            markAllRead: import("@trpc/server").TRPCMutationProcedure<{
                input: void;
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            registerToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                    platform: string;
                    deviceInfo?: string | undefined;
                };
                output: {
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    customerId: string | null;
                    token: string;
                    platform: string;
                    deviceInfo: string | null;
                };
                meta: object;
            }>;
            unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    token: string;
                };
                output: import("@ecom/prisma").Prisma.BatchPayload;
                meta: object;
            }>;
            getPreferences: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    eventType: string;
                    category: "order" | "system" | "blog" | "account" | "wallet";
                    labelKey: string;
                    descriptionKey: string;
                    channels: {
                        inApp: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        push: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        email: {
                            value: boolean;
                            mandatory: boolean;
                        };
                        webhook: {
                            value: boolean;
                            mandatory: boolean;
                        };
                    };
                    dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
                }[];
                meta: object;
            }>;
            updatePreference: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    eventType: string;
                    channels: {
                        inApp?: boolean | undefined;
                        push?: boolean | undefined;
                        email?: boolean | undefined;
                        webhook?: boolean | undefined;
                    };
                    dndConfig?: Record<string, any> | undefined;
                };
                output: {
                    userId: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    customerId: string | null;
                    eventType: string;
                    channelInApp: boolean;
                    channelPush: boolean;
                    channelEmail: boolean;
                    channelWebhook: boolean;
                    dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                };
                meta: object;
            }>;
        }>>;
        senders: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: ({
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    ward: string | null;
                    country: string;
                    isDefault: boolean;
                    city: string;
                    zipCode: string | null;
                    address: string;
                } & {
                    cityName: string;
                    wardName: string | null;
                })[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    address: string;
                    city: string;
                    label?: string | null | undefined;
                    phone?: string | null | undefined;
                    email?: string | null | undefined;
                    ward?: string | null | undefined;
                    zipCode?: string | null | undefined;
                    country?: string | undefined;
                    isDefault?: boolean | undefined;
                };
                output: ({
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    ward: string | null;
                    country: string;
                    isDefault: boolean;
                    city: string;
                    zipCode: string | null;
                    address: string;
                } & {
                    cityName: string;
                    wardName: string | null;
                }) | undefined;
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    data: {
                        label?: string | null | undefined;
                        name?: string | undefined;
                        phone?: string | null | undefined;
                        email?: string | null | undefined;
                        address?: string | undefined;
                        city?: string | undefined;
                        ward?: string | null | undefined;
                        zipCode?: string | null | undefined;
                        country?: string | undefined;
                        isDefault?: boolean | undefined;
                    };
                };
                output: ({
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    ward: string | null;
                    country: string;
                    isDefault: boolean;
                    city: string;
                    zipCode: string | null;
                    address: string;
                } & {
                    cityName: string;
                    wardName: string | null;
                }) | undefined;
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            setDefault: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    ward: string | null;
                    country: string;
                    isDefault: boolean;
                    city: string;
                    zipCode: string | null;
                    address: string;
                };
                meta: object;
            }>;
        }>>;
        receivers: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    stateName: string;
                    cityName: string;
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    country: string;
                    isDefault: boolean;
                    address1: string;
                    address2: string | null;
                    city: string;
                    state: string;
                    zipCode: string;
                }[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name: string;
                    address1: string;
                    city: string;
                    state: string;
                    zipCode: string;
                    label?: string | null | undefined;
                    phone?: string | null | undefined;
                    email?: string | null | undefined;
                    address2?: string | null | undefined;
                    country?: string | undefined;
                    isDefault?: boolean | undefined;
                };
                output: {
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    country: string;
                    isDefault: boolean;
                    address1: string;
                    address2: string | null;
                    city: string;
                    state: string;
                    zipCode: string;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    data: {
                        label?: string | null | undefined;
                        name?: string | undefined;
                        phone?: string | null | undefined;
                        email?: string | null | undefined;
                        address1?: string | undefined;
                        address2?: string | null | undefined;
                        city?: string | undefined;
                        state?: string | undefined;
                        zipCode?: string | undefined;
                        country?: string | undefined;
                        isDefault?: boolean | undefined;
                    };
                };
                output: {
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    country: string;
                    isDefault: boolean;
                    address1: string;
                    address2: string | null;
                    city: string;
                    state: string;
                    zipCode: string;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            setDefault: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    email: string | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    updatedAt: Date;
                    country: string;
                    isDefault: boolean;
                    address1: string;
                    address2: string | null;
                    city: string;
                    state: string;
                    zipCode: string;
                };
                meta: object;
            }>;
        }>>;
        packages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: {
                    length: number | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    weight: number;
                    packingTypeId: number | null;
                    width: number | null;
                    isDefault: boolean;
                    packageName: string;
                    height: number | null;
                }[];
                meta: object;
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    packageName: string;
                    packingTypeId: number;
                    weight: number;
                    label?: string | null | undefined;
                    length?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    isDefault?: boolean | undefined;
                };
                output: {
                    length: number | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    weight: number;
                    packingTypeId: number | null;
                    width: number | null;
                    isDefault: boolean;
                    packageName: string;
                    height: number | null;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                    data: {
                        label?: string | null | undefined;
                        packageName?: string | undefined;
                        packingTypeId?: number | undefined;
                        length?: number | null | undefined;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        weight?: number | undefined;
                        isDefault?: boolean | undefined;
                    };
                };
                output: {
                    length: number | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    weight: number;
                    packingTypeId: number | null;
                    width: number | null;
                    isDefault: boolean;
                    packageName: string;
                    height: number | null;
                };
                meta: object;
            }>;
            delete: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    id: number;
                };
                meta: object;
            }>;
            setDefault: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    id: number;
                };
                output: {
                    length: number | null;
                    id: number;
                    label: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    weight: number;
                    packingTypeId: number | null;
                    width: number | null;
                    isDefault: boolean;
                    packageName: string;
                    height: number | null;
                };
                meta: object;
            }>;
        }>>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
export declare const adminRouter: import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    auth: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        me: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: string;
                email: string;
                name: string | null;
                phone: string | null;
                username: string | null;
                locale: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                createdAt: Date;
                roles: {
                    id: number;
                    name: string;
                    displayName: string | null;
                }[];
                permissions: string[];
            };
            meta: object;
        }>;
        getUserProfile: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                userId: string;
            };
            output: {
                id: string;
                email: string;
                name: string | null;
                phone: string | null;
                username: string | null;
                locale: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                createdAt: Date;
                roles: {
                    id: number;
                    name: string;
                    displayName: string | null;
                }[];
                permissions: string[];
            };
            meta: object;
        }>;
        updateProfile: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId?: string | undefined;
                name?: string | undefined;
                username?: string | undefined;
                phone?: string | null | undefined;
                avatarUrl?: string | null | undefined;
                locale?: "vi" | "en" | undefined;
            };
            output: {
                email: string;
                locale: string | null;
                id: string;
                name: string | null;
                username: string | null;
                phone: string | null;
                avatarUrl: string | null;
            };
            meta: object;
        }>;
        changePasswordSelf: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId: string;
                newPassword: string;
                confirmPassword: string;
                currentPassword?: string | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        getPreferences: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                userId?: string | undefined;
            };
            output: {
                theme: "light" | "dark";
            };
            meta: object;
        }>;
        updatePreferences: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId?: string | undefined;
                theme?: "light" | "dark" | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
    posts: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                authorId?: string | undefined;
                categoryId?: number | undefined;
                isFeatured?: boolean | undefined;
                search?: string | undefined;
                includeDeleted?: boolean | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "title" | "publishedAt" | "views" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                sortDir?: "asc" | "desc" | undefined;
            } | undefined;
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                deletedAt: Date | null;
                slug: string;
                isFeatured: boolean;
                title: string;
                publishedAt: Date | null;
                views: number;
                excerpt: string | null;
                featuredImage: string | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                        slug: string;
                    };
                }[];
            }>;
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                title: string;
                slug?: string | undefined;
                content?: string | undefined;
                excerpt?: string | undefined;
                featuredImage?: string | undefined;
                bannerImage?: string | undefined;
                isFeatured?: boolean | undefined;
                allowComments?: boolean | undefined;
                formatType?: string | undefined;
                externalSource?: string | undefined;
                sponsoredBy?: string | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                scheduledAt?: string | null | undefined;
                expiresAt?: string | null | undefined;
                categoryIds?: number[] | undefined;
                tagIds?: number[] | undefined;
                authorId?: string | undefined;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                title?: string | undefined;
                slug?: string | undefined;
                content?: string | undefined;
                excerpt?: string | undefined;
                featuredImage?: string | null | undefined;
                bannerImage?: string | null | undefined;
                isFeatured?: boolean | undefined;
                allowComments?: boolean | undefined;
                formatType?: string | null | undefined;
                externalSource?: string | null | undefined;
                sponsoredBy?: string | null | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                scheduledAt?: string | null | undefined;
                expiresAt?: string | null | undefined;
                categoryIds?: number[] | undefined;
                tagIds?: number[] | undefined;
                authorId?: string | undefined;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        publish: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        archive: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        clone: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        restore: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
            meta: object;
        }>;
        permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        bulkDelete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
            };
            output: {
                success: number;
                failed: number;
            };
            meta: object;
        }>;
        bulkPublish: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
            };
            output: {
                success: number;
                failed: number;
            };
            meta: object;
        }>;
        bulkArchive: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
            };
            output: {
                success: number;
                failed: number;
            };
            meta: object;
        }>;
        bulkRestore: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                ids: number[];
            };
            output: {
                success: number;
                failed: number;
            };
            meta: object;
        }>;
    }>>;
    pages: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                search?: string | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                parentId?: number | null | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "order" | "title" | undefined;
                sortDir?: "asc" | "desc" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                data: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    _count: {
                        children: number;
                    };
                    parentId: number | null;
                    order: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    template: string | null;
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
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                deletedAt: Date | null;
                updatedAt: Date;
                parentId: number | null;
                order: number;
                slug: string;
                title: string;
                publishedAt: Date | null;
                content: string | null;
                excerpt: string | null;
                featuredImage: string | null;
                bannerImage: string | null;
                authorId: string;
                author: {
                    email: string;
                    id: string;
                    name: string | null;
                };
                template: string | null;
                heroBanner: string | null;
                layout: string | null;
                hideTitle: boolean;
                hideBreadcrumb: boolean;
                hideSidebar: boolean;
                hideFooter: boolean;
                gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                subtitle: string | null;
                ctaText: string | null;
                ctaLink: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                title: string;
                slug: string;
                content?: string | undefined;
                excerpt?: string | undefined;
                featuredImage?: string | undefined;
                template?: string | undefined;
                order?: number | undefined;
                parentId?: number | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                scheduledAt?: string | null | undefined;
                bannerImage?: string | undefined;
                heroBanner?: string | undefined;
                layout?: string | undefined;
                hideTitle?: boolean | undefined;
                hideBreadcrumb?: boolean | undefined;
                hideSidebar?: boolean | undefined;
                hideFooter?: boolean | undefined;
                gallery?: string[] | undefined;
                subtitle?: string | undefined;
                ctaText?: string | undefined;
                ctaLink?: string | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                slug: string;
                title: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                title?: string | undefined;
                slug?: string | undefined;
                content?: string | undefined;
                excerpt?: string | undefined;
                featuredImage?: string | undefined;
                template?: string | undefined;
                order?: number | undefined;
                parentId?: number | null | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                scheduledAt?: string | null | undefined;
                bannerImage?: string | undefined;
                heroBanner?: string | undefined;
                layout?: string | undefined;
                hideTitle?: boolean | undefined;
                hideBreadcrumb?: boolean | undefined;
                hideSidebar?: boolean | undefined;
                hideFooter?: boolean | undefined;
                gallery?: string[] | undefined;
                subtitle?: string | undefined;
                ctaText?: string | undefined;
                ctaLink?: string | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                slug: string;
                title: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                deletedAt: Date | null;
                updatedAt: Date;
                parentId: number | null;
                order: number;
                slug: string;
                title: string;
                publishedAt: Date | null;
                content: string | null;
                excerpt: string | null;
                featuredImage: string | null;
                bannerImage: string | null;
                authorId: string;
                scheduledAt: Date | null;
                template: string | null;
                heroBanner: string | null;
                layout: string | null;
                hideTitle: boolean;
                hideBreadcrumb: boolean;
                hideSidebar: boolean;
                hideFooter: boolean;
                gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                subtitle: string | null;
                ctaText: string | null;
                ctaLink: string | null;
            };
            meta: object;
        }>;
        revisions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                pageId: number;
            };
            output: {
                id: number;
                createdAt: Date;
                title: string;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                };
                note: string | null;
            }[];
            meta: object;
        }>;
        revision: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
                createdAt: Date;
                referenceId: number;
                referenceType: string;
                title: string;
                content: string | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                };
                note: string | null;
            };
            meta: object;
        }>;
    }>>;
    categories: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                search?: string | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "name" | "order" | undefined;
                sortDir?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                items: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        tree: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
                children: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    children: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                order: number;
                slug: string;
                icon: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                slug?: string | undefined;
                description?: string | undefined;
                icon?: string | undefined;
                isFeatured?: number | undefined;
                isDefault?: number | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                parentId?: number | undefined;
                order?: number | undefined;
            };
            output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                slug?: string | undefined;
                description?: string | null | undefined;
                icon?: string | null | undefined;
                isFeatured?: number | undefined;
                isDefault?: number | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
                parentId?: number | null | undefined;
                order?: number | undefined;
            };
            output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
            meta: object;
        }>;
        restore: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
            meta: object;
        }>;
    }>>;
    tags: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                search?: string | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "name" | undefined;
                sortDir?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                rows: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    name: string;
                    _count: {
                        posts: number;
                    };
                    slug: string;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    posts: number;
                };
                slug: string;
                authorId: string | null;
                translations: {
                    description: string | null;
                    id: number;
                    name: string;
                    langCode: string;
                }[];
                authorType: string;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                slug?: string | undefined;
                description?: string | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                slug: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                slug?: string | undefined;
                description?: string | undefined;
                status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    posts: number;
                };
                slug: string;
                authorId: string | null;
                translations: {
                    description: string | null;
                    id: number;
                    name: string;
                    langCode: string;
                }[];
                authorType: string;
            } | null;
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                slug: string;
            };
            meta: object;
        }>;
        restore: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                slug: string;
            };
            meta: object;
        }>;
        permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
    }>>;
    media: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
    roles: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    permissions: number;
                    users: number;
                };
                displayName: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: unknown;
            };
            output: {
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    users: number;
                };
                displayName: string | null;
                permissions: {
                    permission: {
                        id: number;
                        name: string;
                        group: string | null;
                        displayName: string | null;
                    };
                }[];
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                displayName?: string | undefined;
                description?: string | undefined;
            };
            output: {
                description: string | null;
                id: number;
                name: string;
                displayName: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: unknown;
                displayName?: string | undefined;
                description?: string | undefined;
            };
            output: {
                description: string | null;
                id: number;
                name: string;
                displayName: string | null;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: unknown;
            };
            output: {
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                displayName: string | null;
            };
            meta: object;
        }>;
        syncPermissions: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                roleId: unknown;
                permissionIds: unknown[];
            };
            output: {
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    users: number;
                };
                displayName: string | null;
                permissions: {
                    permission: {
                        id: number;
                        name: string;
                        group: string | null;
                        displayName: string | null;
                    };
                }[];
            } | null;
            meta: object;
        }>;
        permissions: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                [k: string]: {
                    id: number;
                    name: string;
                    group: string | null;
                    displayName: string | null;
                }[];
            };
            meta: object;
        }>;
    }>>;
    users: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                search?: string | undefined;
                status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            } | undefined;
            output: {
                data: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto[];
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
                id: string;
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                password: string;
                name?: string | undefined;
                username?: string | undefined;
                phone?: string | null | undefined;
                locale?: string | undefined;
                roleIds?: unknown[] | undefined;
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
                name?: string | undefined;
                username?: string | undefined;
                phone?: string | null | undefined;
                avatarUrl?: string | undefined;
                locale?: string | undefined;
                status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
        changePassword: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId: string;
                newPassword: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        syncRoles: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId: string;
                roleIds: unknown[];
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
        toggleSuperAdmin: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                userId: string;
                isSuperAdmin: boolean;
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
            };
            output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
            meta: object;
        }>;
    }>>;
    customFields: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
    settings: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        getAll: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: Record<string, string | null>;
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                key: string;
            };
            output: string | null;
            meta: object;
        }>;
        getMany: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                keys: string[];
            };
            output: Record<string, string | null>;
            meta: object;
        }>;
        set: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                key: string;
                value: string | null;
            };
            output: {
                key: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                value: string | null;
            };
            meta: object;
        }>;
        bulkSet: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                items: {
                    key: string;
                    value: string | null;
                }[];
            };
            output: {
                key: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                value: string | null;
            }[];
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                key: string;
            };
            output: {
                key: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                value: string | null;
            };
            meta: object;
        }>;
    }>>;
    languages: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                code: string;
                locale: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                order: number;
                isDefault: boolean;
                flag: string | null;
                isRtl: boolean;
            }[];
            meta: object;
        }>;
        getActive: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
            meta: object;
        }>;
        getById: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                locale: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                order: number;
                isDefault: boolean;
                flag: string | null;
                isRtl: boolean;
            };
            meta: object;
        }>;
        getDefault: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                locale: string;
                code: string;
                flag?: string | undefined;
                isRtl?: boolean | undefined;
                order?: number | undefined;
            };
            output: {
                code: string;
                locale: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                order: number;
                isDefault: boolean;
                flag: string | null;
                isRtl: boolean;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                locale?: string | undefined;
                code?: string | undefined;
                flag?: string | undefined;
                isRtl?: boolean | undefined;
                order?: number | undefined;
                isActive?: boolean | undefined;
            };
            output: {
                code: string;
                locale: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                order: number;
                isDefault: boolean;
                flag: string | null;
                isRtl: boolean;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        setDefault: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                locale: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                order: number;
                isDefault: boolean;
                flag: string | null;
                isRtl: boolean;
            };
            meta: object;
        }>;
        getRelatedItems: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                referenceId: number;
                referenceType: string;
            };
            output: {
                id: number;
                referenceId: number;
                referenceType: string;
                language: {
                    code: string;
                    locale: string;
                    id: number;
                    name: string;
                    flag: string | null;
                };
                origin: string;
                langCode: string;
            }[];
            meta: object;
        }>;
        saveContentLanguage: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                referenceId: number;
                referenceType: string;
                langCode: string;
                refFrom?: number | undefined;
            };
            output: {
                id: number;
                referenceId: number;
                referenceType: string;
                origin: string;
                langCode: string;
            };
            meta: object;
        }>;
        worldLanguages: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: readonly [{
                readonly name: "Afrikaans";
                readonly locale: "af";
                readonly code: "af";
                readonly flag: "za";
            }, {
                readonly name: "አማርኛ";
                readonly locale: "am";
                readonly code: "am";
                readonly flag: "et";
            }, {
                readonly name: "العربية";
                readonly locale: "ar";
                readonly code: "ar";
                readonly flag: "sa";
                readonly isRtl: true;
            }, {
                readonly name: "العربية المغربية";
                readonly locale: "ary";
                readonly code: "ary";
                readonly flag: "ma";
                readonly isRtl: true;
            }, {
                readonly name: "Azərbaycan";
                readonly locale: "az";
                readonly code: "az";
                readonly flag: "az";
            }, {
                readonly name: "گؤنئی آذربایجان";
                readonly locale: "azb";
                readonly code: "azb";
                readonly flag: "az";
                readonly isRtl: true;
            }, {
                readonly name: "Беларуская мова";
                readonly locale: "bel";
                readonly code: "bel";
                readonly flag: "by";
            }, {
                readonly name: "български";
                readonly locale: "bg_BG";
                readonly code: "bg_BG";
                readonly flag: "bg";
            }, {
                readonly name: "বাংলা";
                readonly locale: "bn_BD";
                readonly code: "bn_BD";
                readonly flag: "bd";
            }, {
                readonly name: "བོད་སྐད";
                readonly locale: "bo";
                readonly code: "bo";
                readonly flag: "cn";
            }, {
                readonly name: "Bosanski";
                readonly locale: "bs_BA";
                readonly code: "bs_BA";
                readonly flag: "ba";
            }, {
                readonly name: "Catalan";
                readonly locale: "ca";
                readonly code: "ca_ES";
                readonly flag: "es";
            }, {
                readonly name: "Cebuano";
                readonly locale: "ceb";
                readonly code: "ceb";
                readonly flag: "ph";
            }, {
                readonly name: "Čeština";
                readonly locale: "cs_CZ";
                readonly code: "cs_CZ";
                readonly flag: "cz";
            }, {
                readonly name: "Cymraeg";
                readonly locale: "cy";
                readonly code: "cy";
                readonly flag: "gb";
            }, {
                readonly name: "Dansk";
                readonly locale: "da_DK";
                readonly code: "da_DK";
                readonly flag: "dk";
            }, {
                readonly name: "Deutsch (Schweiz)";
                readonly locale: "de_CH";
                readonly code: "de_CH";
                readonly flag: "ch";
            }, {
                readonly name: "Deutsch (Schweiz, Informell)";
                readonly locale: "de_CH_informal";
                readonly code: "de_CH_informal";
                readonly flag: "ch";
            }, {
                readonly name: "Deutsch";
                readonly locale: "de_DE";
                readonly code: "de_DE";
                readonly flag: "de";
            }, {
                readonly name: "Deutsch (Formal)";
                readonly locale: "de_DE_formal";
                readonly code: "de_DE_formal";
                readonly flag: "de";
            }, {
                readonly name: "Ελληνικά";
                readonly locale: "el";
                readonly code: "el";
                readonly flag: "gr";
            }, {
                readonly name: "English";
                readonly locale: "en";
                readonly code: "en";
                readonly flag: "us";
            }, {
                readonly name: "English (US)";
                readonly locale: "en_US";
                readonly code: "en_US";
                readonly flag: "us";
            }, {
                readonly name: "English (Australia)";
                readonly locale: "en_AU";
                readonly code: "en_AU";
                readonly flag: "au";
            }, {
                readonly name: "English (Canada)";
                readonly locale: "en_CA";
                readonly code: "en_CA";
                readonly flag: "ca";
            }, {
                readonly name: "English (UK)";
                readonly locale: "en_GB";
                readonly code: "en_GB";
                readonly flag: "gb";
            }, {
                readonly name: "English (New Zealand)";
                readonly locale: "en_NZ";
                readonly code: "en_NZ";
                readonly flag: "nz";
            }, {
                readonly name: "English (South Africa)";
                readonly locale: "en_ZA";
                readonly code: "en_ZA";
                readonly flag: "za";
            }, {
                readonly name: "Español (Argentina)";
                readonly locale: "es_AR";
                readonly code: "es_AR";
                readonly flag: "ar";
            }, {
                readonly name: "Español (Chile)";
                readonly locale: "es_CL";
                readonly code: "es_CL";
                readonly flag: "cl";
            }, {
                readonly name: "Español (Colombia)";
                readonly locale: "es_CO";
                readonly code: "es_CO";
                readonly flag: "co";
            }, {
                readonly name: "Español";
                readonly locale: "es_ES";
                readonly code: "es_ES";
                readonly flag: "es";
            }, {
                readonly name: "Español (Guatemala)";
                readonly locale: "es_GT";
                readonly code: "es_GT";
                readonly flag: "gt";
            }, {
                readonly name: "Español (México)";
                readonly locale: "es_MX";
                readonly code: "es_MX";
                readonly flag: "mx";
            }, {
                readonly name: "Español (Perú)";
                readonly locale: "es_PE";
                readonly code: "es_PE";
                readonly flag: "pe";
            }, {
                readonly name: "Español (Venezuela)";
                readonly locale: "es_VE";
                readonly code: "es_VE";
                readonly flag: "ve";
            }, {
                readonly name: "Eesti";
                readonly locale: "et";
                readonly code: "et";
                readonly flag: "ee";
            }, {
                readonly name: "Euskara";
                readonly locale: "eu";
                readonly code: "eu";
                readonly flag: "es";
            }, {
                readonly name: "فارسی (افغانستان)";
                readonly locale: "fa_AF";
                readonly code: "fa_AF";
                readonly flag: "af";
                readonly isRtl: true;
            }, {
                readonly name: "فارسی";
                readonly locale: "fa_IR";
                readonly code: "fa_IR";
                readonly flag: "ir";
                readonly isRtl: true;
            }, {
                readonly name: "Suomi";
                readonly locale: "fi";
                readonly code: "fi";
                readonly flag: "fi";
            }, {
                readonly name: "Føroyskt";
                readonly locale: "fo";
                readonly code: "fo";
                readonly flag: "fo";
            }, {
                readonly name: "Français";
                readonly locale: "fr";
                readonly code: "fr";
                readonly flag: "fr";
            }, {
                readonly name: "Français (Belgique)";
                readonly locale: "fr_BE";
                readonly code: "fr_BE";
                readonly flag: "be";
            }, {
                readonly name: "Français (France)";
                readonly locale: "fr_FR";
                readonly code: "fr_FR";
                readonly flag: "fr";
            }, {
                readonly name: "Frysk";
                readonly locale: "fy";
                readonly code: "fy";
                readonly flag: "nl";
            }, {
                readonly name: "Gàidhlig";
                readonly locale: "gd";
                readonly code: "gd";
                readonly flag: "gb";
            }, {
                readonly name: "Galego";
                readonly locale: "gl_ES";
                readonly code: "gl_ES";
                readonly flag: "es";
            }, {
                readonly name: "ગુજરાતી";
                readonly locale: "gu";
                readonly code: "gu";
                readonly flag: "in";
            }, {
                readonly name: "هزاره گی";
                readonly locale: "haz";
                readonly code: "haz";
                readonly flag: "af";
                readonly isRtl: true;
            }, {
                readonly name: "עברית";
                readonly locale: "he_IL";
                readonly code: "he_IL";
                readonly flag: "il";
                readonly isRtl: true;
            }, {
                readonly name: "हिन्दी";
                readonly locale: "hi_IN";
                readonly code: "hi_IN";
                readonly flag: "in";
            }, {
                readonly name: "Hrvatski";
                readonly locale: "hr";
                readonly code: "hr";
                readonly flag: "hr";
            }, {
                readonly name: "Kreyòl Ayisyen";
                readonly locale: "ht";
                readonly code: "ht";
                readonly flag: "ht";
            }, {
                readonly name: "Magyar";
                readonly locale: "hu_HU";
                readonly code: "hu_HU";
                readonly flag: "hu";
            }, {
                readonly name: "Հայերեն";
                readonly locale: "hy";
                readonly code: "hy";
                readonly flag: "am";
            }, {
                readonly name: "Bahasa Indonesia";
                readonly locale: "id";
                readonly code: "id";
                readonly flag: "id";
            }, {
                readonly name: "Bahasa Indonesia";
                readonly locale: "id_ID";
                readonly code: "id_ID";
                readonly flag: "id";
            }, {
                readonly name: "Íslenska";
                readonly locale: "is_IS";
                readonly code: "is_IS";
                readonly flag: "is";
            }, {
                readonly name: "Italiano";
                readonly locale: "it_IT";
                readonly code: "it_IT";
                readonly flag: "it";
            }, {
                readonly name: "日本語";
                readonly locale: "ja";
                readonly code: "ja";
                readonly flag: "jp";
            }, {
                readonly name: "Basa Jawa";
                readonly locale: "jv_ID";
                readonly code: "jv_ID";
                readonly flag: "id";
            }, {
                readonly name: "ქართული";
                readonly locale: "ka_GE";
                readonly code: "ka_GE";
                readonly flag: "ge";
            }, {
                readonly name: "Қазақ тілі";
                readonly locale: "kk";
                readonly code: "kk";
                readonly flag: "kz";
            }, {
                readonly name: "Cambodia";
                readonly locale: "kh";
                readonly code: "kh";
                readonly flag: "kh";
            }, {
                readonly name: "한국어";
                readonly locale: "ko_KR";
                readonly code: "ko_KR";
                readonly flag: "kr";
            }, {
                readonly name: "Кыргызча";
                readonly locale: "ky_KG";
                readonly code: "ky_KG";
                readonly flag: "kg";
            }, {
                readonly name: "کوردی";
                readonly locale: "ckb";
                readonly code: "ckb";
                readonly flag: "iq";
                readonly isRtl: true;
            }, {
                readonly name: "ພາສາລາວ";
                readonly locale: "lo";
                readonly code: "lo";
                readonly flag: "la";
            }, {
                readonly name: "Lietuviškai";
                readonly locale: "lt_LT";
                readonly code: "lt_LT";
                readonly flag: "lt";
            }, {
                readonly name: "Latviešu valoda";
                readonly locale: "lv";
                readonly code: "lv";
                readonly flag: "lv";
            }, {
                readonly name: "македонски јазик";
                readonly locale: "mk_MK";
                readonly code: "mk_MK";
                readonly flag: "mk";
            }, {
                readonly name: "Монгол хэл";
                readonly locale: "mn";
                readonly code: "mn";
                readonly flag: "mn";
            }, {
                readonly name: "मराठी";
                readonly locale: "mr";
                readonly code: "mr";
                readonly flag: "in";
            }, {
                readonly name: "Bahasa Melayu";
                readonly locale: "ms_MY";
                readonly code: "ms_MY";
                readonly flag: "my";
            }, {
                readonly name: "ဗမာစာ";
                readonly locale: "my_MM";
                readonly code: "my_MM";
                readonly flag: "mm";
            }, {
                readonly name: "Maldives";
                readonly locale: "mv";
                readonly code: "mv";
                readonly flag: "mv";
                readonly isRtl: true;
            }, {
                readonly name: "Norsk Bokmål";
                readonly locale: "nb_NO";
                readonly code: "nb_NO";
                readonly flag: "no";
            }, {
                readonly name: "नेपाली";
                readonly locale: "ne_NP";
                readonly code: "ne_NP";
                readonly flag: "np";
            }, {
                readonly name: "Nederlands";
                readonly locale: "nl_NL";
                readonly code: "nl_NL";
                readonly flag: "nl";
            }, {
                readonly name: "Nederlands (Formal)";
                readonly locale: "nl_NL_formal";
                readonly code: "nl_NL_formal";
                readonly flag: "nl";
            }, {
                readonly name: "Norsk Nynorsk";
                readonly locale: "nn_NO";
                readonly code: "nn_NO";
                readonly flag: "no";
            }, {
                readonly name: "Polski";
                readonly locale: "pl_PL";
                readonly code: "pl_PL";
                readonly flag: "pl";
            }, {
                readonly name: "پښتو";
                readonly locale: "ps";
                readonly code: "ps";
                readonly flag: "af";
                readonly isRtl: true;
            }, {
                readonly name: "Português (Brasil)";
                readonly locale: "pt_BR";
                readonly code: "pt_BR";
                readonly flag: "br";
            }, {
                readonly name: "Português";
                readonly locale: "pt_PT";
                readonly code: "pt_PT";
                readonly flag: "pt";
            }, {
                readonly name: "Română";
                readonly locale: "ro_RO";
                readonly code: "ro_RO";
                readonly flag: "ro";
            }, {
                readonly name: "Русский";
                readonly locale: "ru_RU";
                readonly code: "ru_RU";
                readonly flag: "ru";
            }, {
                readonly name: "සිංහල";
                readonly locale: "si_LK";
                readonly code: "si_LK";
                readonly flag: "lk";
            }, {
                readonly name: "Slovenčina";
                readonly locale: "sk_SK";
                readonly code: "sk_SK";
                readonly flag: "sk";
            }, {
                readonly name: "Slovenščina";
                readonly locale: "sl_SI";
                readonly code: "sl_SI";
                readonly flag: "si";
            }, {
                readonly name: "Af-Soomaali";
                readonly locale: "so_SO";
                readonly code: "so_SO";
                readonly flag: "so";
            }, {
                readonly name: "Shqip";
                readonly locale: "sq";
                readonly code: "sq";
                readonly flag: "al";
            }, {
                readonly name: "Shqip (Shqipëri)";
                readonly locale: "sq_AL";
                readonly code: "sq_AL";
                readonly flag: "al";
            }, {
                readonly name: "Српски језик";
                readonly locale: "sr_RS";
                readonly code: "sr_RS";
                readonly flag: "rs";
            }, {
                readonly name: "Basa Sunda";
                readonly locale: "su_ID";
                readonly code: "su_ID";
                readonly flag: "id";
            }, {
                readonly name: "Svenska";
                readonly locale: "sv_SE";
                readonly code: "sv_SE";
                readonly flag: "se";
            }, {
                readonly name: "Ślōnskŏ gŏdka";
                readonly locale: "szl";
                readonly code: "szl";
                readonly flag: "pl";
            }, {
                readonly name: "Swahili";
                readonly locale: "sw";
                readonly code: "sw";
                readonly flag: "ke";
            }, {
                readonly name: "தமிழ்";
                readonly locale: "ta_LK";
                readonly code: "ta_LK";
                readonly flag: "lk";
            }, {
                readonly name: "ไทย";
                readonly locale: "th";
                readonly code: "th";
                readonly flag: "th";
            }, {
                readonly name: "ትግርኛ";
                readonly locale: "ti";
                readonly code: "ti";
                readonly flag: "er";
            }, {
                readonly name: "Tagalog";
                readonly locale: "tl";
                readonly code: "tl";
                readonly flag: "ph";
            }, {
                readonly name: "Türkçe";
                readonly locale: "tr";
                readonly code: "tr";
                readonly flag: "tr";
            }, {
                readonly name: "Türkçe (Türkiye)";
                readonly locale: "tr_TR";
                readonly code: "tr_TR";
                readonly flag: "tr";
            }, {
                readonly name: "Uyƣurqə";
                readonly locale: "ug_CN";
                readonly code: "ug_CN";
                readonly flag: "cn";
            }, {
                readonly name: "Українська";
                readonly locale: "uk";
                readonly code: "uk";
                readonly flag: "ua";
            }, {
                readonly name: "اردو";
                readonly locale: "ur";
                readonly code: "ur";
                readonly flag: "pk";
                readonly isRtl: true;
            }, {
                readonly name: "Oʻzbek";
                readonly locale: "uz_UZ";
                readonly code: "uz_UZ";
                readonly flag: "uz";
            }, {
                readonly name: "Tiếng Việt";
                readonly locale: "vi";
                readonly code: "vi";
                readonly flag: "vn";
            }, {
                readonly name: "中文 (中国)";
                readonly locale: "zh_CN";
                readonly code: "zh_CN";
                readonly flag: "cn";
            }, {
                readonly name: "中文 (香港)";
                readonly locale: "zh_HK";
                readonly code: "zh_HK";
                readonly flag: "hk";
            }, {
                readonly name: "中文 (台灣)";
                readonly locale: "zh_TW";
                readonly code: "zh_TW";
                readonly flag: "tw";
            }, {
                readonly name: "Tajik";
                readonly locale: "tg";
                readonly code: "tg";
                readonly flag: "tj";
            }];
            meta: object;
        }>;
    }>>;
    auditLogs: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                sortBy?: "id" | "createdAt" | undefined;
                sortDir?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    user: {
                        email: string;
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    } | null;
                    id: number;
                    createdAt: Date;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    action: string;
                    ipAddress: string | null;
                    module: string;
                    entityId: string | null;
                    entityType: string | null;
                    oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                user: {
                    email: string;
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                } | null;
                userAgent: string | null;
                id: number;
                createdAt: Date;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                action: string;
                ipAddress: string | null;
                module: string;
                entityId: string | null;
                entityType: string | null;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            } | null;
            meta: object;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                total: number;
                todayCount: number;
                byModule: {
                    module: string;
                    count: number;
                }[];
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                userAgent: string | null;
                userId: string | null;
                id: number;
                createdAt: Date;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                action: string;
                ipAddress: string | null;
                module: string;
                entityId: string | null;
                entityType: string | null;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            };
            meta: object;
        }>;
        purgeAll: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        purge: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                olderThanDays: number;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
    }>>;
    system: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        requestLogs: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                filters?: {
                    fieldKey: string;
                    operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                    value: string;
                    value2?: string | undefined;
                }[] | undefined;
                search?: string | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                sortBy?: "duration" | "id" | "createdAt" | "statusCode" | undefined;
                sortDir?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    url: string;
                    user: {
                        email: string;
                        id: string;
                        name: string | null;
                    } | null;
                    userAgent: string | null;
                    duration: number | null;
                    id: number;
                    createdAt: Date;
                    ipAddress: string | null;
                    statusCode: number | null;
                    method: string;
                    referer: string | null;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        requestStats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                total: number;
                todayCount: number;
                errorCount: number;
                byMethod: {
                    method: string;
                    count: number;
                }[];
            };
            meta: object;
        }>;
        purgeRequestLogs: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                olderThanDays: number;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        deleteRequestLog: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                url: string;
                userAgent: string | null;
                userId: string | null;
                duration: number | null;
                id: number;
                createdAt: Date;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                ipAddress: string | null;
                statusCode: number | null;
                method: string;
                referer: string | null;
            };
            meta: object;
        }>;
        systemInfo: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                nodeVersion: string;
                platform: NodeJS.Platform;
                arch: NodeJS.Architecture;
                env: string;
                timezone: string;
                hostname: string;
                processUptime: number;
                systemUptime: number;
                memoryUsage: NodeJS.MemoryUsage;
                system: {
                    totalMem: number;
                    freeMem: number;
                    cpuModel: string;
                    cpuCores: number;
                    loadAvg: [number, number, number];
                };
                disk: {
                    total: number;
                    used: number;
                    free: number;
                    mountpoint: string;
                } | null;
                osRelease: string | null;
                database: {
                    ok: boolean;
                    latencyMs: number | null;
                };
                redis: {
                    ok: boolean;
                    latencyMs: number | null;
                    usedMemory: string | null;
                };
            };
            meta: object;
        }>;
        dashboardStats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                content: {
                    totalPosts: number;
                    publishedPosts: number;
                    draftPosts: number;
                    scheduledPosts: number;
                    totalPages: number;
                    totalCategories: number;
                    totalTags: number;
                };
                engagement: {
                    totalComments: number;
                    pendingComments: number;
                    totalContacts: number;
                    newContacts: number;
                };
                people: {
                    totalCustomers: number;
                };
                media: {
                    totalMedia: number;
                    totalSize: number;
                };
                recentPosts: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    slug: string;
                    title: string;
                }[];
                popularPosts: {
                    id: number;
                    slug: string;
                    title: string;
                    views: number;
                }[];
            };
            meta: object;
        }>;
        publishingTrends: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                days?: number | undefined;
            } | undefined;
            output: {
                date: string;
                count: number;
            }[];
            meta: object;
        }>;
        popularContent: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                limit?: number | undefined;
            } | undefined;
            output: {
                id: number;
                slug: string;
                title: string;
                publishedAt: Date | null;
                views: number;
            }[];
            meta: object;
        }>;
        statusBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                count: number;
            }[];
            meta: object;
        }>;
        authorStats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                limit?: number | undefined;
            } | undefined;
            output: {
                authorId: string;
                name: string;
                email: string;
                postCount: number;
                totalViews: number;
            }[];
            meta: object;
        }>;
        categoryStats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: number;
                name: string;
                slug: string;
                postCount: number;
            }[];
            meta: object;
        }>;
        engagementOverview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                days?: number | undefined;
            } | undefined;
            output: {
                period: string;
                newComments: number;
                newContacts: number;
                newCustomers: number;
            };
            meta: object;
        }>;
        workflowTransitions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                currentStatus: string;
            };
            output: {
                currentStatus: string;
                availableTransitions: string[];
            };
            meta: object;
        }>;
        workflowDescription: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: Record<string, string>;
            meta: object;
        }>;
        cacheStats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                redis: {
                    memoryUsed: string;
                    version: string;
                    uptimeSeconds: number;
                    connectedClients: number;
                    hitRate: number | null;
                    hits: number;
                    misses: number;
                };
                namespaces: {
                    cache: number;
                    rateLimit: number;
                    byNamespace: Record<string, number>;
                };
            };
            meta: object;
        }>;
        clearCache: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
            };
            output: {
                namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
                cleared: number;
            };
            meta: object;
        }>;
        getQueueDashboardUrl: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                url: string;
            };
            meta: object;
        }>;
        listLogFiles: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                filename: string;
                size: number;
                mtime: Date;
            }[];
            meta: object;
        }>;
        getProcessStatus: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: unknown;
            meta: object;
        }>;
        executeProcessAction: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                action: "restart" | "stop" | "reload";
                target: string;
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: {
                success: boolean;
                message: string;
            };
            meta: object;
        }>;
        pingServices: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: unknown;
            meta: object;
        }>;
        queryRedis: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                action: "get" | "scan" | "del";
                sudoPassword: string;
                maintenanceKey: string;
                pattern?: string | undefined;
                key?: string | undefined;
            };
            output: unknown;
            meta: object;
        }>;
        executeDbCommand: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                action: "migrate-deploy" | "migrate-reset" | "migrate-status" | "db-push" | "validate" | "generate" | "seed";
                sudoPassword: string;
                maintenanceKey: string;
                seedOnly?: string | undefined;
            };
            output: {
                success: boolean;
                output: string;
            };
            meta: object;
        }>;
        executeLogCommand: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                sudoPassword: string;
                maintenanceKey: string;
                filename?: string | undefined;
                lines?: number | undefined;
                level?: string | undefined;
                search?: string | undefined;
            };
            output: {
                success: boolean;
                output: string;
            };
            meta: object;
        }>;
        getLogLevel: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                level: string;
            };
            meta: object;
        }>;
        updateLogLevel: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                level: string;
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: {
                success: boolean;
                oldLevel: string;
                newLevel: string;
            };
            meta: object;
        }>;
        getDatabaseStats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: {
                databaseSizeBytes: number;
                tables: Array<{
                    tableName: string;
                    rowCount: number;
                    totalSizeBytes: number;
                    tableSizeBytes: number;
                    indexSizeBytes: number;
                }>;
            };
            meta: object;
        }>;
        getRedisStats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sudoPassword: string;
                maintenanceKey: string;
            };
            output: {
                memory: Record<string, string>;
                stats: Record<string, string>;
                keysSummary: Array<{
                    pattern: string;
                    count: number;
                }>;
            };
            meta: object;
        }>;
    }>>;
    customers: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                groupId?: number | undefined;
                rateCardId?: number | undefined;
            };
            output: {
                items: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    id: string;
                    createdAt: Date;
                    name: string | null;
                    customerCode: string | null;
                    username: string;
                    phone: string | null;
                    avatarUrl: string | null;
                    emailVerified: Date | null;
                    lastLoginAt: Date | null;
                    group: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                    groupId: number | null;
                    _count: {
                        socialAccounts: number;
                        activityLogs: number;
                    };
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                description: string | null;
                id: string;
                createdAt: Date;
                name: string | null;
                customerCode: string | null;
                username: string;
                usernameChangeCount: number;
                usernameChangedAt: Date | null;
                phone: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                lastLoginAt: Date | null;
                dob: Date | null;
                gender: string | null;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                updatedAt: Date;
                group: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
                socialAccounts: {
                    email: string | null;
                    id: number;
                    createdAt: Date;
                    name: string | null;
                    provider: string;
                }[];
                activityLogs: {
                    id: number;
                    createdAt: Date;
                    action: string;
                    ipAddress: string | null;
                }[];
                groupId: number | null;
            } | null;
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                username?: string | undefined;
                name?: string | undefined;
                phone?: string | undefined;
                dob?: string | undefined;
                gender?: "male" | "female" | "other" | undefined;
                description?: string | undefined;
                password?: string | undefined;
                groupId?: number | null | undefined;
            };
            output: {
                email: string;
                id: string;
                name: string | null;
                customerCode: string | null;
                username: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
                username?: string | undefined;
                name?: string | undefined;
                phone?: string | undefined;
                avatarUrl?: string | undefined;
                dob?: string | null | undefined;
                gender?: "male" | "female" | "other" | null | undefined;
                description?: string | null | undefined;
                status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
                groupId?: number | null | undefined;
            };
            output: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                id: string;
                name: string | null;
                username: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
            };
            output: {
                id: string;
            };
            meta: object;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                total: number;
                active: number;
                inactive: number;
                banned: number;
            };
            meta: object;
        }>;
        checkUsername: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                username: string;
            };
            output: {
                available: boolean;
            };
            meta: object;
        }>;
        verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
            };
            output: {
                id: string;
                emailVerified: Date | null;
            };
            meta: object;
        }>;
        setPassword: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
                password: string;
            };
            output: {
                id: string;
            };
            meta: object;
        }>;
        auditHistory: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: {
                items: {
                    user: {
                        email: string;
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    } | null;
                    id: number;
                    createdAt: Date;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    action: string;
                    ipAddress: string | null;
                    module: string;
                    entityId: string | null;
                    entityType: string | null;
                    oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        verificationCodesList: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    code: string;
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
                    id: number;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    attempts: number;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
    }>>;
    customerGroups: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: string | undefined;
                sortDir?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    code: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    _count: {
                        customers: number;
                    };
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        listAll: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                code: string;
                description: string | null;
                id: number;
                name: string;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    customers: number;
                    rateCards: number;
                };
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                code: string;
                name: string;
                description?: string | null | undefined;
            };
            output: {
                code: string;
                description: string | null;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                code?: string | undefined;
                name?: string | undefined;
                description?: string | null | undefined;
            };
            output: {
                code: string;
                description: string | null;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        getMembers: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                groupId: number;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    email: string;
                    id: string;
                    createdAt: Date;
                    name: string | null;
                    username: string;
                    phone: string | null;
                    group: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                    groupId: number | null;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        getAvailableCustomers: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                groupId: number;
                search?: string | undefined;
                limit?: number | undefined;
            };
            output: {
                email: string;
                id: string;
                name: string | null;
                username: string;
                phone: string | null;
                group: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
                groupId: number | null;
            }[];
            meta: object;
        }>;
        assignMembers: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                groupId: number;
                customerIds: string[];
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        removeMembers: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                groupId: number;
                customerIds: string[];
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
    }>>;
    tools: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        export: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                module: "customers" | "categories" | "tags" | "posts" | "pages" | "settings" | "all";
            };
            output: {
                exportedAt: string;
                version: string;
                data: {
                    posts: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        slug: string;
                        isFeatured: boolean;
                        title: string;
                        views: number;
                        content: string | null;
                        excerpt: string | null;
                        allowComments: boolean;
                        formatType: string | null;
                        author: {
                            email: string;
                            id: string;
                            name: string | null;
                        };
                        categories: {
                            category: {
                                id: number;
                                name: string;
                            };
                        }[];
                        tags: {
                            tag: {
                                id: number;
                                name: string;
                            };
                        }[];
                    }[];
                    categories: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        description: string | null;
                        id: number;
                        createdAt: Date;
                        name: string;
                        parentId: number | null;
                        order: number;
                        slug: string;
                    }[];
                    tags: {
                        id: number;
                        createdAt: Date;
                        name: string;
                        slug: string;
                    }[];
                    pages: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        order: number;
                        slug: string;
                        title: string;
                        content: string | null;
                        excerpt: string | null;
                        template: string | null;
                    }[];
                    customers: {
                        email: string;
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                        id: string;
                        createdAt: Date;
                        name: string | null;
                        username: string;
                        phone: string | null;
                        emailVerified: Date | null;
                    }[];
                    settings: {
                        key: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        value: string | null;
                    }[];
                };
            } | {
                module: string;
                data: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    views: number;
                    content: string | null;
                    excerpt: string | null;
                    allowComments: boolean;
                    formatType: string | null;
                    author: {
                        email: string;
                        id: string;
                        name: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                        };
                    }[];
                    tags: {
                        tag: {
                            id: number;
                            name: string;
                        };
                    }[];
                }[];
            } | {
                module: string;
                data: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    slug: string;
                }[];
            } | {
                module: string;
                data: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    order: number;
                    slug: string;
                    title: string;
                    content: string | null;
                    excerpt: string | null;
                    template: string | null;
                }[];
            } | {
                module: string;
                data: {
                    email: string;
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                    id: string;
                    createdAt: Date;
                    name: string | null;
                    username: string;
                    phone: string | null;
                    emailVerified: Date | null;
                }[];
            } | {
                module: string;
                data: {
                    key: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    value: string | null;
                }[];
            };
            meta: object;
        }>;
        import: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                module: "categories" | "tags" | "posts" | "pages" | "settings";
                data: Record<string, unknown>[];
            };
            output: import("@ecom/features/tools/services/ImportService").ImportResult;
            meta: object;
        }>;
        fullBackup: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/tools/services/ImportExportService").ExportData;
            meta: object;
        }>;
        fullRestore: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                version: string;
                exportedAt: string;
                posts: Record<string, unknown>[];
                pages: Record<string, unknown>[];
                categories: Record<string, unknown>[];
                tags: Record<string, unknown>[];
                redirects: Record<string, unknown>[];
            };
            output: {
                categories: number;
                tags: number;
                posts: number;
                pages: number;
                redirects: number;
            };
            meta: object;
        }>;
        checkDuplicates: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                title: string;
                type: "page" | "post";
                slug?: string | undefined;
                excludeId?: number | undefined;
            };
            output: {
                titleDuplicates: string[];
                slugDuplicate: boolean;
            };
            meta: object;
        }>;
        fullTextSearch: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                query: string;
                types?: ("page" | "post")[] | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                results: import("@ecom/features/search/services/FullTextSearchService").SearchResult[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        bulk: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            deletePosts: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            statusPosts: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            categoryAssign: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    postIds: number[];
                    categoryIds: number[];
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            deleteCategories: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            deleteTags: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            deletePages: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: number[];
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
                meta: object;
            }>;
            statusCustomers: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    ids: string[];
                    status: "ACTIVE" | "INACTIVE" | "BANNED";
                };
                output: import("@ecom/features/tools/services/BulkActionService").BulkResult<string>;
                meta: object;
            }>;
        }>>;
    }>>;
    seo: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag";
                entityId: number;
            };
            output: {
                id: number;
                seoTitle: string | null;
                seoDescription: string | null;
                seoImage: string | null;
                indexMode: string | null;
            } | null;
            meta: object;
        }>;
        save: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag";
                entityId: number;
                data: {
                    seoTitle?: string | undefined;
                    seoDescription?: string | undefined;
                    seoImage?: string | undefined;
                    indexMode?: "index" | "noindex" | undefined;
                };
            };
            output: {
                id: number;
                seoTitle: string | null;
                seoDescription: string | null;
                seoImage: string | null;
                indexMode: string | null;
            } | null;
            meta: object;
        }>;
    }>>;
    revisions: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                referenceId: number;
                referenceType: "page" | "post";
            };
            output: {
                id: number;
                createdAt: Date;
                title: string;
                author: {
                    id: string;
                    name: string | null;
                };
                note: string | null;
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
                referenceId: number;
                referenceType: string;
                title: string;
                content: string | null;
                author: {
                    id: string;
                    name: string | null;
                };
                note: string | null;
            };
            meta: object;
        }>;
    }>>;
    translations: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        languages: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                code: string;
                id: number;
                name: string;
                order: number;
                isDefault: boolean;
                flag: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityId: number;
                langCode: string;
            };
            output: {
                id: number;
                slug: string | null;
                title: string;
                content: string | null;
                excerpt: string | null;
                langCode: string;
            } | {
                description: string | null;
                id: number;
                name: string;
                langCode: string;
            } | {
                id: number;
                label: string;
                langCode: string;
            } | null;
            meta: object;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityId: number;
            };
            output: {
                id: number;
                slug: string | null;
                title: string;
                content: string | null;
                excerpt: string | null;
                langCode: string;
            }[] | {
                description: string | null;
                id: number;
                name: string;
                langCode: string;
            }[] | {
                id: number;
                label: string;
                langCode: string;
            }[];
            meta: object;
        }>;
        save: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityId: number;
                langCode: string;
                data: Record<string, string | undefined>;
            };
            output: {
                id: number;
                slug: string | null;
                title: string;
                content: string | null;
                excerpt: string | null;
                langCode: string;
            } | {
                description: string | null;
                id: number;
                name: string;
                langCode: string;
            } | {
                id: number;
                label: string;
                langCode: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityId: number;
                langCode: string;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        translationStatus: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityId: number;
            };
            output: {
                translations: {
                    langCode: string;
                }[];
                originLangCode: string;
            };
            meta: object;
        }>;
        batchTranslationStatus: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post" | "category" | "tag" | "menuItem";
                entityIds: number[];
            };
            output: Record<number, string[]>;
            meta: object;
        }>;
    }>>;
    webhooks: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                url: string;
                id: number;
                ownerId: string | null;
                ownerType: string | null;
                createdAt: Date;
                name: string;
                _count: {
                    logs: number;
                };
                isActive: boolean;
                secret: string | null;
                oldSecret: string | null;
                secretUpdatedAt: Date | null;
                events: string[];
                retries: number;
                timeout: number;
                failureCount: number;
                apiVersion: string;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                url: string;
                id: number;
                ownerId: string | null;
                ownerType: string | null;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                secret: string | null;
                oldSecret: string | null;
                secretUpdatedAt: Date | null;
                events: string[];
                retries: number;
                timeout: number;
                failureCount: number;
                apiVersion: string;
            };
            meta: object;
        }>;
        availableEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: ("ping" | "order.created" | "order.status_updated" | "order.checkpoint_added" | "member.registered" | "post.created" | "post.updated" | "post.published" | "post.deleted" | "page.created" | "page.updated" | "page.published" | "page.deleted")[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                url: string;
                events: string[];
                secret?: string | undefined;
                retries?: number | undefined;
                timeout?: number | undefined;
            };
            output: {
                id: number;
                name: string;
                secret: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                url?: string | undefined;
                secret?: string | undefined;
                events?: string[] | undefined;
                isActive?: boolean | undefined;
                retries?: number | undefined;
                timeout?: number | undefined;
            };
            output: {
                id: number;
                name: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                url: string;
                id: number;
                ownerId: string | null;
                ownerType: string | null;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                secret: string | null;
                oldSecret: string | null;
                secretUpdatedAt: Date | null;
                events: string[];
                retries: number;
                timeout: number;
                failureCount: number;
                apiVersion: string;
            };
            meta: object;
        }>;
        logs: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                webhookId: number;
            };
            output: {
                error: string | null;
                id: number;
                createdAt: Date;
                success: boolean;
                event: string;
                payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                response: string | null;
                statusCode: number | null;
                attempts: number;
            }[];
            meta: object;
        }>;
    }>>;
    comments: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                postId?: number | undefined;
                pageId?: number | undefined;
                status?: "approved" | "pending" | "spam" | "trash" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    status: string;
                    id: number;
                    createdAt: Date;
                    _count: {
                        replies: number;
                    };
                    customerId: string | null;
                    ipAddress: string | null;
                    parentId: number | null;
                    content: string;
                    postId: number | null;
                    pageId: number | null;
                    authorName: string | null;
                    authorEmail: string | null;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
                createdAt: Date;
                customerId: string | null;
                ipAddress: string | null;
                parentId: number | null;
                content: string;
                postId: number | null;
                pageId: number | null;
                authorName: string | null;
                authorEmail: string | null;
                replies: {
                    status: string;
                    id: number;
                    createdAt: Date;
                    content: string;
                    authorName: string | null;
                }[];
            };
            meta: object;
        }>;
        statusCounts: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                [k: string]: number;
            };
            meta: object;
        }>;
        approve: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
            };
            meta: object;
        }>;
        markSpam: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
            };
            meta: object;
        }>;
        trash: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                customerId: string | null;
                ipAddress: string | null;
                parentId: number | null;
                content: string;
                postId: number | null;
                pageId: number | null;
                authorName: string | null;
                authorEmail: string | null;
            };
            meta: object;
        }>;
    }>>;
    contacts: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                formSlug?: string | undefined;
                status?: "new" | "read" | "replied" | "archived" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    message: string;
                    email: string;
                    status: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    phone: string | null;
                    formSlug: string;
                    subject: string | null;
                    assigneeId: string | null;
                    repliedAt: Date | null;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                message: string;
                email: string;
                status: string;
                id: number;
                createdAt: Date;
                name: string;
                phone: string | null;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                updatedAt: Date;
                ipAddress: string | null;
                formSlug: string;
                subject: string | null;
                assigneeId: string | null;
                repliedAt: Date | null;
                assignee: {
                    id: string;
                    name: string | null;
                } | null;
            };
            meta: object;
        }>;
        statusCounts: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                [k: string]: number;
            };
            meta: object;
        }>;
        updateStatus: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                status: "new" | "read" | "replied" | "archived";
            };
            output: {
                status: string;
                id: number;
            };
            meta: object;
        }>;
        assignTo: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                assigneeId: string;
            };
            output: {
                id: number;
                assigneeId: string | null;
            };
            meta: object;
        }>;
        markReplied: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                status: string;
                id: number;
                repliedAt: Date | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                message: string;
                email: string;
                status: string;
                id: number;
                createdAt: Date;
                name: string;
                phone: string | null;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                updatedAt: Date;
                ipAddress: string | null;
                formSlug: string;
                subject: string | null;
                assigneeId: string | null;
                repliedAt: Date | null;
            };
            meta: object;
        }>;
    }>>;
    notifications: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                page?: number | undefined;
                perPage?: number | undefined;
                unreadOnly?: boolean | undefined;
                cursor?: number | undefined;
                search?: string | undefined;
                type?: string | undefined;
            } | undefined;
            output: {
                items: {
                    type: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    titleKey: string;
                    messageKey: string;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    isRead: boolean;
                    isSensitive: boolean;
                    deliveryClass: string;
                    sentAt: Date | null;
                    deliveredAt: Date | null;
                    clickedAt: Date | null;
                }[];
                nextCursor: number | undefined;
            } | {
                items: {
                    type: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    titleKey: string;
                    messageKey: string;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    isRead: boolean;
                    isSensitive: boolean;
                    deliveryClass: string;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        unreadCount: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: number;
            meta: object;
        }>;
        markRead: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                read?: boolean | undefined;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        markAllRead: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        registerToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
                platform: string;
                deviceInfo?: string | undefined;
            };
            output: {
                userId: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                customerId: string | null;
                token: string;
                platform: string;
                deviceInfo: string | null;
            };
            meta: object;
        }>;
        unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        getPreferences: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                eventType: string;
                category: "order" | "system" | "blog" | "account" | "wallet";
                labelKey: string;
                descriptionKey: string;
                channels: {
                    inApp: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    push: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    email: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    webhook: {
                        value: boolean;
                        mandatory: boolean;
                    };
                };
                dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
            }[];
            meta: object;
        }>;
        updatePreference: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                eventType: string;
                channels: {
                    inApp?: boolean | undefined;
                    push?: boolean | undefined;
                    email?: boolean | undefined;
                    webhook?: boolean | undefined;
                };
                dndConfig?: Record<string, any> | undefined;
            };
            output: {
                userId: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                customerId: string | null;
                eventType: string;
                channelInApp: boolean;
                channelPush: boolean;
                channelEmail: boolean;
                channelWebhook: boolean;
                dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            };
            meta: object;
        }>;
        listTemplates: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                type: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                channelInApp: boolean;
                channelPush: boolean;
                channelEmail: boolean;
                titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                layoutType: string | null;
            }[];
            meta: object;
        }>;
        updateTemplate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                titleTemplate?: Record<string, string> | undefined;
                messageTemplate?: Record<string, string> | undefined;
                emailSubjectTemplate?: Record<string, string> | undefined;
                emailBodyTemplate?: Record<string, string> | undefined;
                variables?: Record<string, string> | undefined;
                channelInApp?: boolean | undefined;
                channelPush?: boolean | undefined;
                channelEmail?: boolean | undefined;
                layoutType?: string | null | undefined;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                channelInApp: boolean;
                channelPush: boolean;
                channelEmail: boolean;
                titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                layoutType: string | null;
            };
            meta: object;
        }>;
        sendTestTemplate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                emailRecipient: string;
                variables?: Record<string, any> | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        resetTemplate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                channelInApp: boolean;
                channelPush: boolean;
                channelEmail: boolean;
                titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                layoutType: string | null;
            };
            meta: object;
        }>;
        listScheduled: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    message: string;
                    status: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    title: string;
                    scheduledAt: Date;
                    targetType: string;
                    targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                    failedReason: string | null;
                    templateId: number | null;
                }[];
                total: number;
            };
            meta: object;
        }>;
        createScheduled: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                targetType: string;
                title: string;
                message: string;
                scheduledAt: unknown;
                targetIds?: string[] | undefined;
                link?: string | null | undefined;
            };
            output: {
                message: string;
                status: string;
                link: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                scheduledAt: Date;
                targetType: string;
                targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                failedReason: string | null;
                templateId: number | null;
            };
            meta: object;
        }>;
        deleteScheduled: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                message: string;
                status: string;
                link: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                scheduledAt: Date;
                targetType: string;
                targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                failedReason: string | null;
                templateId: number | null;
            };
            meta: object;
        }>;
        previewTemplate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                variables: Record<string, any>;
                type?: string | undefined;
                templateId?: number | undefined;
                customEmailBody?: string | undefined;
                customEmailSubject?: string | undefined;
                locale?: string | undefined;
            };
            output: {
                subject: string;
                html: string;
                text: string;
            };
            meta: object;
        }>;
        testDispatch: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                templateId: number;
                variables: Record<string, any>;
                emailRecipient: string;
                locale?: string | undefined;
            };
            output: {
                type: string;
                link: string | null;
                id: number;
                createdAt: Date;
                titleKey: string;
                messageKey: string;
                variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                isRead: boolean;
                isSensitive: boolean;
                deliveryClass: string;
            } | null;
            meta: object;
        }>;
        blacklist: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                    page?: number | undefined;
                    perPage?: number | undefined;
                    search?: string | undefined;
                };
                output: {
                    items: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        reason: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    stats: {
                        bounce: number;
                        complaint: number;
                        manual: number;
                    };
                };
                meta: object;
            }>;
            add: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                    reason: string;
                };
                output: {
                    email: string;
                    id: number;
                    createdAt: Date;
                    reason: string;
                };
                meta: object;
            }>;
            addBulk: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    entries: {
                        email: string;
                        reason: string;
                    }[];
                };
                output: void;
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                };
                output: void;
                meta: object;
            }>;
            removeBulk: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    emails: string[];
                };
                output: void;
                meta: object;
            }>;
            updateReason: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    email: string;
                    reason: string;
                };
                output: {
                    email: string;
                    id: number;
                    createdAt: Date;
                    reason: string;
                };
                meta: object;
            }>;
            syncCache: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    emails: string[];
                };
                output: void;
                meta: object;
            }>;
        }>>;
    }>>;
    redirects: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                search?: string | undefined;
                isActive?: boolean | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            } | undefined;
            output: {
                items: {
                    id: number;
                    createdAt: Date;
                    isActive: boolean;
                    statusCode: number;
                    note: string | null;
                    fromPath: string;
                    toPath: string;
                    hitCount: number;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                fromPath: string;
                toPath: string;
                statusCode?: number | undefined;
                note?: string | undefined;
            };
            output: {
                id: number;
                isActive: boolean;
                statusCode: number;
                fromPath: string;
                toPath: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                fromPath?: string | undefined;
                toPath?: string | undefined;
                statusCode?: number | undefined;
                isActive?: boolean | undefined;
                note?: string | undefined;
            };
            output: {
                id: number;
                isActive: boolean;
                statusCode: number;
                fromPath: string;
                toPath: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                isActive: boolean;
                statusCode: number;
                note: string | null;
                fromPath: string;
                toPath: string;
                hitCount: number;
            };
            meta: object;
        }>;
    }>>;
    taxonomies: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                type?: string | undefined;
                parentId?: number | null | undefined;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            } | undefined;
            output: {
                items: {
                    type: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    _count: {
                        children: number;
                    };
                    parentId: number | null;
                    order: number;
                    slug: string;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                parentId: number | null;
                children: {
                    id: number;
                    name: string;
                    order: number;
                    slug: string;
                }[];
                order: number;
                slug: string;
            };
            meta: object;
        }>;
        tree: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                type: string;
            };
            output: {
                id: number;
                name: string;
                children: {
                    id: number;
                    name: string;
                    children: {
                        id: number;
                        name: string;
                        order: number;
                        slug: string;
                    }[];
                    order: number;
                    slug: string;
                }[];
                order: number;
                slug: string;
            }[];
            meta: object;
        }>;
        types: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                type: string;
                count: number;
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                slug: string;
                type: string;
                description?: string | undefined;
                parentId?: number | undefined;
                order?: number | undefined;
                metadata?: Record<string, unknown> | undefined;
            };
            output: {
                type: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                updatedAt: Date;
                parentId: number | null;
                order: number;
                slug: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                slug?: string | undefined;
                description?: string | undefined;
                parentId?: number | null | undefined;
                order?: number | undefined;
                metadata?: Record<string, unknown> | undefined;
            };
            output: {
                type: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                updatedAt: Date;
                parentId: number | null;
                order: number;
                slug: string;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                updatedAt: Date;
                parentId: number | null;
                order: number;
                slug: string;
            };
            meta: object;
        }>;
    }>>;
    templates: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                type?: string | undefined;
                search?: string | undefined;
                isActive?: boolean | undefined;
            } | undefined;
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                isActive: boolean;
                slug: string;
                thumbnail: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                isActive: boolean;
                slug: string;
                content: string | null;
                structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                thumbnail: string | null;
                createdBy: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                slug: string;
                type: "email" | "page" | "post";
                content?: string | undefined;
                structure?: Record<string, unknown> | undefined;
                thumbnail?: string | undefined;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                slug: string;
                content: string | null;
                structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                thumbnail: string | null;
                createdBy: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                slug?: string | undefined;
                content?: string | undefined;
                structure?: Record<string, unknown> | undefined;
                thumbnail?: string | undefined;
                isActive?: boolean | undefined;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                slug: string;
                content: string | null;
                structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                thumbnail: string | null;
                createdBy: string | null;
            };
            meta: object;
        }>;
        duplicate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                slug: string;
                content: string | null;
                structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                thumbnail: string | null;
                createdBy: string | null;
            };
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                type: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                slug: string;
                content: string | null;
                structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                thumbnail: string | null;
                createdBy: string | null;
            };
            meta: object;
        }>;
    }>>;
    contentLocks: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        acquire: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post";
                entityId: number;
            };
            output: {
                acquired: boolean;
                lock: import("@ecom/features/content-lock/ContentLockService").ContentLock;
            };
            meta: object;
        }>;
        release: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post";
                entityId: number;
            };
            output: boolean;
            meta: object;
        }>;
        check: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                entityType: "page" | "post";
                entityId: number;
            };
            output: import("@ecom/features/content-lock/ContentLockService").ContentLock | null;
            meta: object;
        }>;
        heartbeat: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entityType: "page" | "post";
                entityId: number;
            };
            output: boolean;
            meta: object;
        }>;
    }>>;
    rateCards: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        calculate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                shippingMethod: "EXPRESS" | "EPACKET";
                country: string;
                weight: number;
                customerId: string;
                origin?: string | null | undefined;
                calculationDate?: unknown;
            };
            output: {
                freightCost: number;
                appliedRateCardId: number;
                appliedRateCardSnapshot: {
                    rateCardId: number;
                    rateCardCode: string;
                    rateCardName: string;
                    currency: string;
                    itemId: number;
                    startWeight: number;
                    endWeight: number;
                    rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
                    amount: number;
                };
            };
            meta: object;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id?: number | undefined;
                code?: string | undefined;
                type?: "DEFAULT" | "CUSTOM" | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                country?: string | undefined;
                origin?: string | undefined;
                search?: string | undefined;
                name?: string | undefined;
                startDate?: unknown;
                endDate?: unknown;
                customerGroupId?: number | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "code" | "type" | "status" | "id" | "createdAt" | "name" | "updatedAt" | "startDate" | "endDate" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                startDate: Date | null;
                endDate: Date | null;
                country: string;
                origin: string | null;
                currency: string;
                weightStep: import("@prisma/client-runtime-utils").Decimal;
                minWeight: import("@prisma/client-runtime-utils").Decimal;
                maxWeight: import("@prisma/client-runtime-utils").Decimal;
                groups: {
                    customerGroup: {
                        code: string;
                        id: number;
                        name: string;
                    };
                    customerGroupId: number;
                }[];
            }>;
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                items: {
                    id: number;
                    startWeight: import("@prisma/client-runtime-utils").Decimal;
                    endWeight: import("@prisma/client-runtime-utils").Decimal;
                    rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
                    amount: import("@prisma/client-runtime-utils").Decimal;
                }[];
                shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                startDate: Date | null;
                endDate: Date | null;
                country: string;
                origin: string | null;
                currency: string;
                weightStep: import("@prisma/client-runtime-utils").Decimal;
                minWeight: import("@prisma/client-runtime-utils").Decimal;
                maxWeight: import("@prisma/client-runtime-utils").Decimal;
                groups: {
                    customerGroup: {
                        code: string;
                        id: number;
                        name: string;
                    };
                    customerGroupId: number;
                }[];
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                code: string;
                name: string;
                shippingMethod: "EXPRESS" | "EPACKET";
                weightStep: number;
                minWeight: number;
                maxWeight: number;
                type?: "DEFAULT" | "CUSTOM" | undefined;
                country?: string | undefined;
                origin?: string | null | undefined;
                currency?: string | undefined;
                startDate?: unknown;
                endDate?: unknown;
                customerGroupIds?: number[] | undefined;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                code?: string | undefined;
                name?: string | undefined;
                type?: "DEFAULT" | "CUSTOM" | undefined;
                shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                country?: string | undefined;
                origin?: string | null | undefined;
                currency?: string | undefined;
                weightStep?: number | undefined;
                minWeight?: number | undefined;
                maxWeight?: number | undefined;
                startDate?: unknown;
                endDate?: unknown;
                customerGroupIds?: number[] | undefined;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        submitForReview: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        approve: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        reject: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                reason?: string | undefined;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        assignGroups: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                customerGroupIds: number[];
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        checkOverlap: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                shippingMethod: "EXPRESS" | "EPACKET";
                country: string;
                excludeId?: number | undefined;
                origin?: string | null | undefined;
                customerGroupIds?: number[] | undefined;
                startDate?: unknown;
                endDate?: unknown;
            };
            output: {
                hasOverlap: boolean;
                overlappingCards: {
                    code: string;
                    id: number;
                    startDate: Date | null;
                    endDate: Date | null;
                }[];
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        listLogs: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                user: {
                    email: string;
                    id: string;
                    name: string | null;
                } | null;
                userId: string | null;
                id: number;
                createdAt: Date;
                action: string;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            }[];
            meta: object;
        }>;
        importSlabs: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                rateCardId: number;
                slabs: {
                    startWeight: number;
                    endWeight: number;
                    rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
                    amount: number;
                }[];
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        exportSlabsTemplate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                minWeight: number;
                maxWeight: number;
                weightStep: number;
                rateType?: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG" | undefined;
            };
            output: {
                slabs: {
                    startWeight: number;
                    endWeight: number;
                    rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
                    amount: number;
                }[];
            };
            meta: object;
        }>;
        listGroups: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                code: string;
                id: number;
                name: string;
            }[];
            meta: object;
        }>;
        duplicate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
                id: number;
                name: string;
            };
            meta: object;
        }>;
    }>>;
    partners: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                search?: string | undefined;
                status?: "ACTIVE" | "INACTIVE" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "code" | "status" | "id" | "createdAt" | "name" | "updatedAt" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                code: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                contactName: string | null;
                contactEmail: string | null;
                contactPhone: string | null;
            }>;
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                apiConfig: Record<string, unknown> | null;
                code: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                contactName: string | null;
                contactEmail: string | null;
                contactPhone: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                code: string;
                name: string;
                contactName?: string | null | undefined;
                contactEmail?: string | null | undefined;
                contactPhone?: string | null | undefined;
                status?: "ACTIVE" | "INACTIVE" | undefined;
                description?: string | null | undefined;
                apiConfig?: Record<string, unknown> | null | undefined;
            };
            output: {
                code: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                code?: string | undefined;
                name?: string | undefined;
                contactName?: string | null | undefined;
                contactEmail?: string | null | undefined;
                contactPhone?: string | null | undefined;
                status?: "ACTIVE" | "INACTIVE" | undefined;
                description?: string | null | undefined;
                apiConfig?: Record<string, unknown> | null | undefined;
            };
            output: {
                code: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
                id: number;
                name: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            } | null;
            meta: object;
        }>;
        listServices: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                partnerId: number;
            };
            output: {
                code: string;
                type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                isActive: boolean;
                partnerId: number;
                statusMapping: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                webhookSecret: string | null;
                timeoutMs: number;
                rateLimitPerMinute: number;
            }[];
            meta: object;
        }>;
        addService: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                partnerId: number;
                code: string;
                name: string;
                type: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE";
                statusMapping?: Record<string, unknown> | null | undefined;
                isActive?: boolean | undefined;
                webhookSecret?: string | null | undefined;
                timeoutMs?: number | undefined;
                rateLimitPerMinute?: number | undefined;
            };
            output: {
                code: string;
                id: number;
                name: string;
                partnerId: number;
            };
            meta: object;
        }>;
        updateService: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: unknown;
                code?: string | undefined;
                name?: string | undefined;
                type?: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE" | undefined;
                statusMapping?: Record<string, unknown> | null | undefined;
                isActive?: boolean | undefined;
                webhookSecret?: string | null | undefined;
                timeoutMs?: number | undefined;
                rateLimitPerMinute?: number | undefined;
            };
            output: {
                code: string;
                id: number;
                name: string;
                partnerId: number;
            };
            meta: object;
        }>;
        deleteService: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: unknown;
            };
            output: {
                id: number;
            } | null;
            meta: object;
        }>;
        testConnection: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                tempConfig?: Record<string, unknown> | null | undefined;
            };
            output: {
                success: boolean;
                message: string;
            };
            meta: object;
        }>;
    }>>;
    packing: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                search?: string | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                orderBy?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    image: string | null;
                }[];
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                image: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                image?: string | null | undefined;
                description?: string | null | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                image: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                image?: string | null | undefined;
                description?: string | null | undefined;
                status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                image: string | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
    }>>;
    divisions: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        listProvinces: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                divisionType?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                orderBy?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    codeName: string;
                    phoneCode: number;
                }[];
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            meta: object;
        }>;
        getProvince: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                phoneCode: number;
            };
            meta: object;
        }>;
        createProvince: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                code: number;
                divisionType: string;
                phoneCode: number;
                codeName?: string | undefined;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                phoneCode: number;
            };
            meta: object;
        }>;
        updateProvince: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                code?: number | undefined;
                divisionType?: string | undefined;
                codeName?: string | undefined;
                phoneCode?: number | undefined;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                phoneCode: number;
            };
            meta: object;
        }>;
        deleteProvince: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        listWards: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                provinceCode?: number | undefined;
                search?: string | undefined;
                divisionType?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                orderBy?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    code: number;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    province: {
                        name: string;
                    };
                    divisionType: string;
                    codeName: string;
                    provinceCode: number;
                }[];
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            meta: object;
        }>;
        getWard: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                provinceCode: number;
            };
            meta: object;
        }>;
        createWard: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                code: number;
                divisionType: string;
                provinceCode: number;
                codeName?: string | undefined;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                provinceCode: number;
            };
            meta: object;
        }>;
        updateWard: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                code?: number | undefined;
                divisionType?: string | undefined;
                codeName?: string | undefined;
                provinceCode?: number | undefined;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                provinceCode: number;
            };
            meta: object;
        }>;
        deleteWard: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        listDivisions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                countryCode: string;
                level?: number | undefined;
                parentId?: number | undefined;
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                orderBy?: "asc" | "desc" | undefined;
            };
            output: {
                items: {
                    code: string;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    divisionType: string;
                    countryCode: string;
                    nameEn: string | null;
                    level: number;
                    parentId: number | null;
                    isActive: boolean;
                    parent: {
                        code: string;
                        id: number;
                        name: string;
                    } | null;
                }[];
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            meta: object;
        }>;
        getDivision: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: number;
            };
            output: {
                code: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                countryCode: string;
                nameEn: string | null;
                level: number;
                parentId: number | null;
                isActive: boolean;
                parent: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
            };
            meta: object;
        }>;
        createDivision: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                countryCode: string;
                code: string;
                name: string;
                divisionType: string;
                level: number;
                nameEn?: string | undefined;
                parentId?: number | undefined;
            };
            output: {
                code: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                countryCode: string;
                nameEn: string | null;
                level: number;
                parentId: number | null;
                isActive: boolean;
            };
            meta: object;
        }>;
        updateDivision: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                name?: string | undefined;
                nameEn?: string | undefined;
                divisionType?: string | undefined;
                isActive?: boolean | undefined;
            };
            output: {
                code: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                countryCode: string;
                nameEn: string | null;
                level: number;
                parentId: number | null;
                isActive: boolean;
            };
            meta: object;
        }>;
    }>>;
    orders: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                customerId?: string | undefined;
                status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                data: import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderSummaryResponse[];
                meta: import("@flash-ship/ecom-lib").PaginationMeta;
            };
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: import("./viewer/orders/procedures/orders.handler").CachedOrder | import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderDetailResponse | undefined;
            meta: object;
        }>;
        updateStatus: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
                status: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION";
                metadata?: Record<string, any> | null | undefined;
                expectedVersion?: number | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                id: string;
                updatedAt: Date;
                orderCode: string;
                labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
                exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
                importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
                paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
                version: number;
            };
            meta: object;
        }>;
        addCheckpoint: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orderId: string;
                checkpointDate: string | Date;
                description: string;
                location?: string | null | undefined;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        recalculate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
                forceRefresh?: boolean | undefined;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                id: string;
                createdAt: Date;
                orderCode: string;
                totalFee: import("@prisma/client-runtime-utils").Decimal;
            };
            meta: object;
        }>;
    }>>;
}>;
export declare const customerRouter: import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    auth: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        sendVerificationCode: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        register: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                password: string;
                code: string;
            };
            output: {
                accessToken: string;
                refreshToken: string;
                customer: {
                    email: string;
                    id: string;
                    name: string | null;
                    customerCode: string | null;
                    username: string;
                };
            };
            meta: object;
        }>;
        login: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                identifier: string;
                password: string;
            };
            output: {
                accessToken: string;
                refreshToken: string;
                customer: {
                    id: string;
                    email: string;
                    username: string;
                    name: string | null;
                    avatarUrl: string | null;
                };
            };
            meta: object;
        }>;
        refreshToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                refreshToken: string;
            };
            output: {
                accessToken: string;
                refreshToken: string;
            };
            meta: object;
        }>;
        me: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                accessToken?: string | undefined;
            } | undefined;
            output: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                description: string | null;
                id: string;
                createdAt: Date;
                name: string | null;
                customerCode: string | null;
                username: string;
                usernameChangeCount: number;
                usernameChangedAt: Date | null;
                phone: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                lastLoginAt: Date | null;
                dob: Date | null;
                gender: string | null;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                updatedAt: Date;
                group: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
                socialAccounts: {
                    email: string | null;
                    id: number;
                    createdAt: Date;
                    name: string | null;
                    provider: string;
                }[];
                activityLogs: {
                    id: number;
                    createdAt: Date;
                    action: string;
                    ipAddress: string | null;
                }[];
                groupId: number | null;
            } | null;
            meta: object;
        }>;
        updateProfile: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                accessToken?: string | undefined;
                username?: string | undefined;
                name?: string | undefined;
                phone?: string | undefined;
                dob?: string | null | undefined;
                gender?: "male" | "female" | "other" | null | undefined;
                description?: string | null | undefined;
            };
            output: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                id: string;
                name: string | null;
                username: string;
            };
            meta: object;
        }>;
        verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
            };
            output: {
                customerId: string;
            };
            meta: object;
        }>;
        forgotPassword: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
            };
            output: {
                message: string;
            };
            meta: object;
        }>;
        resetPassword: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
                password: string;
            };
            output: {
                customerId: string;
            };
            meta: object;
        }>;
        changePassword: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                oldPassword: string;
                newPassword: string;
                accessToken?: string | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        checkUsername: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                username: string;
            };
            output: {
                available: boolean;
            };
            meta: object;
        }>;
        logout: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                refreshToken: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
    divisions: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        listProvinces: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
            } | undefined;
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                codeName: string;
                phoneCode: number;
            }[];
            meta: object;
        }>;
        listWards: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                provinceCode: number;
                search?: string | undefined;
            };
            output: {
                code: number;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                province: {
                    name: string;
                };
                divisionType: string;
                codeName: string;
                provinceCode: number;
            }[];
            meta: object;
        }>;
        listStates: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                limit?: number | undefined;
            } | undefined;
            output: {
                code: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                countryCode: string;
                nameEn: string | null;
                level: number;
                parentId: number | null;
                isActive: boolean;
                parent: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
            }[];
            meta: object;
        }>;
        listCities: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                parentId: number;
                search?: string | undefined;
                limit?: number | undefined;
            };
            output: {
                code: string;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                divisionType: string;
                countryCode: string;
                nameEn: string | null;
                level: number;
                parentId: number | null;
                isActive: boolean;
                parent: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
            }[];
            meta: object;
        }>;
    }>>;
    orders: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        calculateFreight: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                shippingMethod: "EXPRESS" | "EPACKET";
                country: string;
                declaredWeight: number;
                dimensionLength?: number | null | undefined;
                dimensionWidth?: number | null | undefined;
                dimensionHeight?: number | null | undefined;
                origin?: string | null | undefined;
            };
            output: {
                baseShippingRate: number;
                surchargeFee: number;
                totalAmount: number;
                chargeableWeight: number;
                volumeWeight: number;
                appliedRateCardId: number;
                appliedRateCardItemId: number;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                shippingMethod: "EXPRESS" | "EPACKET";
                receiverName: string;
                receiverCity: string;
                receiverState: string;
                receiverAddress1: string;
                receiverCountry: string;
                receiverZipCode: string;
                detailDescription: string;
                declaredWeight: number;
                declaredValue: number;
                shippingOrigin?: "HAN" | "SGN" | undefined;
                sellerOrderId?: string | null | undefined;
                importId?: string | null | undefined;
                senderName?: string | null | undefined;
                senderAddress?: string | null | undefined;
                senderPhone?: string | null | undefined;
                senderEmail?: string | null | undefined;
                senderCountry?: string | null | undefined;
                senderState?: string | null | undefined;
                senderCity?: string | null | undefined;
                senderWard?: string | null | undefined;
                senderZipCode?: string | null | undefined;
                receiverPhone?: string | null | undefined;
                receiverEmail?: string | null | undefined;
                receiverAddress2?: string | null | undefined;
                dimensionLength?: number | null | undefined;
                dimensionWidth?: number | null | undefined;
                dimensionHeight?: number | null | undefined;
                packingTypeId?: number | null | undefined;
                isGetLabel?: number | undefined;
                products?: {
                    description: string;
                    quantity: number;
                    value: number;
                    hsCode?: string | null | undefined;
                    originCountry?: string | null | undefined;
                    weight?: number | null | undefined;
                    sku?: string | null | undefined;
                }[] | undefined;
            };
            output: {
                totalFee: number;
                volumeWeight: number;
                chargeableWeight: number;
                dimensionText: string | null;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                id: string;
                createdAt: Date;
                orderCode: string;
            };
            meta: object;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                fromDate?: string | undefined;
                toDate?: string | undefined;
                shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
                id: string;
                createdAt: Date;
                customer: {
                    email: string;
                    name: string | null;
                    username: string;
                };
                customerId: string;
                shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
                shippingOrigin: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingOrigin;
                sellerOrderId: string | null;
                receiverName: string;
                receiverPhone: string | null;
                receiverCity: string;
                receiverState: string;
                receiverAddress1: string;
                receiverCountry: string;
                receiverZipCode: string;
                declaredWeight: number;
                orderCode: string;
                labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
                ecomTrackingNumber: string | null;
                baseShippingFee: import("@prisma/client-runtime-utils").Decimal;
                surchargeFee: import("@prisma/client-runtime-utils").Decimal;
                totalFee: import("@prisma/client-runtime-utils").Decimal;
            }>;
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: import("./customer/orders/procedures/orders.handler").CachedOrder | undefined;
            meta: object;
        }>;
        exportExcel: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                search?: string | undefined;
                status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
                fromDate?: string | undefined;
                toDate?: string | undefined;
                shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
                sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
            } | undefined;
            output: {
                filename: string;
                fileData: string;
            };
            meta: object;
        }>;
        createImportSession: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                fileName: string;
                totalRows: number;
                fileSize?: number | null | undefined;
            };
            output: {
                id: string;
            };
            meta: object;
        }>;
        importBatch: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                importId: string;
                batchIndex: number;
                orders: {
                    excelRowNumbers: number[];
                    shippingMethod: "EXPRESS" | "EPACKET";
                    receiverName: string;
                    receiverCity: string;
                    receiverState: string;
                    receiverAddress1: string;
                    receiverCountry: string;
                    receiverZipCode: string;
                    detailDescription: string;
                    declaredWeight: number;
                    declaredValue: number;
                    shippingOrigin?: "HAN" | "SGN" | undefined;
                    sellerOrderId?: string | null | undefined;
                    senderName?: string | null | undefined;
                    senderAddress?: string | null | undefined;
                    senderPhone?: string | null | undefined;
                    senderEmail?: string | null | undefined;
                    senderCountry?: string | null | undefined;
                    senderState?: string | null | undefined;
                    senderCity?: string | null | undefined;
                    senderZipCode?: string | null | undefined;
                    receiverPhone?: string | null | undefined;
                    receiverEmail?: string | null | undefined;
                    receiverAddress2?: string | null | undefined;
                    dimensionLength?: number | null | undefined;
                    dimensionWidth?: number | null | undefined;
                    dimensionHeight?: number | null | undefined;
                    packagingCode?: string | null | undefined;
                    isGetLabel?: number | undefined;
                    products?: {
                        description: string;
                        quantity: number;
                        value: number;
                        hsCode?: string | null | undefined;
                        originCountry?: string | null | undefined;
                        weight?: number | null | undefined;
                        sku?: string | null | undefined;
                    }[] | undefined;
                }[];
            };
            output: {
                successCount: number;
                failedCount: number;
                errors: {
                    line: number;
                    columnName: string;
                    enteredValue: string;
                    errorReason: string;
                }[];
            };
            meta: object;
        }>;
        completeImportSession: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                importId: string;
                successRows: number;
                failedRows: number;
                errors: {
                    line: number;
                    columnName: string;
                    enteredValue: string;
                    errorReason: string;
                }[];
                status?: "completed" | "failed" | undefined;
            };
            output: {
                status: string;
                id: string;
            };
            meta: object;
        }>;
        listImportSessions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                page?: number | undefined;
                perPage?: number | undefined;
                search?: string | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
                timezoneOffset?: string | undefined;
            };
            output: {
                total: number;
                items: {
                    status: string;
                    id: string;
                    createdAt: Date;
                    fileName: string;
                    fileSize: number | null;
                    totalRows: number;
                    successRows: number;
                    failedRows: number;
                }[];
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        getImportSessionDetail: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: {
                status: string;
                id: string;
                createdAt: Date;
                customerId: string;
                fileName: string;
                fileSize: number | null;
                totalRows: number;
                successRows: number;
                failedRows: number;
                errors: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            };
            meta: object;
        }>;
        listPackingTypes: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
            } | undefined;
            output: {
                items: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    image: string | null;
                }[];
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            meta: object;
        }>;
    }>>;
    apiKeys: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                id: string;
                ownerId: string;
                ownerType: string;
                maskedKey: string;
                label: string | null;
                allowedIps: string[];
                expiresAt: Date | null;
                lastUsedAt: Date | null;
                createdAt: Date;
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                label?: string | null | undefined;
                expiresAt?: Date | null | undefined;
                allowedIps?: string[] | null | undefined;
            };
            output: {
                rawKey: string;
                maskedKey: string;
            };
            meta: object;
        }>;
        revoke: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
    webhooks: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                url: string;
                id: number;
                ownerId: string | null;
                ownerType: string | null;
                createdAt: Date;
                name: string;
                _count: {
                    logs: number;
                };
                isActive: boolean;
                secret: string | null;
                oldSecret: string | null;
                secretUpdatedAt: Date | null;
                events: string[];
                retries: number;
                timeout: number;
                failureCount: number;
                apiVersion: string;
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                url: string;
                events: string[];
                apiVersion?: string | undefined;
            };
            output: {
                id: number;
                name: string;
                secret: string | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        rollSecret: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                secret: string;
            };
            meta: object;
        }>;
        testWebhook: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        listLogs: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                webhookId: number;
            };
            output: {
                error: string | null;
                id: number;
                createdAt: Date;
                success: boolean;
                event: string;
                payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                response: string | null;
                statusCode: number | null;
                attempts: number;
            }[];
            meta: object;
        }>;
    }>>;
    notifications: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
                page?: number | undefined;
                perPage?: number | undefined;
                unreadOnly?: boolean | undefined;
                cursor?: number | undefined;
            } | undefined;
            output: {
                items: {
                    type: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    titleKey: string;
                    messageKey: string;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    isRead: boolean;
                    isSensitive: boolean;
                    deliveryClass: string;
                    sentAt: Date | null;
                    deliveredAt: Date | null;
                    clickedAt: Date | null;
                }[];
                nextCursor: number | undefined;
            } | {
                items: {
                    type: string;
                    link: string | null;
                    id: number;
                    createdAt: Date;
                    titleKey: string;
                    messageKey: string;
                    variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                    isRead: boolean;
                    isSensitive: boolean;
                    deliveryClass: string;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        unreadCount: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: number;
            meta: object;
        }>;
        markRead: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        markAllRead: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        registerToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
                platform: string;
                deviceInfo?: string | undefined;
            };
            output: {
                userId: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                customerId: string | null;
                token: string;
                platform: string;
                deviceInfo: string | null;
            };
            meta: object;
        }>;
        unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
            };
            output: import("@ecom/prisma").Prisma.BatchPayload;
            meta: object;
        }>;
        getPreferences: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                eventType: string;
                category: "order" | "system" | "blog" | "account" | "wallet";
                labelKey: string;
                descriptionKey: string;
                channels: {
                    inApp: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    push: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    email: {
                        value: boolean;
                        mandatory: boolean;
                    };
                    webhook: {
                        value: boolean;
                        mandatory: boolean;
                    };
                };
                dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
            }[];
            meta: object;
        }>;
        updatePreference: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                eventType: string;
                channels: {
                    inApp?: boolean | undefined;
                    push?: boolean | undefined;
                    email?: boolean | undefined;
                    webhook?: boolean | undefined;
                };
                dndConfig?: Record<string, any> | undefined;
            };
            output: {
                userId: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                customerId: string | null;
                eventType: string;
                channelInApp: boolean;
                channelPush: boolean;
                channelEmail: boolean;
                channelWebhook: boolean;
                dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            };
            meta: object;
        }>;
    }>>;
    senders: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: ({
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                ward: string | null;
                country: string;
                isDefault: boolean;
                city: string;
                zipCode: string | null;
                address: string;
            } & {
                cityName: string;
                wardName: string | null;
            })[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                address: string;
                city: string;
                label?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                ward?: string | null | undefined;
                zipCode?: string | null | undefined;
                country?: string | undefined;
                isDefault?: boolean | undefined;
            };
            output: ({
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                ward: string | null;
                country: string;
                isDefault: boolean;
                city: string;
                zipCode: string | null;
                address: string;
            } & {
                cityName: string;
                wardName: string | null;
            }) | undefined;
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                data: {
                    label?: string | null | undefined;
                    name?: string | undefined;
                    phone?: string | null | undefined;
                    email?: string | null | undefined;
                    address?: string | undefined;
                    city?: string | undefined;
                    ward?: string | null | undefined;
                    zipCode?: string | null | undefined;
                    country?: string | undefined;
                    isDefault?: boolean | undefined;
                };
            };
            output: ({
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                ward: string | null;
                country: string;
                isDefault: boolean;
                city: string;
                zipCode: string | null;
                address: string;
            } & {
                cityName: string;
                wardName: string | null;
            }) | undefined;
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        setDefault: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                ward: string | null;
                country: string;
                isDefault: boolean;
                city: string;
                zipCode: string | null;
                address: string;
            };
            meta: object;
        }>;
    }>>;
    receivers: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                stateName: string;
                cityName: string;
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                country: string;
                isDefault: boolean;
                address1: string;
                address2: string | null;
                city: string;
                state: string;
                zipCode: string;
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                address1: string;
                city: string;
                state: string;
                zipCode: string;
                label?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                address2?: string | null | undefined;
                country?: string | undefined;
                isDefault?: boolean | undefined;
            };
            output: {
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                country: string;
                isDefault: boolean;
                address1: string;
                address2: string | null;
                city: string;
                state: string;
                zipCode: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                data: {
                    label?: string | null | undefined;
                    name?: string | undefined;
                    phone?: string | null | undefined;
                    email?: string | null | undefined;
                    address1?: string | undefined;
                    address2?: string | null | undefined;
                    city?: string | undefined;
                    state?: string | undefined;
                    zipCode?: string | undefined;
                    country?: string | undefined;
                    isDefault?: boolean | undefined;
                };
            };
            output: {
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                country: string;
                isDefault: boolean;
                address1: string;
                address2: string | null;
                city: string;
                state: string;
                zipCode: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        setDefault: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                email: string | null;
                id: number;
                label: string | null;
                createdAt: Date;
                name: string;
                phone: string | null;
                updatedAt: Date;
                country: string;
                isDefault: boolean;
                address1: string;
                address2: string | null;
                city: string;
                state: string;
                zipCode: string;
            };
            meta: object;
        }>;
    }>>;
    packages: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: {
                length: number | null;
                id: number;
                label: string | null;
                createdAt: Date;
                updatedAt: Date;
                weight: number;
                packingTypeId: number | null;
                width: number | null;
                isDefault: boolean;
                packageName: string;
                height: number | null;
            }[];
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                packageName: string;
                packingTypeId: number;
                weight: number;
                label?: string | null | undefined;
                length?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                isDefault?: boolean | undefined;
            };
            output: {
                length: number | null;
                id: number;
                label: string | null;
                createdAt: Date;
                updatedAt: Date;
                weight: number;
                packingTypeId: number | null;
                width: number | null;
                isDefault: boolean;
                packageName: string;
                height: number | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
                data: {
                    label?: string | null | undefined;
                    packageName?: string | undefined;
                    packingTypeId?: number | undefined;
                    length?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                    weight?: number | undefined;
                    isDefault?: boolean | undefined;
                };
            };
            output: {
                length: number | null;
                id: number;
                label: string | null;
                createdAt: Date;
                updatedAt: Date;
                weight: number;
                packingTypeId: number | null;
                width: number | null;
                isDefault: boolean;
                packageName: string;
                height: number | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                id: number;
            };
            meta: object;
        }>;
        setDefault: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                id: number;
            };
            output: {
                length: number | null;
                id: number;
                label: string | null;
                createdAt: Date;
                updatedAt: Date;
                weight: number;
                packingTypeId: number | null;
                width: number | null;
                isDefault: boolean;
                packageName: string;
                height: number | null;
            };
            meta: object;
        }>;
    }>>;
}>;
export declare const publicRouter: import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    v1: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        blog: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            listPosts: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    categoryId?: number | undefined;
                    isFeatured?: boolean | undefined;
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    excerpt: string | null;
                    featuredImage: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                }>;
                meta: object;
            }>;
            getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    slug: string;
                };
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    bannerImage: string | null;
                    externalSource: string | null;
                    sponsoredBy: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                    tags: {
                        tag: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                } & {
                    _translatedFrom?: string;
                };
                meta: object;
            }>;
            categories: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    children: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        children: {
                            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                            id: number;
                            name: string;
                            order: number;
                            slug: string;
                            icon: string | null;
                        }[];
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                meta: object;
            }>;
            tags: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    search?: string | undefined;
                    page?: number | undefined;
                    perPage?: number | undefined;
                } | undefined;
                output: {
                    rows: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        createdAt: Date;
                        name: string;
                        _count: {
                            posts: number;
                        };
                        slug: string;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                    totalPages: number;
                };
                meta: object;
            }>;
            listComments: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    postId: number;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: {
                    items: {
                        status: string;
                        id: number;
                        createdAt: Date;
                        _count: {
                            replies: number;
                        };
                        customerId: string | null;
                        ipAddress: string | null;
                        parentId: number | null;
                        content: string;
                        postId: number | null;
                        pageId: number | null;
                        authorName: string | null;
                        authorEmail: string | null;
                    }[];
                    total: number;
                    page: number;
                    perPage: number;
                };
                meta: object;
            }>;
            submitComment: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    postId: number;
                    authorName: string;
                    authorEmail: string;
                    content: string;
                    parentId?: number | undefined;
                    website?: string | undefined;
                };
                output: {
                    success: boolean;
                    message: string;
                };
                meta: object;
            }>;
            relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    postId: number;
                    limit?: number | undefined;
                };
                output: ({
                    id: number;
                    title: string;
                    slug: string;
                    excerpt: string | null;
                    featuredImage: string | null;
                    publishedAt: Date | null;
                    score: number;
                } & {
                    _translatedFrom?: string;
                })[];
                meta: object;
            }>;
            search: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    query: string;
                    page?: number | undefined;
                    perPage?: number | undefined;
                };
                output: import("@flash-ship/ecom-lib").PaginatedResult<{
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    deletedAt: Date | null;
                    slug: string;
                    isFeatured: boolean;
                    title: string;
                    publishedAt: Date | null;
                    views: number;
                    excerpt: string | null;
                    featuredImage: string | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                        avatarUrl: string | null;
                    };
                    categories: {
                        category: {
                            id: number;
                            name: string;
                            slug: string;
                        };
                    }[];
                }>;
                meta: object;
            }>;
        }>>;
        pages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
                input: void;
                output: ({
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    _count: {
                        children: number;
                    };
                    parentId: number | null;
                    order: number;
                    slug: string;
                    title: string;
                    publishedAt: Date | null;
                    authorId: string;
                    author: {
                        id: string;
                        name: string | null;
                    };
                    template: string | null;
                } & {
                    _translatedFrom?: string;
                })[];
                meta: object;
            }>;
            getBySlug: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    slug: string;
                };
                output: ({
                    id: number;
                    slug: string;
                    seoMeta: {
                        seoTitle: string | null;
                        seoDescription: string | null;
                        seoImage: string | null;
                        indexMode: string | null;
                    } | null;
                    title: string;
                    publishedAt: Date | null;
                    content: string | null;
                    excerpt: string | null;
                    featuredImage: string | null;
                    template: string | null;
                } & {
                    _translatedFrom?: string;
                }) | null;
                meta: object;
            }>;
        }>>;
        languages: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            getActive: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
                meta: object;
            }>;
            getDefault: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
                meta: object;
            }>;
        }>>;
        hscode: import("@trpc/server").TRPCBuiltRouter<{
            ctx: import("..").Context;
            meta: object;
            errorShape: {
                message: string;
                data: {
                    zodError: {
                        message: string;
                        details: import("../init").ZodErrorDetail[];
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
            getTree: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    description: string;
                }[];
                meta: object;
            }>;
            getDetail: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                };
                output: {
                    chapter: {
                        code: string;
                        name: string;
                        notesHtml: string | null;
                    };
                    heading: {
                        code: string;
                        name: string;
                    } | null;
                    selectedRate: {
                        code: string;
                        description: string;
                        chapterCode: string;
                        headingCode: string;
                        unit: string | null;
                        generalRate: string | null;
                        specialRate: string | null;
                    } | null;
                    rates: {
                        code: string;
                        description: string;
                        chapterCode: string;
                        headingCode: string;
                        unit: string | null;
                        generalRate: string | null;
                        specialRate: string | null;
                    }[];
                    children: any[];
                };
                meta: object;
            }>;
            search: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    query: string;
                };
                output: {
                    code: string;
                    description: string;
                    chapterCode: string;
                    headingCode: string;
                    unit: string | null;
                    generalRate: string | null;
                    specialRate: string | null;
                }[];
                meta: object;
            }>;
            getHeadingTree: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                };
                output: {
                    code: string;
                    description: string;
                    generalRate: string | null;
                    specialRate: string | null;
                    unit: string | null;
                    children: any[];
                }[];
                meta: object;
            }>;
            calculate: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    code: string;
                    value: number;
                    mode: string;
                    country?: string | undefined;
                    entryDate?: string | undefined;
                    loadingDate?: string | undefined;
                };
                output: {
                    dutyRate: string;
                    baseCost: number;
                    totalDuties: number;
                    hmf: number;
                    mpf: number;
                    total: number;
                };
                meta: object;
            }>;
            getCountries: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    flag: string | null;
                    code: string;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
            getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: {
                    code: string;
                    id: number;
                    name: string;
                }[];
                meta: object;
            }>;
        }>>;
    }>>;
    blog: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        listPosts: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                categoryId?: number | undefined;
                isFeatured?: boolean | undefined;
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            } | undefined;
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                deletedAt: Date | null;
                slug: string;
                isFeatured: boolean;
                title: string;
                publishedAt: Date | null;
                views: number;
                excerpt: string | null;
                featuredImage: string | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                        slug: string;
                    };
                }[];
            }>;
            meta: object;
        }>;
        getBySlug: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                slug: string;
            };
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                slug: string;
                isFeatured: boolean;
                title: string;
                publishedAt: Date | null;
                views: number;
                content: string | null;
                excerpt: string | null;
                featuredImage: string | null;
                bannerImage: string | null;
                externalSource: string | null;
                sponsoredBy: string | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                        slug: string;
                    };
                }[];
                tags: {
                    tag: {
                        id: number;
                        name: string;
                        slug: string;
                    };
                }[];
            } & {
                _translatedFrom?: string;
            };
            meta: object;
        }>;
        categories: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
                children: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    children: {
                        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                        id: number;
                        name: string;
                        order: number;
                        slug: string;
                        icon: string | null;
                    }[];
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                order: number;
                slug: string;
                icon: string | null;
            }[];
            meta: object;
        }>;
        tags: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                search?: string | undefined;
                page?: number | undefined;
                perPage?: number | undefined;
            } | undefined;
            output: {
                rows: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    createdAt: Date;
                    name: string;
                    _count: {
                        posts: number;
                    };
                    slug: string;
                }[];
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
            meta: object;
        }>;
        listComments: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                postId: number;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: {
                items: {
                    status: string;
                    id: number;
                    createdAt: Date;
                    _count: {
                        replies: number;
                    };
                    customerId: string | null;
                    ipAddress: string | null;
                    parentId: number | null;
                    content: string;
                    postId: number | null;
                    pageId: number | null;
                    authorName: string | null;
                    authorEmail: string | null;
                }[];
                total: number;
                page: number;
                perPage: number;
            };
            meta: object;
        }>;
        submitComment: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                postId: number;
                authorName: string;
                authorEmail: string;
                content: string;
                parentId?: number | undefined;
                website?: string | undefined;
            };
            output: {
                success: boolean;
                message: string;
            };
            meta: object;
        }>;
        relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                postId: number;
                limit?: number | undefined;
            };
            output: ({
                id: number;
                title: string;
                slug: string;
                excerpt: string | null;
                featuredImage: string | null;
                publishedAt: Date | null;
                score: number;
            } & {
                _translatedFrom?: string;
            })[];
            meta: object;
        }>;
        search: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                query: string;
                page?: number | undefined;
                perPage?: number | undefined;
            };
            output: import("@flash-ship/ecom-lib").PaginatedResult<{
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                deletedAt: Date | null;
                slug: string;
                isFeatured: boolean;
                title: string;
                publishedAt: Date | null;
                views: number;
                excerpt: string | null;
                featuredImage: string | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                        slug: string;
                    };
                }[];
            }>;
            meta: object;
        }>;
    }>>;
    pages: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
            input: void;
            output: ({
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                _count: {
                    children: number;
                };
                parentId: number | null;
                order: number;
                slug: string;
                title: string;
                publishedAt: Date | null;
                authorId: string;
                author: {
                    id: string;
                    name: string | null;
                };
                template: string | null;
            } & {
                _translatedFrom?: string;
            })[];
            meta: object;
        }>;
        getBySlug: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                slug: string;
            };
            output: ({
                id: number;
                slug: string;
                seoMeta: {
                    seoTitle: string | null;
                    seoDescription: string | null;
                    seoImage: string | null;
                    indexMode: string | null;
                } | null;
                title: string;
                publishedAt: Date | null;
                content: string | null;
                excerpt: string | null;
                featuredImage: string | null;
                template: string | null;
            } & {
                _translatedFrom?: string;
            }) | null;
            meta: object;
        }>;
    }>>;
    languages: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        getActive: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
            meta: object;
        }>;
        getDefault: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
            meta: object;
        }>;
    }>>;
    health: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        check: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("@ecom/features/health/HealthCheckService").HealthCheckResult;
            meta: object;
        }>;
    }>>;
    hscode: import("@trpc/server").TRPCBuiltRouter<{
        ctx: import("..").Context;
        meta: object;
        errorShape: {
            message: string;
            data: {
                zodError: {
                    message: string;
                    details: import("../init").ZodErrorDetail[];
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
        getTree: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                code: string;
                description: string;
            }[];
            meta: object;
        }>;
        getDetail: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                code: string;
            };
            output: {
                chapter: {
                    code: string;
                    name: string;
                    notesHtml: string | null;
                };
                heading: {
                    code: string;
                    name: string;
                } | null;
                selectedRate: {
                    code: string;
                    description: string;
                    chapterCode: string;
                    headingCode: string;
                    unit: string | null;
                    generalRate: string | null;
                    specialRate: string | null;
                } | null;
                rates: {
                    code: string;
                    description: string;
                    chapterCode: string;
                    headingCode: string;
                    unit: string | null;
                    generalRate: string | null;
                    specialRate: string | null;
                }[];
                children: any[];
            };
            meta: object;
        }>;
        search: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                query: string;
            };
            output: {
                code: string;
                description: string;
                chapterCode: string;
                headingCode: string;
                unit: string | null;
                generalRate: string | null;
                specialRate: string | null;
            }[];
            meta: object;
        }>;
        getHeadingTree: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                code: string;
            };
            output: {
                code: string;
                description: string;
                generalRate: string | null;
                specialRate: string | null;
                unit: string | null;
                children: any[];
            }[];
            meta: object;
        }>;
        calculate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                code: string;
                value: number;
                mode: string;
                country?: string | undefined;
                entryDate?: string | undefined;
                loadingDate?: string | undefined;
            };
            output: {
                dutyRate: string;
                baseCost: number;
                totalDuties: number;
                hmf: number;
                mpf: number;
                total: number;
            };
            meta: object;
        }>;
        getCountries: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                flag: string | null;
                code: string;
                id: number;
                name: string;
            }[];
            meta: object;
        }>;
        getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                code: string;
                id: number;
                name: string;
            }[];
            meta: object;
        }>;
    }>>;
}>;
export type AdminRouter = typeof adminRouter;
export type CustomerRouter = typeof customerRouter;
export type PublicRouter = typeof publicRouter;
//# sourceMappingURL=_app.d.ts.map