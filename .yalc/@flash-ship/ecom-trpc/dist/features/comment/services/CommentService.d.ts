import type { CommentRepository } from "@ecom/features/comment/repositories/CommentRepository";
export interface ICommentServiceDeps {
    commentRepo: CommentRepository;
}
type CommentStatus = "pending" | "approved" | "spam" | "trash";
export declare class CommentService {
    private deps;
    constructor(deps: ICommentServiceDeps);
    listComments(options: {
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
    getComment(id: number): Promise<{
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
    }>;
    getThreadedComments(postId: number): Promise<{
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
    createComment(data: {
        content: string;
        authorName?: string;
        authorEmail?: string;
        customerId?: string;
        postId?: number;
        pageId?: number;
        parentId?: number;
        ipAddress?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        status: string;
        content: string;
    }>;
    approve(id: number): Promise<{
        id: number;
        status: string;
    }>;
    markSpam(id: number): Promise<{
        id: number;
        status: string;
    }>;
    trash(id: number): Promise<{
        id: number;
        status: string;
    }>;
    deleteComment(id: number): Promise<{
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
    getStatusCounts(): Promise<{
        [k: string]: number;
    }>;
}
export {};
//# sourceMappingURL=CommentService.d.ts.map