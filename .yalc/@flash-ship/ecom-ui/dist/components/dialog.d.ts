import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const Dialog: import("react").FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogClose: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: import("react").FC<DialogPrimitive.DialogPortalProps>;
declare const DialogOverlay: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const DialogContent: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
declare function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
declare function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): import("react").JSX.Element;
declare function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): import("react").JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
//# sourceMappingURL=dialog.d.ts.map