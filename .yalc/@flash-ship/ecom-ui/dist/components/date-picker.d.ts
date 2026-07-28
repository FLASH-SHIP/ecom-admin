import * as React from "react";
interface DatePickerProps {
    /** Selected date as YYYY-MM-DD string */
    value?: string;
    /** Callback with YYYY-MM-DD string or empty string */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    disabled?: boolean;
    disabledDays?: (date: Date) => boolean;
    className?: string;
}
declare function DatePicker({ value, onChange, placeholder, disabled, disabledDays, className, }: DatePickerProps): React.JSX.Element;
export type { DatePickerProps };
export { DatePicker };
//# sourceMappingURL=date-picker.d.ts.map