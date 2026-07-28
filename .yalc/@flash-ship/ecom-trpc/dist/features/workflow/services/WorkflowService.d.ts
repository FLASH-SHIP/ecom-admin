import type { ContentStatus } from "@ecom/prisma";
export declare class WorkflowService {
    /**
     * Validates whether a status transition is allowed.
     * Returns true if the transition is valid.
     */
    canTransition(from: ContentStatus, to: ContentStatus): boolean;
    /**
     * Validates a status transition. Throws if invalid.
     */
    validateTransition(from: ContentStatus, to: ContentStatus): void;
    /**
     * Returns the list of statuses that are reachable from the given status.
     */
    getAvailableTransitions(from: ContentStatus): string[];
    /**
     * Returns a human-readable description of the workflow.
     */
    getWorkflowDescription(): Record<string, string>;
}
export declare function getWorkflowService(): WorkflowService;
//# sourceMappingURL=WorkflowService.d.ts.map