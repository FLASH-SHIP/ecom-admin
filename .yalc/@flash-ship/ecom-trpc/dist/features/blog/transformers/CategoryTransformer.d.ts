import { BaseTransformer } from "@ecom/lib";
export interface CategoryResponseDto {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    icon: string | null;
    isFeatured: boolean;
    isDefault: boolean;
    status: string;
    parentId: number | null;
    order: number;
    createdAt: string;
    updatedAt: string;
    _count?: {
        posts: number;
    };
}
export interface CategoryInput {
    id: number;
    name?: string;
    slug?: string;
    description?: string | null;
    icon?: string | null;
    isFeatured?: number;
    isDefault?: number;
    status?: string;
    parentId?: number | null;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    _count?: {
        posts: number;
    };
}
export declare class CategoryTransformer extends BaseTransformer<CategoryInput, CategoryResponseDto> {
    transform(category: CategoryInput): CategoryResponseDto;
}
//# sourceMappingURL=CategoryTransformer.d.ts.map