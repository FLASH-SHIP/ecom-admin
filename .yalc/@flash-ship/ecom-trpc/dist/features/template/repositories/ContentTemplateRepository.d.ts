export declare class ContentTemplateRepository {
    findMany(options?: {
        type?: string;
        search?: string;
        isActive?: boolean;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        slug: string;
        type: string;
        thumbnail: string | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        thumbnail: string | null;
    } | null>;
    findBySlug(slug: string): Promise<{
        id: number;
        name: string;
        slug: string;
        content: string | null;
        type: string;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
    } | null>;
    create(data: {
        name: string;
        slug: string;
        type: string;
        content?: string;
        structure?: Record<string, unknown>;
        thumbnail?: string;
        createdBy?: string;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
    update(id: number, data: {
        name?: string;
        slug?: string;
        content?: string;
        structure?: Record<string, unknown>;
        thumbnail?: string;
        isActive?: boolean;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
}
//# sourceMappingURL=ContentTemplateRepository.d.ts.map