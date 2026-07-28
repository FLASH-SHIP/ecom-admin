import type { PrismaClient } from "@ecom/prisma";
import { Prisma } from "@ecom/prisma";
export declare class FieldItemRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByGroupId(groupId: number): Promise<{
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
    }[]>;
    create(data: {
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
    update(id: number, data: {
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
    remove(id: number): Promise<{
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
}
//# sourceMappingURL=FieldItemRepository.d.ts.map