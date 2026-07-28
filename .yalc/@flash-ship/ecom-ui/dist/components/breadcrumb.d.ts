interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}
declare function Breadcrumb({ items, className }: BreadcrumbProps): import("react").JSX.Element;
export type { BreadcrumbItem, BreadcrumbProps };
export { Breadcrumb };
//# sourceMappingURL=breadcrumb.d.ts.map