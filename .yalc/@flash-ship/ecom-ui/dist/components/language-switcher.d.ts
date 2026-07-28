export interface LanguageTab {
    code: string;
    locale: string;
    name: string;
    flag?: string | null;
    isDefault: boolean;
    hasTranslation?: boolean;
}
interface LanguageSwitcherProps {
    languages: LanguageTab[];
    activeCode: string | null;
    onLanguageChange: (code: string) => void;
    className?: string;
}
/**
 * Reusable language tab bar for content edit forms.
 * Renders horizontal tabs per active language, with flag emoji and translation status.
 *
 * Designed to integrate with URL state (`?ref_lang=...`) following Botble's pattern.
 */
export declare function LanguageSwitcher({ languages, activeCode, onLanguageChange, className, }: LanguageSwitcherProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=language-switcher.d.ts.map