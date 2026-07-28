import { type VariantProps } from "class-variance-authority";
declare const alertVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
}
declare function Alert({ className, variant, title, children, ...props }: AlertProps): import("react").JSX.Element;
export { Alert, alertVariants };
//# sourceMappingURL=alert.d.ts.map