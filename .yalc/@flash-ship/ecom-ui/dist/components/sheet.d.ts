import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
declare const Sheet: import("react").FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetClose: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: import("react").FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SheetContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: import("react").ForwardRefExoticComponent<SheetContentProps & import("react").RefAttributes<HTMLDivElement>>;
declare function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
declare function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
declare function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): import("react").JSX.Element;
declare function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, };
//# sourceMappingURL=sheet.d.ts.map