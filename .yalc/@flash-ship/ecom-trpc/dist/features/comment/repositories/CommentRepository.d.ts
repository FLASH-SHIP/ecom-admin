import type { PrismaClient } from "@ecom/prisma";
type CommentStatus = "pending" | "approved" | "spam" | "trash";
export declare class CommentRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(options: {
        postId?: number;
        pageId?: number;
        status?: CommentStatus;
        page?: number;
        perPage?: number;
    }): Promise<{
        items: {
            id: number;
            customerId: string | null;
            createdAt: Date;
            status: string;
            _count: {
                replies: number;
            };
            ipAddress: string | null;
            content: string;
            parentId: number | null;
            postId: number | null;
            authorName: string | null;
            authorEmail: string | null;
            pageId: number | null;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    findById(id: number): Promise<{
        id: number;
        customerId: string | null;
        createdAt: Date;
        status: string;
        ipAddress: string | null;
        content: string;
        parentId: number | null;
        postId: number | null;
        authorName: string | null;
        authorEmail: string | null;
        pageId: number | null;
        replies: {
            id: number;
            createdAt: Date;
            status: string;
            content: string;
            authorName: string | null;
        }[];
    } | null>;
    findThreaded(postId: number): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        authorName: string | null;
        replies: {
            id: number;
            createdAt: Date;
            content: string;
            authorName: string | null;
            replies: {
                id: number;
                createdAt: Date;
                content: string;
                authorName: string | null;
            }[];
        }[];
    }[]>;
    create(data: {
        content: string;
        authorName?: string;
        authorEmail?: string;
        customerId?: string;
        postId?: number;
        pageId?: number;
        parentId?: number;
        status?: string;
        ipAddress?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        status: string;
        content: string;
    }>;
    updateStatus(id: number, status: CommentStatus): Promise<{
        id: number;
        status: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        customerId: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        ipAddress: string | null;
        content: string;
        parentId: number | null;
        postId: number | null;
        authorName: string | null;
        authorEmail: string | null;
        pageId: number | null;
    }>;
    countByStatus(): Promise<{
        [k: string]: number;
    }>;
}
export {};
//# sourceMappingURL=CommentRepository.d.ts.map