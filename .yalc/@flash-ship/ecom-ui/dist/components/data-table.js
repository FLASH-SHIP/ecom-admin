"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
import { TableSkeleton } from "./table-skeleton";
import { cn } from "../lib/utils";
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, } from "lucide-react";
import { useMemo, useState } from "react";
export function DataTable({ columns, data, isLoading = false, emptyMessage = "No data found", emptyIcon, searchPlaceholder = "Search...", onSearch, sortBy, sortOrder, onSort, selectedIds, onSelectAll, onSelectRow, getRowId, actions, className, headerRowClassName, pagination, }) {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (value) => {
        setSearchQuery(value);
        onSearch?.(value);
    };
    const allSelected = data.length > 0 &&
        selectedIds &&
        getRowId &&
        data.every((row) => selectedIds.has(getRowId(row)));
    if (isLoading) {
        return (_jsx(TableSkeleton, { columnCount: columns.length, rowCount: 5, hasHeader: true, hasCheckbox: !!onSelectRow && !!getRowId, hasActions: !!actions, className: className }));
    }
    return (_jsxs("div", { className: cn("space-y-4", className), children: [onSearch && (_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx("input", { type: "text", placeholder: searchPlaceholder, value: searchQuery, onChange: (e) => handleSearch(e.currentTarget.value), className: "h-10 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-sm" })] })), _jsxs("div", { className: "overflow-hidden rounded-xl border border-border", children: [_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: cn("border-b border-border bg-muted/50", headerRowClassName), children: [onSelectRow && getRowId && (_jsx("th", { className: "w-12 px-4 py-3", children: _jsx("input", { type: "checkbox", checked: !!allSelected, onChange: (e) => onSelectAll?.(e.currentTarget.checked), className: "h-4 w-4 rounded border-input text-primary focus:ring-ring" }) })), columns.map((col) => (_jsx("th", { className: cn("px-4 py-3 text-left font-medium text-muted-foreground", col.sortable &&
                                                    "cursor-pointer select-none hover:text-foreground transition-colors", col.width, col.headerClassName), onClick: () => col.sortable && onSort?.(col.key), children: _jsxs("div", { className: "flex items-center gap-1.5", children: [col.header, col.sortable && (_jsx(SortIndicator, { column: col.key, sortBy: sortBy, sortOrder: sortOrder }))] }) }, col.key))), actions && _jsx("th", { className: "w-12 px-4 py-3" })] }) }), _jsx("tbody", { className: "divide-y divide-border", children: data.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (onSelectRow ? 1 : 0) + (actions ? 1 : 0), className: "px-4 py-12 text-center", children: _jsxs("div", { className: "flex flex-col items-center gap-2", children: [emptyIcon, _jsx("p", { className: "text-sm text-muted-foreground", children: emptyMessage })] }) }) })) : (data.map((row, i) => {
                                        const rowId = getRowId?.(row);
                                        const isSelected = rowId !== undefined && selectedIds?.has(rowId);
                                        return (_jsxs("tr", { className: cn("transition-colors hover:bg-muted/30", isSelected && "bg-primary/5"), children: [onSelectRow && getRowId && (_jsx("td", { className: "px-4 py-3", children: _jsx("input", { type: "checkbox", checked: !!isSelected, onChange: (e) => rowId !== undefined && onSelectRow(rowId, e.currentTarget.checked), className: "h-4 w-4 rounded border-input text-primary focus:ring-ring" }) })), columns.map((col) => (_jsx("td", { className: cn("px-4 py-3 text-card-foreground", col.cellClassName), children: col.render
                                                        ? col.render(row)
                                                        : String(row[col.key] ?? "") }, col.key))), actions && _jsx("td", { className: "px-4 py-3 text-right", children: actions(row) })] }, rowId ?? i));
                                    })) })] }) }), pagination && pagination.total > 0 && _jsx(DataTablePagination, { pagination: pagination })] })] }));
}
function SortIndicator({ column, sortBy, sortOrder, }) {
    if (sortBy !== column)
        return _jsx(ArrowUpDown, { className: "h-3.5 w-3.5 opacity-40" });
    return sortOrder === "asc" ? (_jsx(ArrowUp, { className: "h-3.5 w-3.5 text-primary" })) : (_jsx(ArrowDown, { className: "h-3.5 w-3.5 text-primary" }));
}
function DataTablePagination({ pagination }) {
    const { page, perPage, total, onPageChange, onPerPageChange, currentLocale = "vi" } = pagination;
    const totalPages = Math.ceil(total / perPage);
    const visiblePages = useMemo(() => generatePages(page, totalPages), [page, totalPages]);
    const startRow = (page - 1) * perPage + 1;
    const endRow = Math.min(page * perPage, total);
    return (_jsxs("div", { className: "px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-border bg-background gap-4 text-xs select-none", children: [_jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [onPerPageChange && (_jsxs("div", { className: "relative inline-flex items-center", children: [_jsxs("select", { value: perPage, onChange: (e) => onPerPageChange(Number(e.target.value)), className: "appearance-none bg-background border border-input rounded-lg pl-3 pr-8 py-1.5 font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-[#0F798C] focus:border-[#0F798C] cursor-pointer", children: [_jsx("option", { value: 10, children: "10" }), _jsx("option", { value: 20, children: "20" }), _jsx("option", { value: 50, children: "50" })] }), _jsx(ChevronDown, { className: "absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" })] })), _jsx("span", { className: "font-medium", children: currentLocale === "vi"
                            ? `Hiển thị từ ${startRow} - ${endRow} trong tổng số ${total} bản ghi`
                            : `Showing ${startRow}-${endRow} of ${total} records` })] }), _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx(Button, { variant: "outline", size: "icon", disabled: page === 1, onClick: () => onPageChange(1), className: "h-8 w-8 rounded-lg border-input text-muted-foreground hover:bg-accent cursor-pointer disabled:opacity-40", children: _jsx(ChevronsLeft, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "outline", size: "icon", disabled: page === 1, onClick: () => onPageChange(page - 1), className: "h-8 w-8 rounded-lg border-input text-muted-foreground hover:bg-accent cursor-pointer disabled:opacity-40", children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), visiblePages.map((p, i) => {
                        if (p === "...") {
                            const neighbor = visiblePages[i + 1] ?? visiblePages[i - 1];
                            const ellipsisKey = `ellipsis-${String(neighbor)}`;
                            return (_jsx("span", { className: "flex h-8 w-8 items-center justify-center text-muted-foreground", children: "\u2026" }, ellipsisKey));
                        }
                        return (_jsx(Button, { variant: page === p ? "default" : "outline", onClick: () => onPageChange(p), className: cn("h-8 w-8 rounded-lg text-xs font-semibold cursor-pointer", page === p
                                ? "bg-[#0F798C] hover:bg-[#0c6070] text-white"
                                : "border-input text-slate-700 dark:text-slate-200 hover:bg-accent"), children: p }, p));
                    }), _jsx(Button, { variant: "outline", size: "icon", disabled: page >= totalPages, onClick: () => onPageChange(page + 1), className: "h-8 w-8 rounded-lg border-input text-muted-foreground hover:bg-accent cursor-pointer disabled:opacity-40", children: _jsx(ChevronRight, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "outline", size: "icon", disabled: page >= totalPages, onClick: () => onPageChange(totalPages), className: "h-8 w-8 rounded-lg border-input text-muted-foreground hover:bg-accent cursor-pointer disabled:opacity-40", children: _jsx(ChevronsRight, { className: "h-4 w-4" }) })] })] }));
}
function generatePages(current, total) {
    if (total <= 7)
        return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    if (current > 3)
        pages.push("...");
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++)
        pages.push(i);
    if (current < total - 2)
        pages.push("...");
    pages.push(total);
    return pages;
}
//# sourceMappingURL=data-table.js.map