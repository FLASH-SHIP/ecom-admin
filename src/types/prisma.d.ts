export type ContentStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED" | "PENDING" | "REVIEW" | "REJECTED";
export type CustomerStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";
export type VerificationCodeStatus = "PENDING" | "VERIFIED" | "EXPIRED";
export type OrderStatus =
  | "DRAFT"
  | "PENDING"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED"
  | "LABEL_CREATED"
  | "PENDING_LABEL"
  | "PACKAGE_RECEIVED"
  | "ON_THE_WAY"
  | "PICK_UP"
  | "DELIVERY";
export type PackingBoxType = "BOX" | "BAG" | "PALLET" | "ENVELOPE";
export type RateCardStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "DRAFT"
  | "ARCHIVED"
  | "PUBLISHED"
  | "PENDING"
  | "REVIEW"
  | "REJECTED";
export type RateCardType = "DEFAULT" | "CUSTOM" | "STANDARD" | "SPECIAL" | "PROMOTIONAL";
export type ShippingMethod = "EXPRESS" | "EPACKET" | "AIR" | "SEA" | "GROUND";
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[];

// biome-ignore lint/suspicious/noExplicitAny: frontend mock Prisma client type
export type PrismaClient = any;
// biome-ignore lint/suspicious/noExplicitAny: frontend mock Prisma namespace
export namespace Prisma {
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type ModelName = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type InputJsonObject = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type InputJsonValue = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type JsonValue = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type FieldGroupWhereInput = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export type FieldGroupOrderByWithRelationInput = any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export const TransactionIsolationLevel: any = {};
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export const JsonNull: any = null;
  export class PrismaClientKnownRequestError extends Error {
    code?: string;
  }
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export function join(val: any): any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export function raw(val: any): any;
  // biome-ignore lint/suspicious/noExplicitAny: mock
  export function sql(strings: any, ...values: any[]): any;
}
// biome-ignore lint/suspicious/noExplicitAny: frontend mock prisma instance
export const prisma: any = {};
