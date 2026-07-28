import type { PrismaClient } from "@ecom/prisma";
import { Prisma } from "@ecom/prisma";
export interface FindGroupsOpts {
    /** Pre-built Prisma where clause from buildPrismaWhere */
    where?: Record<string, unknown>;
    /** Case-insensitive CONTAINS on title (from search bar, separate from column filters) */
    search?: string;
    /** Legacy: exact status for getFieldsForContext */
    status?: string;
    sortBy?: "id" | "title" | "createdAt" | "status";
    sortDir?: "asc" | "desc";
    page?: number;
    pageSize?: number;
}
export declare class FieldGroupRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    private buildWhere;
    private buildOrderBy;
    findMany(opts?: FindGroupsOpts): Promise<{
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
    findById(id: number): Promise<{
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
    /** Batch fetch multiple groups with full items — avoids N+1 in getFieldBoxes */
    findManyByIds(ids: number[]): Promise<{
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
    }[]>;
    create(data: {
        title: string;
        order?: number;
        rules?: unknown;
        status?: string;
    }): Promise<{
        id: number;
        title: string;
    }>;
    update(id: number, data: {
        title?: string;
        order?: number;
        rules?: unknown;
        status?: string;
    }): Promise<{
        id: number;
        title: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        title: string;
        order: number;
        rules: Prisma.JsonValue | null;
    }>;
}
//# sourceMappingURL=FieldGroupRepository.d.ts.map