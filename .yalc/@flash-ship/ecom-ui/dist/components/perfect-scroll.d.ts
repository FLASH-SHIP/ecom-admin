import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import type { HTMLAttributes, ReactNode } from "react";
export interface PerfectScrollProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    options?: PerfectScrollbar.Options;
}
/**
 * Drop-in scroll container using perfect-scrollbar (same as Fuse React theme).
 * Renders custom scrollbar DOM elements that show on hover — bypasses macOS
 * overlay scrollbar limitations.
 */
declare const PerfectScroll: import("react").ForwardRefExoticComponent<PerfectScrollProps & import("react").RefAttributes<HTMLDivElement>>;
export { PerfectScroll };
//# sourceMappingURL=perfect-scroll.d.ts.map