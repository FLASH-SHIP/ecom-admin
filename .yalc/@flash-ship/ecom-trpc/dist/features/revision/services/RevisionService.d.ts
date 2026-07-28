import type { RevisionRepository } from "@ecom/features/revision/repositories/RevisionRepository";
export interface IRevisionServiceDeps {
    revisionRepo: RevisionRepository;
}
export declare class RevisionService {
    private deps;
    constructor(deps: IRevisionServiceDeps);
    /**
     * Create a new revision snapshot for a post or page.
     * Automatically prunes old revisions beyond the limit.
     */
    createRevision(data: {
        referenceId: number;
        referenceType: "post" | "page";
        title: string;
        content?: string;
        authorId: string;
        note?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        authorId: string;
        referenceId: number;
        referenceType: string;
        note: string | null;
    }>;
    /**
     * List all revisions for a given entity.
     */
    listRevisions(referenceId: number, referenceType: "post" | "page"): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        author: {
            id: string;
            name: string | null;
        };
        note: string | null;
    }[]>;
    /**
     * Get a specific revision by ID with full content.
     */
    getRevision(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string | null;
        author: {
            id: string;
            name: string | null;
        };
        referenceId: number;
        referenceType: string;
        note: string | null;
    }>;
}
//# sourceMappingURL=RevisionService.d.ts.map