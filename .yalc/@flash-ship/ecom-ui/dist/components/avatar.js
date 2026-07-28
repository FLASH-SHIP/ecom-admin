"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef } from "react";
const Avatar = forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Root, { ref: ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props })));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Image, { ref: ref, className: cn("aspect-square h-full w-full", className), ...props })));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Fallback, { ref: ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium", className), ...props })));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarFallback, AvatarImage };
//# sourceMappingURL=avatar.js.map