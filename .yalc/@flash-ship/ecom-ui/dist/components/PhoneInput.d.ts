import * as React from "react";
export interface Country {
    code: string;
    dial: string;
    name: string;
    flag: string;
}
export declare const COUNTRIES: Country[];
interface PhoneInputProps {
    value?: string | null;
    onChange?: (value: string) => void;
    label?: string;
    error?: string;
    disabled?: boolean;
    id?: string;
    placeholder?: string;
}
export declare function PhoneInput({ value, onChange, label, error, disabled, id, placeholder, }: PhoneInputProps): React.JSX.Element;
export {};
//# sourceMappingURL=PhoneInput.d.ts.map