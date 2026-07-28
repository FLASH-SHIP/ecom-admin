"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef } from "react";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = forwardRef(({ className, ...props }, ref) => (_jsx(DialogPrimitive.Overlay, { ref: ref, className: cn("fixed inset-0 z-overlay bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props })));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = forwardRef(({ className, children, ...props }, ref) => (_jsxs(DialogPortal, { children: [_jsx(DialogOverlay, {}), _jsxs(DialogPrimitive.Content, { ref: ref, className: cn("fixed left-[50%] top-[50%] z-modal grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-border bg-card p-6 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 focus-visible:outline-none", className), ...props, children: [children, _jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] })] })] })));
DialogContent.displayName = DialogPrimitive.Content.displayName;
function DialogHeader({ className, ...props }) {
    return (_jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
}
function DialogFooter({ className, ...props }) {
    return (_jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
}
function DialogTitle({ className, ...props }) {
    return (_jsx("h2", { className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
}
function DialogDescription({ className, ...props }) {
    return _jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props });
}
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
//# sourceMappingURL=dialog.js.map