import type { AuthUser } from "@ecom/types";
export interface ResourceWithAuthor {
    authorId: string;
    [key: string]: unknown;
}
export declare const PostPolicy: {
    /**
     * Check if user can update a post.
     */
    canUpdate(user: AuthUser, post: ResourceWithAuthor): boolean;
    /**
     * Check if user can delete a post.
     */
    canDelete(user: AuthUser, post: ResourceWithAuthor): boolean;
};
//# sourceMappingURL=PostPolicy.d.ts.map