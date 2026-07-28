import type { ContactRepository } from "@ecom/features/contact/repositories/ContactRepository";
export interface IContactServiceDeps {
    contactRepo: ContactRepository;
}
type ContactStatus = "new" | "read" | "replied" | "archived";
export declare class ContactService {
    private deps;
    constructor(deps: IContactServiceDeps);
    listSubmissions(options: {
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
    getSubmission(id: number): Promise<{
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
    }>;
    createSubmission(data: {
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
    deleteSubmission(id: number): Promise<{
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
    getStatusCounts(): Promise<{
        [k: string]: number;
    }>;
}
export {};
//# sourceMappingURL=ContactService.d.ts.map