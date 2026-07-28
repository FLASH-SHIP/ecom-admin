/**
 * Content workflow states:
 * DRAFT → PENDING_REVIEW → APPROVED → PUBLISHED
 *                ↓
 *            REJECTED → DRAFT (revision needed)
 */
export type WorkflowStatus = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "REJECTED" | "PUBLISHED";
export interface WorkflowTransitionResult {
    fromStatus: WorkflowStatus;
    toStatus: WorkflowStatus;
    reviewerId?: number;
    note?: string;
    timestamp: Date;
}
interface WorkflowHistoryEntry {
    entityType: string;
    entityId: number;
    fromStatus: WorkflowStatus;
    toStatus: WorkflowStatus;
    userId: number;
    userName: string;
    note?: string;
    timestamp: Date;
}
/**
 * Content workflow manager — enforces multi-step approval flow.
 *
 * Inspired by WordPress Editorial Flow and Strapi Review Workflows.
 */
export declare class ContentWorkflowService {
    private history;
    /**
     * Submit content for review.
     */
    submitForReview(entityType: string, entityId: number, currentStatus: WorkflowStatus, userId: number, userName: string, note?: string): WorkflowTransitionResult;
    /**
     * Approve content.
     */
    approve(entityType: string, entityId: number, currentStatus: WorkflowStatus, reviewerId: number, reviewerName: string, note?: string): WorkflowTransitionResult;
    /**
     * Reject content and send back for revision.
     */
    reject(entityType: string, entityId: number, currentStatus: WorkflowStatus, reviewerId: number, reviewerName: string, note?: string): WorkflowTransitionResult;
    /**
     * Move approved content back to draft (for re-editing).
     */
    returnToDraft(entityType: string, entityId: number, currentStatus: WorkflowStatus, userId: number, userName: string, note?: string): WorkflowTransitionResult;
    /**
     * Get workflow history for an entity.
     */
    getHistory(entityType: string, entityId: number): WorkflowHistoryEntry[];
    /**
     * Check if a transition is valid.
     */
    canTransition(from: WorkflowStatus, to: WorkflowStatus): boolean;
    /**
     * Get available next statuses from current status.
     */
    getAvailableTransitions(currentStatus: WorkflowStatus): WorkflowStatus[];
    private transition;
}
export declare const contentWorkflow: ContentWorkflowService;
export {};
//# sourceMappingURL=ContentWorkflowService.d.ts.map