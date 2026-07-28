"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { forwardRef } from "react";
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = forwardRef(({ className, children, ...props }, ref) => (_jsxs(SelectPrimitive.Trigger, { ref: ref, className: cn("flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className), ...props, children: [children, _jsx(SelectPrimitive.Icon, { asChild: true, children: _jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })] })));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = forwardRef(({ className, children, position = "popper", ...props }, ref) => (_jsx(SelectPrimitive.Portal, { children: _jsxs(SelectPrimitive.Content, { ref: ref, className: cn("relative z-popover max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", position === "popper" && "translate-y-1", className), position: position, ...props, children: [_jsx(SelectScrollUpButton, {}), _jsx(SelectPrimitive.Viewport, { className: cn("p-1", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), _jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectItem = forwardRef(({ className, children, ...props }, ref) => (_jsxs(SelectPrimitive.Item, { ref: ref, className: cn("relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(Check, { className: "h-4 w-4" }) }) }), _jsx(SelectPrimitive.ItemText, { children: children })] })));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectLabel = forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.Label, { ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectSeparator = forwardRef(({ className, ...props }, ref) => (_jsx(SelectPrimitive.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props })));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
function SelectScrollUpButton({ className, ...props }) {
    return (_jsx(SelectPrimitive.ScrollUpButton, { className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: _jsx(ChevronUp, { className: "h-4 w-4" }) }));
}
function SelectScrollDownButton({ className, ...props }) {
    return (_jsx(SelectPrimitive.ScrollDownButton, { className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: _jsx(ChevronDown, { className: "h-4 w-4" }) }));
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, };
//# sourceMappingURL=select.js.map