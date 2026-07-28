export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
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