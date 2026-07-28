import * as React from "react";
export interface Column<T> {
    header: React.ReactNode;
    accessorKey?: keyof T;
    cell?: (item: T) => React.ReactNode;
    className?: string;
    headerClassName?: string;
    width?: string | number;
    fixed?: "left" | "right";
    sortable?: boolean;
    sortKey?: string;
}
export interface TableBaseProps<T> {
    data: T[];
    columns: Column<T>[];
    isLoading?: boolean;
    emptyMessage?: string;
    className?: string;
    onRowClick?: (item: T) => void;
    enableRowSelection?: boolean;
    selectedRowIds?: (string | number)[];
    onSelectedRowIdsChange?: (ids: (string | number)[]) => void;
    fixedCheckbox?: boolean;
    minWidth?: string | number;
    sortBy?: string;
    sortOrder?: "asc" | "desc" | null;
    onSortChange?: (sortKey: string, nextSortOrder: "asc" | "desc" | null) => void;
}
export declare function TableBase<T extends {
    id: string | number;
}>({ data, columns, isLoading, emptyMessage, className, onRowClick, enableRowSelection, selectedRowIds, onSelectedRowIdsChange, fixedCheckbox, minWidth, sortBy, sortOrder, onSortChange, }: TableBaseProps<T>): React.JSX.Element;
//# sourceMappingURL=table-base.d.ts.map