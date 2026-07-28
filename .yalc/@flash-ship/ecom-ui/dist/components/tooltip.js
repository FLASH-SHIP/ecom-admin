"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = forwardRef(({ className, ...props }, ref) => (_jsx(TooltipPrimitive.Trigger, { ref: ref, className: cn("cursor-pointer no-underline", className), ...props })));
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;
const TooltipContent = forwardRef(({ className, sideOffset = 6, ...props }, ref) => (_jsx(TooltipPrimitive.Portal, { children: _jsxs(TooltipPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-tooltip overflow-hidden rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg animate-in fade-in-0 zoom-in-95 dark:border-gray-600 dark:bg-gray-800", className), ...props, children: [props.children, _jsx(TooltipPrimitive.Arrow, { className: "fill-gray-900 dark:fill-gray-800", width: 10, height: 5 })] }) })));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
//# sourceMappingURL=tooltip.js.map