import "next-intl";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: string;
    }
  }
}
