export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const move: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
        folderId: number | null;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const removeMany: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const stats: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        totalFiles: number;
        totalSize: number;
    };
    meta: object;
}>;
//# sourceMappingURL=files.handler.d.ts.map