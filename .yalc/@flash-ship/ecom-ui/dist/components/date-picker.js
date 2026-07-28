"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../lib/utils";
import { format, isValid, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
function DatePicker({ value, onChange, placeholder = "dd/mm/yyyy", disabled, disabledDays, className, }) {
    const [open, setOpen] = React.useState(false);
    const selectedDate = React.useMemo(() => {
        if (!value)
            return undefined;
        const d = parse(value, "yyyy-MM-dd", new Date());
        return isValid(d) ? d : undefined;
    }, [value]);
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", disabled: disabled, className: cn("w-full justify-start text-left font-normal", !selectedDate && "text-muted-foreground", className), children: [_jsx(CalendarIcon, { className: "mr-2 size-4" }), selectedDate ? format(selectedDate, "dd/MM/yyyy") : placeholder] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsx(Calendar, { mode: "single", captionLayout: "dropdown", selected: selectedDate, disabled: disabledDays, onSelect: (date) => {
                        onChange?.(date ? format(date, "yyyy-MM-dd") : "");
                        setOpen(false);
                    }, autoFocus: true }) })] }));
}
export { DatePicker };
//# sourceMappingURL=date-picker.js.map