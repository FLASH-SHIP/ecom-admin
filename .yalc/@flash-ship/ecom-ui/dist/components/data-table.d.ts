import type { ReactNode } from "react";
export interface DataTableColumn<T> {
    key: string;
    header: string;
    sortable?: boolean;
    width?: string;
    render?: (row: T) => ReactNode;
    headerClassName?: string;
    cellClassName?: string;
}
export interface DataTablePaginationProps {
    page: number;
    perPage: number;
    total: number;
    onPageChange: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
    currentLocale?: string;
}
export interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    data: T[];
    isLoading?: boolean;
    emptyMessage?: string;
    emptyIcon?: ReactNode;
    searchPlaceholder?: string;
    onSearch?: (query: string) => void;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    onSort?: (key: string) => void;
    selectedIds?: Set<number | string>;
    onSelectAll?: (selected: boolean) => void;
    onSelectRow?: (id: number | string, selected: boolean) => void;
    getRowId?: (row: T) => number | string;
    actions?: (row: T) => ReactNode;
    className?: string;
    headerRowClassName?: string;
    pagination?: DataTablePaginationProps;
}
export declare function DataTable<T>({ columns, data, isLoading, emptyMessage, emptyIcon, searchPlaceholder, onSearch, sortBy, sortOrder, onSort, selectedIds, onSelectAll, onSelectRow, getRowId, actions, className, headerRowClassName, pagination, }: DataTableProps<T>): import("react").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map