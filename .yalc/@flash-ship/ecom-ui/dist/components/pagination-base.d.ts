import * as React from "react";
export interface PaginationBaseProps {
    currentPage: number;
    totalItems: number;
    perPage: number;
    onPageChange: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
    perPageOptions?: number[];
    itemType?: string;
    className?: string;
    renderRangeText?: (fromItem: number, toItem: number, totalItems: number, itemType?: string) => React.ReactNode;
}
export declare function PaginationBase({ currentPage, totalItems, perPage, onPageChange, onPerPageChange, perPageOptions, itemType, className, renderRangeText, }: PaginationBaseProps): React.JSX.Element;
//# sourceMappingURL=pagination-base.d.ts.map