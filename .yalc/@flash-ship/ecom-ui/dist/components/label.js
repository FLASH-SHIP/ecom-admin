import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function Label({ className, ...props }) {
    return (
    // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is provided by consumers via props spread
    _jsx("label", { className: cn("text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className), ...props }));
}
export { Label };
//# sourceMappingURL=label.js.map