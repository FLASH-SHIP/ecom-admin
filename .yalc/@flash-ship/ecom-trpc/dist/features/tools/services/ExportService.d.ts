import type { PrismaClient } from "@ecom/prisma";
export declare class ExportService {
    private prisma;
    constructor(prisma: PrismaClient);
    exportPosts(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        isFeatured: boolean;
        allowComments: boolean;
        formatType: string | null;
        views: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        author: {
            id: string;
            name: string | null;
            email: string;
        };
        categories: {
            category: {
                id: number;
                name: string;
            };
        }[];
        tags: {
            tag: {
                id: number;
                name: string;
            };
        }[];
    }[]>;
    exportCategories(): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        slug: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        order: number;
    }[]>;
    exportTags(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        slug: string;
    }[]>;
    exportPages(): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        order: number;
        template: string | null;
    }[]>;
    exportCustomers(): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        email: string;
        username: string;
        phone: string | null;
        emailVerified: Date | null;
    }[]>;
    exportSettings(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }[]>;
    exportAll(): Promise<{
        exportedAt: string;
        version: string;
        data: {
            posts: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                slug: string;
                content: string | null;
                excerpt: string | null;
                isFeatured: boolean;
                allowComments: boolean;
                formatType: string | null;
                views: number;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                author: {
                    id: string;
                    name: string | null;
                    email: string;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                    };
                }[];
                tags: {
                    tag: {
                        id: number;
                        name: string;
                    };
                }[];
            }[];
            categories: {
                id: number;
                name: string;
                parentId: number | null;
                createdAt: Date;
                slug: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                order: number;
            }[];
            tags: {
                id: number;
                name: string;
                createdAt: Date;
                slug: string;
            }[];
            pages: {
                id: number;
                createdAt: Date;
                title: string;
                slug: string;
                content: string | null;
                excerpt: string | null;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                order: number;
                template: string | null;
            }[];
            customers: {
                id: string;
                name: string | null;
                createdAt: Date;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                email: string;
                username: string;
                phone: string | null;
                emailVerified: Date | null;
            }[];
            settings: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                key: string;
                value: string | null;
            }[];
        };
    }>;
}
//# sourceMappingURL=ExportService.d.ts.map