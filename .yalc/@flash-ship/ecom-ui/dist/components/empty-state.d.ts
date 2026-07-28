import type { ReactNode } from "react";
interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): import("react").JSX.Element;
export type { EmptyStateProps };
export { EmptyState };
//# sourceMappingURL=empty-state.d.ts.map