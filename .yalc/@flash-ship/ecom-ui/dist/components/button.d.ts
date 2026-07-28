import { type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare function Button({ className, variant, size, asChild, ...props }: ButtonProps): import("react").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map