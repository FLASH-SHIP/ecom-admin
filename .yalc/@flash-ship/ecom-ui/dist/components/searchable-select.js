"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../lib/utils";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import * as React from "react";
function SearchableSelect({ value, onValueChange, options, placeholder = "Select...", searchPlaceholder = "Search...", disabled, className, allowClear = true, maxHeight = "200px", }) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const selectedOption = options.find((opt) => opt.value === value);
    const filteredOptions = React.useMemo(() => {
        if (!search.trim())
            return options;
        const q = search.toLowerCase();
        return options.filter((opt) => opt.label.toLowerCase().includes(q));
    }, [options, search]);
    const handleSelect = (optionValue) => {
        onValueChange?.(optionValue === value ? "" : optionValue);
        setOpen(false);
        setSearch("");
    };
    const _handleClear = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onValueChange?.("");
        setOpen(false);
    };
    const showClear = allowClear && selectedOption && !disabled;
    return (_jsxs(Popover, { open: open, onOpenChange: (isOpen) => {
            setOpen(isOpen);
            if (!isOpen)
                setSearch("");
        }, modal: true, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", role: "combobox", "aria-expanded": open, disabled: disabled, className: cn("w-full justify-between font-normal", !selectedOption && "text-muted-foreground", className), children: [_jsxs("span", { className: "truncate", children: [selectedOption?.icon && (_jsx("span", { className: "mr-1.5 inline-block w-4 text-center font-mono text-xs text-muted-foreground", children: selectedOption.icon })), selectedOption ? selectedOption.label : placeholder] }), _jsxs("span", { className: "ml-auto flex shrink-0 items-center gap-1", children: [showClear && (
                                // biome-ignore lint/a11y/useSemanticElements: nested button is invalid HTML
                                _jsx("span", { role: "button", tabIndex: -1, "aria-label": "Clear selection", onPointerDownCapture: (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onValueChange?.("");
                                    }, className: "rounded-sm p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer inline-flex items-center justify-center", children: _jsx(X, { className: "size-3.5" }) })), _jsx("span", { "aria-hidden": "true", className: "rounded-sm p-0.5 text-muted-foreground hover:text-foreground", children: _jsx(ChevronsUpDown, { className: "size-3.5 shrink-0" }) })] })] }) }), _jsxs(PopoverContent, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [_jsxs("div", { className: "flex items-center border-b border-border px-2.5 py-2", children: [_jsx(Search, { className: "mr-2 size-3.5 shrink-0 text-muted-foreground" }), _jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: searchPlaceholder, className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" })] }), _jsx("div", { className: "overflow-y-auto p-1", style: { maxHeight }, children: filteredOptions.length === 0 ? (_jsx("div", { className: "py-4 text-center text-sm text-muted-foreground", children: "No results found." })) : (filteredOptions.map((opt) => (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: () => handleSelect(opt.value), className: cn("flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground", value === opt.value && "font-medium"), children: [_jsx(Check, { className: cn("size-3.5 shrink-0", value === opt.value ? "opacity-100" : "opacity-0") }), opt.icon && (_jsx("span", { className: "inline-block w-4 text-center font-mono text-xs text-muted-foreground", children: opt.icon })), _jsx("span", { className: "truncate", children: opt.label })] }), opt.separatorAfter && _jsx("div", { className: "my-1 h-px bg-border" })] }, opt.value)))) })] })] }));
}
export { SearchableSelect };
//# sourceMappingURL=searchable-select.js.map