"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn("z-[300] w-72 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverContent, PopoverTrigger };
//# sourceMappingURL=popover.js.map