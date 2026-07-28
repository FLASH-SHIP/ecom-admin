import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "destructive" | "secondary" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): import("react").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map