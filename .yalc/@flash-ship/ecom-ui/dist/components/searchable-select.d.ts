import * as React from "react";
interface SearchableSelectOption {
    value: string;
    label: string;
    icon?: string;
    separatorAfter?: boolean;
}
interface SearchableSelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    onOptionSelect?: (option: SearchableSelectOption) => void;
    options: SearchableSelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    disabled?: boolean;
    className?: string;
    allowClear?: boolean;
    /** Max height of the dropdown list. Use "none" to show all items. Default: "200px" */
    maxHeight?: string;
    serverSearch?: boolean;
    onSearchChange?: (search: string) => void;
    searchDebounceMs?: number;
    loading?: boolean;
}
declare function SearchableSelect({ value, onValueChange, options, placeholder, searchPlaceholder, disabled, className, allowClear, maxHeight, }: SearchableSelectProps): React.JSX.Element;
export type { SearchableSelectOption, SearchableSelectProps };
export { SearchableSelect };
//# sourceMappingURL=searchable-select.d.ts.map