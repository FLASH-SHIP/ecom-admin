export type ContentStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED" | "PENDING" | "REVIEW" | "REJECTED";
export type CustomerStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";
export type VerificationCodeStatus = "PENDING" | "VERIFIED" | "EXPIRED";
export type OrderStatus =
  | "DRAFT"
  | "PENDING_LABEL"
  | "LABEL_CREATED"
  | "WAITING_FOR_PICKUP"
  | "PICKED_UP"
  | "RECEIVED_AT_ORIGIN_WAREHOUSE"
  | "EXPORT_CUSTOMS_CLEARANCE"
  | "DEPARTED_ORIGIN_COUNTRY"
  | "INTERNATIONAL_TRANSIT"
  | "ARRIVED_AT_DESTINATION_COUNTRY"
  | "IMPORT_CUSTOMS_CLEARANCE"
  | "RECEIVED_BY_LAST_MILE_CARRIER"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "DELIVERY_FAILED"
  | "CUSTOMS_HOLD"
  | "RETURN_TO_SENDER"
  | "RETURNED"
  | "CANCELLED"
  | "EXCEPTION";

export type GroupOrderStatus =
  | "LABEL_NOT_CREATED"
  | "LABEL_CREATED"
  | "WE_HAVE_YOUR_PACKAGE"
  | "ON_THE_WAY"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELLED"
  | "EXCEPTION";
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
