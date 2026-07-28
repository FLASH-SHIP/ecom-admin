interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps): import("react").JSX.Element | null;
export type { PaginationProps };
export { Pagination };
//# sourceMappingURL=pagination.d.ts.map