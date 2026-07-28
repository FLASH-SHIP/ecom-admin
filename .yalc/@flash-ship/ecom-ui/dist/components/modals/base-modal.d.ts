import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type ReactNode } from "react";
export declare const BaseModal: import("react").FC<DialogPrimitive.DialogProps>;
export declare const BaseModalTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const BaseModalClose: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface BaseModalContentProps {
    /**
     * Modal title shown in the header.
     * Tiêu đề hiển thị ở phần header của modal.
     * @default "Select Saved"
     */
    title?: ReactNode;
    /**
     * Placeholder text inside the search input.
     * Văn bản gợi ý bên trong ô tìm kiếm.
     * @default "Search by name / number…"
     */
    searchPlaceholder?: string;
    /**
     * Controlled value of the search input.
     * Giá trị được kiểm soát của ô tìm kiếm (controlled input).
     */
    searchValue?: string;
    /**
     * Called whenever the search input value changes.
     * Được gọi mỗi khi giá trị ô tìm kiếm thay đổi.
     */
    onSearchChange?: (value: string) => void;
    /**
     * Label for the "Create new" action button.
     * Pass `null` to hide the button entirely.
     * Has no effect when `hideSearch` is true.
     * ---
     * Nhãn hiển thị trên nút "Tạo mới".
     * Truyền `null` để ẩn nút này hoàn toàn.
     * Không có tác dụng khi `hideSearch` là `true`.
     * @default "Create new"
     */
    createLabel?: string | null;
    /**
     * Called when the "Create new" button is clicked.
     * Được gọi khi người dùng nhấn nút "Tạo mới".
     */
    onCreateNew?: () => void;
    /**
     * When `true`, hides the search bar + create-button row entirely.
     * Use this for form-style modals where you provide your own body content
     * (e.g. a "New Address" form).
     * ---
     * Khi `true`, ẩn toàn bộ hàng tìm kiếm + nút tạo mới.
     * Dùng cho các modal dạng form (ví dụ: form "Địa chỉ mới") khi bạn
     * tự cung cấp nội dung body thay vì danh sách gợi ý.
     * @default false
     */
    hideSearch?: boolean;
    /**
     * Content rendered inside the scrollable body.
     * Can be list items (`<BaseModalItem>`) or any custom form fields.
     * ---
     * Nội dung hiển thị bên trong vùng có thể cuộn.
     * Có thể là các item danh sách (`<BaseModalItem>`) hoặc bất kỳ
     * form field tuỳ chỉnh nào.
     */
    children?: ReactNode;
    /**
     * Extra CSS class names applied to the modal panel.
     * CSS class bổ sung áp dụng lên panel của modal.
     */
    className?: string;
    /**
     * Node displayed when there are no items and `isLoading` is `false`.
     * If omitted, a default "No items found." message is shown.
     * ---
     * Nội dung hiển thị khi không có item nào và `isLoading` là `false`.
     * Nếu không truyền, hiển thị thông báo mặc định "No items found."
     */
    emptyState?: ReactNode;
    /**
     * When `true`, shows skeleton placeholder rows instead of `children`.
     * Khi `true`, hiển thị các hàng skeleton thay thế cho `children` trong
     * lúc đang tải dữ liệu.
     * @default false
     */
    isLoading?: boolean;
    /**
     * CSS `max-height` value for the scrollable body area.
     * Increase this if you have many items or tall form content.
     * ---
     * Giá trị CSS `max-height` cho vùng có thể cuộn.
     * Tăng lên nếu bạn có nhiều item hoặc nội dung form dài.
     * @default "420px"
     */
    listMaxHeight?: string;
    /**
     * Optional footer content rendered **below** the scrollable body and
     * **outside** the scroll container. Typically used for action buttons
     * such as Cancel / Submit. The footer is right-aligned by default
     * and separated from the body with a top border.
     * ---
     * Nội dung footer tuỳ chọn hiển thị **bên dưới** vùng cuộn và
     * **ngoài** container cuộn. Thường dùng cho các nút hành động như
     * Huỷ / Xác nhận. Footer được căn phải mặc định và ngăn cách với
     * phần body bằng một đường viền phía trên.
     */
    footer?: ReactNode;
}
export declare function BaseModalContent({ title, searchPlaceholder, searchValue, onSearchChange, createLabel, onCreateNew, hideSearch, children, className, emptyState, isLoading, listMaxHeight, footer, }: BaseModalContentProps): import("react").JSX.Element;
export interface BaseModalItemProps {
    /**
     * Primary label displayed at the top-left of the row. Usually the full name.
     * Nhãn chính hiển thị ở góc trên-trái của hàng. Thường là tên đầy đủ.
     */
    name: string;
    /**
     * Inline secondary text shown right after the name, separated by a pipe `|`.
     * Useful for phone numbers, IDs, or any short identifiers.
     * ---
     * Văn bản phụ hiển thị cùng hàng với tên, ngăn cách bởi dấu `|`.
     * Thường dùng cho số điện thoại, mã ID, hoặc bất kỳ định danh ngắn nào.
     */
    meta?: string;
    /**
     * Second line of text below the name row. Useful for street addresses,
     * descriptions, or any additional detail.
     * ---
     * Dòng văn bản thứ hai bên dưới hàng tên. Thường dùng cho địa chỉ đường phố,
     * mô tả, hoặc bất kỳ thông tin bổ sung nào.
     */
    description?: string;
    /**
     * Small text badge rendered below the description. Typically a country code
     * (e.g. `"US"`, `"VN"`) or a category label.
     * ---
     * Nhãn nhỏ hiển thị bên dưới description. Thường là mã quốc gia
     * (ví dụ: `"US"`, `"VN"`) hoặc nhãn phân loại.
     */
    badge?: string;
    /**
     * Action buttons rendered on the right side of the row.
     * Typical examples: "Set Default" and "Edit" buttons.
     * ---
     * Các nút hành động hiển thị bên phải của hàng.
     * Ví dụ thường gặp: nút "Đặt mặc định" và "Chỉnh sửa".
     */
    actions?: ReactNode;
    /**
     * If provided, the **entire row** becomes a clickable `<button>` element.
     * Useful for single-click selection flows without separate action buttons.
     * When omitted the row renders as a plain `<div>`.
     * ---
     * Nếu được truyền vào, **toàn bộ hàng** trở thành phần tử `<button>` có thể
     * nhấn. Hữu ích cho luồng chọn 1-click mà không cần các nút hành động riêng.
     * Khi không truyền, hàng render dưới dạng `<div>` thông thường.
     */
    onClick?: () => void;
    /**
     * Extra CSS class names applied to the row container.
     * CSS class bổ sung áp dụng lên container của hàng.
     */
    className?: string;
}
export declare function BaseModalItem({ name, meta, description, badge, actions, onClick, className, }: BaseModalItemProps): import("react").JSX.Element;
//# sourceMappingURL=base-modal.d.ts.map