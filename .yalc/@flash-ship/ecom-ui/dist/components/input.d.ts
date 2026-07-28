import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hidePasswordToggle?: boolean;
    showPasswordLabel?: string;
    hidePasswordLabel?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map