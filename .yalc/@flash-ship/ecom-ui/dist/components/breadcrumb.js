import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { ChevronRight } from "lucide-react";
function Breadcrumb({ items, className }) {
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: cn("flex items-center text-sm", className), children: _jsx("ol", { className: "flex items-center gap-1.5", children: items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (_jsxs("li", { className: "flex items-center gap-1.5", children: [index > 0 && _jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" }), isLast || !item.href ? (_jsx("span", { className: cn(isLast ? "font-medium text-foreground" : "text-muted-foreground"), children: item.label })) : (_jsx("a", { href: item.href, className: "text-muted-foreground transition-colors hover:text-foreground", children: item.label }))] }, item.label));
            }) }) }));
}
export { Breadcrumb };
//# sourceMappingURL=breadcrumb.js.map