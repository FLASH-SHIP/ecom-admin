import { CategoryRepository } from "@ecom/features/blog/repositories/CategoryRepository";
import { PostRepository } from "@ecom/features/blog/repositories/PostRepository";
import { SlugRepository } from "@ecom/features/blog/repositories/SlugRepository";
import { TagRepository } from "@ecom/features/blog/repositories/TagRepository";
import { CategoryService } from "@ecom/features/blog/services/CategoryService";
import { PostService } from "@ecom/features/blog/services/PostService";
import { SlugService } from "@ecom/features/blog/services/SlugService";
import { TagService } from "@ecom/features/blog/services/TagService";
export declare function getPostRepository(): PostRepository;
export declare function getCategoryRepository(): CategoryRepository;
export declare function getTagRepository(): TagRepository;
export declare function getSlugRepository(): SlugRepository;
export declare function getSlugService(): SlugService;
export declare function getPostService(): PostService;
export declare function getCategoryService(): CategoryService;
export declare function getTagService(): TagService;
export declare function resetBlogContainers(): void;
//# sourceMappingURL=BlogService.d.ts.map