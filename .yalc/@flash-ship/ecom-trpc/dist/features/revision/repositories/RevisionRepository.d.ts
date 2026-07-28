import type { PrismaClient } from "@ecom/prisma";
export declare class RevisionRepository {
    private prisma;
    constructor(prisma: PrismaClient);
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
        title: string;
        authorId: string;
        referenceId: number;
        referenceType: string;
        note: string | null;
    }>;
    findByReference(referenceId: number, referenceType: string): Promise<{
        id: number;
        createdAt: Date;
        title: string;
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
        author: {
            id: string;
            name: string | null;
        };
        referenceId: number;
        referenceType: string;
        note: string | null;
    } | null>;
    deleteOldRevisions(referenceId: number, referenceType: string, keepCount: number): Promise<number>;
}
//# sourceMappingURL=RevisionRepository.d.ts.map