import type { PrismaClient } from "@ecom/prisma";
export declare class CustomFieldValueRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByReference(useFor: string, useForId: number): Promise<{
        value: string | null;
        id: number;
        fieldItem: {
            type: string;
            title: string;
            slug: string;
            groupId: number;
        };
        fieldItemId: number;
    }[]>;
    upsert(data: {
        fieldItemId: number;
        useFor: string;
        useForId: number;
        value: string | null;
    }): Promise<{
        value: string | null;
        id: number;
        fieldItemId: number;
    }>;
    removeByReference(useFor: string, useForId: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=CustomFieldValueRepository.d.ts.map