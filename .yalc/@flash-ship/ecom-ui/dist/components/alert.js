import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { cva } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
const alertVariants = cva("relative flex gap-3 rounded-lg border p-4 text-sm", {
    variants: {
        variant: {
            default: "border-border bg-background text-foreground",
            info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300",
            success: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300",
            warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
            destructive: "border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const iconMap = {
    default: Info,
    info: Info,
    success: CheckCircle2,
    warning: TriangleAlert,
    destructive: AlertCircle,
};
function Alert({ className, variant = "default", title, children, ...props }) {
    const Icon = iconMap[variant ?? "default"];
    return (_jsxs("div", { role: "alert", className: cn(alertVariants({ variant }), className), ...props, children: [_jsx(Icon, { className: "h-5 w-5 shrink-0 mt-0.5" }), _jsxs("div", { className: "flex-1", children: [title && _jsx("h5", { className: "mb-1 font-medium leading-none", children: title }), _jsx("div", { className: "text-sm opacity-90", children: children })] })] }));
}
export { Alert, alertVariants };
//# sourceMappingURL=alert.js.map