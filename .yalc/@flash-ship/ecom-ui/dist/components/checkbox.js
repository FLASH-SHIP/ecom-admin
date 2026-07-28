"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { forwardRef } from "react";
const Checkbox = forwardRef(({ className, ...props }, ref) => (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn("peer h-4 w-4 shrink-0 rounded-[4px] border border-input shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground", className), ...props, children: _jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: props.checked === "indeterminate" ? (_jsx(Minus, { className: "h-3 w-3" })) : (_jsx(Check, { className: "h-3 w-3" })) }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
//# sourceMappingURL=checkbox.js.map