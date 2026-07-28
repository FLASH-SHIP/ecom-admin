"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "../button";
import { CloseIcon } from "../icon-component/CloseIcon";
import { cn } from "../../lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Plus, Search } from "lucide-react";
import { useId } from "react";
// ---------------------------------------------------------------------------
// Overlay (internal)
// ---------------------------------------------------------------------------
function BaseModalOverlay() {
    return (_jsx(DialogPrimitive.Overlay, { className: "fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }));
}
// ---------------------------------------------------------------------------
// Root re-exports — for convenient co-located usage
// Root re-exports — dùng trực tiếp thay vì import từ @radix-ui/react-dialog
// ---------------------------------------------------------------------------
export const BaseModal = DialogPrimitive.Root;
export const BaseModalTrigger = DialogPrimitive.Trigger;
export const BaseModalClose = DialogPrimitive.Close;
// ---------------------------------------------------------------------------
// Content panel
// ---------------------------------------------------------------------------
export function BaseModalContent({ title = "Select Saved", searchPlaceholder = "Search by name / number…", searchValue, onSearchChange, createLabel = "Create new", onCreateNew, hideSearch = false, children, className, emptyState, isLoading = false, listMaxHeight, footer, }) {
    const searchId = useId();
    return (_jsxs(DialogPrimitive.Portal, { children: [_jsx(BaseModalOverlay, {}), _jsxs(DialogPrimitive.Content, { onInteractOutside: (e) => {
                    // Prevent Dialog from closing when user clicks inside a Radix
                    // Select / Popover portal that is rendered outside the Dialog DOM.
                    const target = e.target;
                    if (target?.closest("[data-radix-select-content]") ||
                        target?.closest("[data-radix-popper-content-wrapper]")) {
                        e.preventDefault();
                    }
                }, className: cn(
                // positioning
                "fixed left-1/2 top-1/2 z-[201] -translate-x-1/2 -translate-y-1/2", 
                // sizing — Figma designed width 862px, max-height leaves 1rem space top & bottom
                "w-[calc(100vw-2rem)] max-w-[862px] max-h-[calc(100vh-2rem)]", 
                // panel
                "flex flex-col rounded-lg bg-background shadow-xl overflow-hidden", 
                // animation
                "duration-200", "data-[state=open]:animate-in data-[state=closed]:animate-out", "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className), children: [_jsxs("div", { className: "flex items-center justify-between px-6 py-6 border-b border-border shrink-0", children: [_jsx(DialogPrimitive.Title, { className: "text-xl font-semibold leading-6 text-foreground", children: title }), _jsx(DialogPrimitive.Close, { "aria-label": "Close", className: "rounded-md p-1.5 !text-[#0A0A0A] text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: _jsx(CloseIcon, { className: "h-[10px] w-[10px]" }) })] }), !hideSearch && (_jsxs("div", { className: "flex items-center gap-4 px-6 py-4 shrink-0", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx("input", { id: searchId, type: "text", value: searchValue, onChange: (e) => onSearchChange?.(e.target.value), placeholder: searchPlaceholder, className: cn("h-[52px] w-full rounded-lg border border-input bg-background", "pl-9 pr-4 text-sm text-foreground", "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]", "placeholder:text-muted-foreground", "focus:outline-none focus-visible:ring-1 focus-visible:ring-ring", "transition-colors duration-200") })] }), createLabel !== null && (_jsxs(Button, { type: "button", onClick: onCreateNew, className: "h-9 lg:h-10 xl:h-11 2xl:h-[52px] shrink-0 rounded-[10px] px-4 text-xl font-medium", children: [_jsx(Plus, { "data-icon": "inline-start" }), createLabel] }))] })), _jsx("div", { className: cn("flex flex-col gap-[10px] overflow-y-auto px-6 flex-1 min-h-0", 
                        // Add top padding when search row is hidden so content
                        // doesn't sit flush against the header border (Figma: 16px gap)
                        hideSearch ? "pt-4" : "pt-0", 
                        // When a footer is present, reduce bottom padding so the footer
                        // sits flush; otherwise keep the original 24px bottom padding.
                        footer ? "pb-4" : "pb-6"), style: listMaxHeight ? { maxHeight: listMaxHeight } : undefined, children: isLoading ? (_jsx(BaseModalSkeleton, {})) : children ? (children) : ((emptyState ?? (_jsx("p", { className: "py-8 text-center text-sm text-muted-foreground", children: "No items found." })))) }), footer && (_jsx("div", { className: "shrink-0 flex items-center justify-end gap-4 border-t border-border px-6 py-4", children: footer }))] })] }));
}
export function BaseModalItem({ name, meta, description, badge, actions, onClick, className, }) {
    const sharedClassName = cn("flex items-center justify-between gap-5 rounded-lg border border-border bg-background", "px-5 py-[14px]", "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]", "transition-colors duration-150", className);
    if (onClick) {
        return (_jsxs("button", { type: "button", onClick: onClick, className: cn(sharedClassName, "w-full text-left cursor-pointer hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"), children: [_jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("span", { className: "text-base font-medium text-foreground", children: name }), meta && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-base font-medium text-muted-foreground", children: "|" }), _jsx("span", { className: "text-base font-medium text-muted-foreground", children: meta })] }))] }), description && (_jsx("span", { className: "truncate text-sm text-muted-foreground", children: description })), badge && (_jsx("span", { className: "mt-0.5 inline-block w-fit text-sm font-medium text-primary", children: badge }))] }), actions && _jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })] }));
    }
    return (_jsxs("div", { className: sharedClassName, children: [_jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("span", { className: "text-base font-medium text-foreground", children: name }), meta && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-base font-medium text-muted-foreground", children: "|" }), _jsx("span", { className: "text-base font-medium text-muted-foreground", children: meta })] }))] }), description && (_jsx("span", { className: "truncate text-sm text-muted-foreground", children: description })), badge && (_jsx("span", { className: "mt-0.5 inline-block w-fit text-sm font-medium text-primary", children: badge }))] }), actions && _jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })] }));
}
// ---------------------------------------------------------------------------
// Skeleton loader — shown when isLoading=true
// ---------------------------------------------------------------------------
const SKELETON_KEYS = ["skeleton-a", "skeleton-b", "skeleton-c"];
function BaseModalSkeleton() {
    return (_jsx(_Fragment, { children: SKELETON_KEYS.map((key) => (_jsxs("div", { className: "flex animate-pulse items-center justify-between rounded-lg border border-border bg-background px-5 py-[14px]", children: [_jsxs("div", { className: "flex flex-1 flex-col gap-2", children: [_jsx("div", { className: "h-4 w-40 rounded bg-muted" }), _jsx("div", { className: "h-3 w-56 rounded bg-muted" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "h-10 w-24 rounded-[10px] bg-muted" }), _jsx("div", { className: "h-10 w-16 rounded-[10px] bg-muted" })] })] }, key))) }));
}
//# sourceMappingURL=base-modal.js.map