import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "./skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./table";
export function TableSkeleton({ columnCount = 5, rowCount = 5, hasHeader = true, hasCheckbox = false, hasActions = false, className, }) {
    // Array of column keys
    const cols = Array.from({ length: columnCount }, (_, i) => `col-${i}`);
    // Array of row keys
    const rows = Array.from({ length: rowCount }, (_, i) => `row-${i}`);
    return (_jsx("div", { className: className, children: _jsxs(Table, { children: [hasHeader && (_jsx(TableHeader, { children: _jsxs(TableRow, { children: [hasCheckbox && (_jsx(TableHead, { className: "w-12", children: _jsx(Skeleton, { className: "h-4 w-4" }) })), cols.map((colKey) => (_jsx(TableHead, { children: _jsx(Skeleton, { className: "h-4 w-24" }) }, colKey))), hasActions && (_jsx(TableHead, { className: "w-24 text-right", children: _jsx(Skeleton, { className: "h-4 w-16 ml-auto" }) }))] }) })), _jsx(TableBody, { children: rows.map((rowKey, rowIndex) => (_jsxs(TableRow, { children: [hasCheckbox && (_jsx(TableCell, { children: _jsx(Skeleton, { className: "h-4 w-4" }) })), cols.map((colKey, colIndex) => {
                                // Vary width of cells to look more realistic
                                const widths = ["w-2/3", "w-1/2", "w-5/6", "w-3/4", "w-11/12"];
                                const widthClass = widths[(rowIndex + colIndex) % widths.length];
                                return (_jsx(TableCell, { children: _jsx(Skeleton, { className: `h-4 ${widthClass}` }) }, `${rowKey}-${colKey}`));
                            }), hasActions && (_jsx(TableCell, { className: "text-right", children: _jsx(Skeleton, { className: "h-8 w-20 ml-auto rounded-md" }) }))] }, rowKey))) })] }) }));
}
//# sourceMappingURL=table-skeleton.js.map