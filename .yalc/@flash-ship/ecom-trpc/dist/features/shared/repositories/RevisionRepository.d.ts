import type { PrismaClient } from "@ecom/prisma";
export declare class RevisionRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByReference(referenceId: number, referenceType: string): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        authorId: string;
        author: {
            id: string;
            name: string | null;
        };
        note: string | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string | null;
        authorId: string;
        author: {
            id: string;
            name: string | null;
        };
        referenceId: number;
        referenceType: string;
        note: string | null;
    } | null>;
    create(data: {
        referenceId: number;
        referenceType: string;
        title: string;
        content?: string;
        authorId: string;
        note?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=RevisionRepository.d.ts.map