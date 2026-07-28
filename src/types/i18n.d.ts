// biome-ignore lint/suspicious/noExplicitAny: allow flexible translation key resolution across dynamic namespaces
export type Messages = Record<string, any>;

declare global {
  // Use flexible translation keys to support dynamic module namespaces
  // biome-ignore lint/suspicious/noExplicitAny: allow flexible translation key resolution
  interface IntlMessages extends Record<string, any> {}
}
