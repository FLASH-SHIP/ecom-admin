import * as React from "react";
interface DateRangePickerProps {
    /** Start date as YYYY-MM-DD string */
    valueFrom?: string;
    /** End date as YYYY-MM-DD string */
    valueTo?: string;
    /** Callback with YYYY-MM-DD strings */
    onChange?: (from: string, to: string) => void;
    onClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
    disableFuture?: boolean;
    maxDays?: number;
    className?: string;
}
declare function DateRangePicker({ valueFrom, valueTo, onChange, onClear, placeholder, disabled, className, }: DateRangePickerProps): React.JSX.Element;
export type { DateRangePickerProps };
export { DateRangePicker };
//# sourceMappingURL=date-range-picker.d.ts.map