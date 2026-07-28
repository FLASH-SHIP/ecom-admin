"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, } from "./icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./select";
import { cn } from "../lib/utils";
import * as React from "react";
export function PaginationBase({ currentPage, totalItems, perPage, onPageChange, onPerPageChange, perPageOptions = [5, 10, 20, 50], itemType = "items", className, renderRangeText, }) {
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const pages = React.useMemo(() => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        const list = [1];
        if (currentPage > 3) {
            list.push("...");
        }
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) {
            list.push(i);
        }
        if (currentPage < totalPages - 2) {
            list.push("...");
        }
        list.push(totalPages);
        return list;
    }, [currentPage, totalPages]);
    const fromItem = totalItems === 0 ? 0 : (currentPage - 1) * perPage + 1;
    const toItem = Math.min(currentPage * perPage, totalItems);
    return (_jsxs("div", { className: cn("flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 border-t border-border bg-white rounded-b-xl", className), children: [_jsxs("div", { className: "flex items-center gap-3 text-sm text-[#4E4E4E]", children: [onPerPageChange && (_jsxs(Select, { value: String(perPage), onValueChange: (val) => onPerPageChange(Number(val)), children: [_jsx(SelectTrigger, { className: "!h-[28px] w-[56px] px-2.5 bg-white border-[#DADADA] text-xs font-semibold rounded-md shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none", children: _jsx(SelectValue, { placeholder: String(perPage) }) }), _jsx(SelectContent, { className: "min-w-[60px]", children: perPageOptions.map((opt) => (_jsx(SelectItem, { value: String(opt), className: "text-xs", children: opt }, opt))) })] })), _jsx("span", { className: "text-sm", children: renderRangeText ? (renderRangeText(fromItem, toItem, totalItems, itemType)) : (_jsxs(_Fragment, { children: ["Showing ", fromItem, "-", toItem, " of", " ", _jsx("span", { className: "text-[#4277DB] font-semibold", children: totalItems }), " ", itemType] })) })] }), _jsxs("nav", { "aria-label": "Pagination", className: "flex items-center gap-1", children: [_jsx("button", { type: "button", onClick: () => onPageChange(1), disabled: currentPage <= 1, className: "inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#DADADA] bg-white text-[#232323] hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors", "aria-label": "First page", children: _jsx(ChevronLeftIcon, {}) }), _jsx("button", { type: "button", onClick: () => onPageChange(currentPage - 1), disabled: currentPage <= 1, className: "inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#DADADA] bg-white text-[#232323] hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors", "aria-label": "Previous page", children: _jsx(ChevronsLeftIcon, {}) }), pages.map((page, index) => {
                        if (page === "...") {
                            const neighbor = pages[index + 1] ?? pages[index - 1];
                            const ellipsisKey = `ellipsis-${String(neighbor)}`;
                            return (_jsx("span", { className: "flex h-8 w-6 items-center justify-center text-sm text-muted-foreground/60 select-none font-medium", children: "\u2026" }, ellipsisKey));
                        }
                        const isCurrent = currentPage === page;
                        return (_jsx("button", { type: "button", onClick: () => onPageChange(page), className: cn("inline-flex h-8 w-8 items-center justify-center rounded-[4px] text-xs font-semibold transition-colors cursor-pointer", isCurrent
                                ? "bg-[#0F798C] text-white border border-[#0F798C]"
                                : "border border-[#DADADA] bg-white text-foreground hover:bg-accent"), "aria-current": isCurrent ? "page" : undefined, children: page }, page));
                    }), _jsx("button", { type: "button", onClick: () => onPageChange(currentPage + 1), disabled: currentPage >= totalPages, className: "inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#DADADA] bg-white text-[#232323] hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors", "aria-label": "Next page", children: _jsx(ChevronRightIcon, {}) }), _jsx("button", { type: "button", onClick: () => onPageChange(totalPages), disabled: currentPage >= totalPages, className: "inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#DADADA] bg-white text-[#232323] hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors", "aria-label": "Last page", children: _jsx(ChevronsRightIcon, {}) })] })] }));
}
//# sourceMappingURL=pagination-base.js.map