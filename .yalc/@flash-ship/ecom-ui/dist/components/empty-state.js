import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { Inbox } from "lucide-react";
function EmptyState({ icon, title, description, action, className }) {
    return (_jsxs("div", { className: cn("flex flex-col items-center justify-center py-16 text-center", className), children: [_jsx("div", { className: "mb-4 rounded-full bg-muted p-4", children: icon ?? _jsx(Inbox, { className: "h-8 w-8 text-muted-foreground" }) }), _jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }), description && (_jsx("p", { className: "mt-1.5 max-w-sm text-sm text-muted-foreground", children: description })), action && _jsx("div", { className: "mt-4", children: action })] }));
}
export { EmptyState };
//# sourceMappingURL=empty-state.js.map