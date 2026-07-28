"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { cn } from "../lib/utils";
import { forwardRef, useEffect, useRef } from "react";
/**
 * Drop-in scroll container using perfect-scrollbar (same as Fuse React theme).
 * Renders custom scrollbar DOM elements that show on hover — bypasses macOS
 * overlay scrollbar limitations.
 */
const PerfectScroll = forwardRef(({ children, className, options, ...props }, ref) => {
    const containerRef = useRef(null);
    const psRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        psRef.current = new PerfectScrollbar(containerRef.current, {
            wheelPropagation: true,
            ...options,
        });
        return () => {
            if (psRef.current) {
                psRef.current.destroy();
                psRef.current = null;
            }
        };
    }, [options]);
    // Update perfect-scrollbar when children change
    useEffect(() => {
        psRef.current?.update();
    });
    return (_jsx("div", { ref: (el) => {
            containerRef.current = el;
            if (typeof ref === "function") {
                ref(el);
            }
            else if (ref) {
                ref.current = el;
            }
        }, className: cn("relative", className), style: { overflow: "hidden", ...props.style }, ...props, children: children }));
});
PerfectScroll.displayName = "PerfectScroll";
export { PerfectScroll };
//# sourceMappingURL=perfect-scroll.js.map