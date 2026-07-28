import { BaseTransformer } from "@ecom/lib";
export interface PostResponseDto {
    id: number;
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    featuredImage: string | null;
    bannerImage: string | null;
    isFeatured: boolean;
    allowComments: boolean;
    formatType: string | null;
    externalSource: string | null;
    sponsoredBy: string | null;
    views: number;
    status: string;
    authorId: string;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
    author?: {
        id: string;
        name: string | null;
        avatarUrl: string | null;
    } | null;
    categories?: Array<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    }>;
    tags?: Array<{
        tag: {
            id: number;
            name: string;
            slug: string;
        };
    }>;
}
export interface PostInput {
    id: number;
    title?: string;
    slug?: string;
    content?: string | null;
    excerpt?: string | null;
    featuredImage?: string | null;
    bannerImage?: string | null;
    isFeatured?: boolean;
    allowComments?: boolean;
    formatType?: string | null;
    externalSource?: string | null;
    sponsoredBy?: string | null;
    views?: number;
    status?: string;
    authorId?: string;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author?: {
        id: string;
        name: string | null;
        avatarUrl?: string | null;
    } | null;
    categories?: Array<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    }>;
    tags?: Array<{
        tag: {
            id: number;
            name: string;
            slug: string;
        };
    }>;
}
export declare class PostTransformer extends BaseTransformer<PostInput, PostResponseDto> {
    transform(post: PostInput): PostResponseDto;
    private formatDate;
    private formatAuthor;
    private formatCategories;
    private formatTags;
}
//# sourceMappingURL=PostTransformer.d.ts.map