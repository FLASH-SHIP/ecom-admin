import type { PrismaClient } from "@ecom/prisma";
type ContactStatus = "new" | "read" | "replied" | "archived";
export declare class ContactRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(options: {
        formSlug?: string;
        status?: ContactStatus;
        page?: number;
        perPage?: number;
    }): Promise<{
        items: {
            email: string;
            name: string;
            message: string;
            id: number;
            createdAt: Date;
            phone: string | null;
            status: string;
            formSlug: string;
            subject: string | null;
            repliedAt: Date | null;
            assigneeId: string | null;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    findById(id: number): Promise<{
        email: string;
        name: string;
        message: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        status: string;
        ipAddress: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        formSlug: string;
        subject: string | null;
        repliedAt: Date | null;
        assigneeId: string | null;
        assignee: {
            name: string | null;
            id: string;
        } | null;
    } | null>;
    create(data: {
        formSlug?: string;
        name: string;
        email: string;
        phone?: string;
        subject?: string;
        message: string;
        metadata?: unknown;
        ipAddress?: string;
    }): Promise<{
        email: string;
        name: string;
        id: number;
        createdAt: Date;
    }>;
    updateStatus(id: number, status: ContactStatus): Promise<{
        id: number;
        status: string;
    }>;
    assignTo(id: number, assigneeId: string): Promise<{
        id: number;
        assigneeId: string | null;
    }>;
    markReplied(id: number): Promise<{
        id: number;
        status: string;
        repliedAt: Date | null;
    }>;
    remove(id: number): Promise<{
        email: string;
        name: string;
        message: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        status: string;
        ipAddress: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        formSlug: string;
        subject: string | null;
        repliedAt: Date | null;
        assigneeId: string | null;
    }>;
    countByStatus(): Promise<{
        [k: string]: number;
    }>;
}
export {};
//# sourceMappingURL=ContactRepository.d.ts.map