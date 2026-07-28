"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../lib/utils";
import { format, isValid, parse } from "date-fns";
import { CalendarIcon, XIcon } from "lucide-react";
import * as React from "react";
function parseDateStr(val) {
    if (!val)
        return undefined;
    const d = parse(val, "yyyy-MM-dd", new Date());
    return isValid(d) ? d : undefined;
}
function DateRangePicker({ valueFrom, valueTo, onChange, onClear, placeholder = "dd/mm/yyyy — dd/mm/yyyy", disabled, className, }) {
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = React.useState("awaiting-from");
    // Internal range shown while the popover is open
    const [localRange, setLocalRange] = React.useState(undefined);
    // Committed range from parent props
    const committedRange = React.useMemo(() => {
        const from = parseDateStr(valueFrom);
        if (!from)
            return undefined;
        return { from, to: parseDateStr(valueTo) };
    }, [valueFrom, valueTo]);
    // When the popover opens, seed localRange from committed and reset step
    const handleOpenChange = React.useCallback((isOpen) => {
        // Block external close while in mid-selection
        if (!isOpen && step === "awaiting-to")
            return;
        setOpen(isOpen);
        if (isOpen) {
            setLocalRange(committedRange);
            setStep("awaiting-from");
        }
        else {
            setLocalRange(undefined);
            setStep("awaiting-from");
        }
    }, [committedRange, step]);
    // Display whichever range is relevant
    const displayRange = open ? localRange : committedRange;
    const displayText = React.useMemo(() => {
        if (!displayRange?.from)
            return placeholder;
        const fromStr = format(displayRange.from, "dd/MM/yyyy");
        if (!displayRange.to)
            return fromStr;
        return `${fromStr} — ${format(displayRange.to, "dd/MM/yyyy")}`;
    }, [displayRange, placeholder]);
    const handleDayClick = React.useCallback((day) => {
        if (step === "awaiting-from") {
            // First click: set from, clear to
            setLocalRange({ from: day, to: undefined });
            setStep("awaiting-to");
        }
        else {
            // Second click: set to (ensure from <= to)
            const from = localRange?.from;
            if (!from)
                return;
            let finalFrom;
            let finalTo;
            if (day < from) {
                finalFrom = day;
                finalTo = from;
            }
            else {
                finalFrom = from;
                finalTo = day;
            }
            setLocalRange({ from: finalFrom, to: finalTo });
            onChange?.(format(finalFrom, "yyyy-MM-dd"), format(finalTo, "yyyy-MM-dd"));
            setStep("awaiting-from");
            setOpen(false);
        }
    }, [step, localRange, onChange]);
    // Prevent Radix auto-close events while mid-selection
    const preventCloseWhilePending = React.useCallback((e) => {
        if (step === "awaiting-to") {
            e.preventDefault();
        }
    }, [step]);
    return (_jsxs(Popover, { open: open, onOpenChange: handleOpenChange, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", disabled: disabled, className: cn("w-full justify-start text-left font-normal", !displayRange?.from && "text-muted-foreground", className), children: [_jsx(CalendarIcon, { className: "mr-2 size-4 shrink-0" }), _jsx("span", { className: "truncate flex-1", children: displayText }), committedRange?.from && !disabled && (_jsx("span", { role: "button", tabIndex: 0, "aria-label": "Clear date range", className: "ml-1 shrink-0 rounded-sm opacity-50 hover:opacity-100 transition-opacity focus:outline-none focus:ring-1 focus:ring-ring", onClick: (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onClear?.();
                            }, onKeyDown: (e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onClear?.();
                                }
                            }, children: _jsx(XIcon, { className: "size-3.5" }) }))] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", onInteractOutside: preventCloseWhilePending, onFocusOutside: preventCloseWhilePending, children: _jsx(Calendar, { mode: "range", captionLayout: "dropdown", selected: localRange, onDayClick: handleDayClick, numberOfMonths: 2, autoFocus: true }) })] }));
}
export { DateRangePicker };
//# sourceMappingURL=date-range-picker.js.map