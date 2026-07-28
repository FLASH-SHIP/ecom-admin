import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
function Pagination({ currentPage, totalPages, onPageChange, className }) {
    if (totalPages <= 0)
        return null;
    const pages = generatePages(currentPage, totalPages);
    return (_jsxs("nav", { "aria-label": "Pagination", className: cn("flex items-center gap-1", className), children: [_jsx("button", { type: "button", onClick: () => onPageChange(1), disabled: currentPage <= 1, className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition-colors enabled:cursor-pointer enabled:hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:border-border/40", "aria-label": "First page", children: _jsx(ChevronsLeft, { className: "h-4 w-4" }) }), _jsx("button", { type: "button", onClick: () => onPageChange(currentPage - 1), disabled: currentPage <= 1, className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition-colors enabled:cursor-pointer enabled:hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:border-border/40", "aria-label": "Previous page", children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), pages.map((page, i) => {
                if (page === "...") {
                    // Stable key: derived from the neighboring page number (not array index)
                    const neighbor = pages[i + 1] ?? pages[i - 1];
                    const ellipsisKey = `ellipsis-${String(neighbor)}`;
                    return (_jsx("span", { className: "flex h-9 w-9 items-center justify-center text-sm text-muted-foreground", children: "\u2026" }, ellipsisKey));
                }
                return (_jsx("button", { type: "button", onClick: () => onPageChange(page), className: cn("inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors enabled:cursor-pointer", currentPage === page
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border enabled:hover:bg-accent"), "aria-current": currentPage === page ? "page" : undefined, children: page }, page));
            }), _jsx("button", { type: "button", onClick: () => onPageChange(currentPage + 1), disabled: currentPage >= totalPages, className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition-colors enabled:cursor-pointer enabled:hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:border-border/40", "aria-label": "Next page", children: _jsx(ChevronRight, { className: "h-4 w-4" }) }), _jsx("button", { type: "button", onClick: () => onPageChange(totalPages), disabled: currentPage >= totalPages, className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition-colors enabled:cursor-pointer enabled:hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:border-border/40", "aria-label": "Last page", children: _jsx(ChevronsRight, { className: "h-4 w-4" }) })] }));
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
export { Pagination };
//# sourceMappingURL=pagination.js.map