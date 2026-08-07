import { showToast, ToastType } from "@admin/components/toast-provider";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface TRPCErrorLike {
  message?: string;
  data?: {
    errorCode?: string;
    fieldErrors?: Array<{ field: string; message: string }>;
    zodError?: {
      details?: Array<{ field: string; message: string }>;
    };
    [key: string]: unknown;
  };
}

export interface MapErrorOptions<TFieldValues extends FieldValues = FieldValues> {
  /**
   * Custom mapping from ErrorCode (e.g. EMAIL_ALREADY_EXISTS) to form field name.
   */
  codeToFieldMap?: Record<string, Path<TFieldValues>>;

  /**
   * Optional custom translation function for error messages or keys.
   */
  translate?: (keyOrMessage: string) => string;

  /**
   * Whether to automatically focus the first field that receives an error.
   * @default true
   */
  shouldFocus?: boolean;

  /**
   * Custom fallback toast message if no field error is matched.
   */
  fallbackToastMessage?: string;
}

/**
 * Enterprise Form Error Handler for React Hook Form + tRPC.
 *
 * Automatically maps structured backend errors (`fieldErrors` array or `errorCode`)
 * directly into React Hook Form field errors using type-safe Path<TFieldValues>.
 *
 * Smart Toast Suppression: Only displays a global Toast notification if NO form field
 * was mapped to an error, preventing duplicate alert notifications for the user.
 */
function applyFieldErrors<TFieldValues extends FieldValues>(
  rawFieldErrors: Array<{ field: string; message: string }>,
  form: UseFormReturn<TFieldValues>,
  translate: (msg: string) => string,
): Path<TFieldValues> | null {
  let firstMappedField: Path<TFieldValues> | null = null;
  for (const item of rawFieldErrors) {
    if (item.field) {
      const fieldName = item.field as Path<TFieldValues>;
      form.setError(fieldName, {
        type: "server",
        message: translate(item.message),
      });
      if (!firstMappedField) {
        firstMappedField = fieldName;
      }
    }
  }
  return firstMappedField;
}

/**
 * Enterprise Form Error Handler for React Hook Form + tRPC.
 *
 * Automatically maps structured backend errors (`fieldErrors` array or `errorCode`)
 * directly into React Hook Form field errors using type-safe Path<TFieldValues>.
 *
 * Smart Toast Suppression: Only displays a global Toast notification if NO form field
 * was mapped to an error, preventing duplicate alert notifications for the user.
 */
export function mapTRPCErrorToForm<TFieldValues extends FieldValues>(
  err: TRPCErrorLike | null | undefined,
  form: UseFormReturn<TFieldValues>,
  options: MapErrorOptions<TFieldValues> = {},
): boolean {
  if (!err) return false;

  const { codeToFieldMap = {}, translate = (msg) => msg, shouldFocus = true } = options;

  // 1. Extract field errors from structured payload
  const rawFieldErrors = err.data?.fieldErrors ?? err.data?.zodError?.details ?? [];
  let firstMappedField = applyFieldErrors(rawFieldErrors, form, translate);
  let isMapped = Boolean(firstMappedField);

  // 2. Fallback: Map domain ErrorCode if zero field errors were mapped above
  const errorCode = err.data?.errorCode;
  if (!isMapped && errorCode && codeToFieldMap[errorCode]) {
    const targetField = codeToFieldMap[errorCode];
    form.setError(targetField, {
      type: "server",
      message: translate(err.message || errorCode),
    });
    isMapped = true;
    firstMappedField = targetField;
  }

  // 3. Focus the first invalid field if requested
  if (shouldFocus && firstMappedField) {
    form.setFocus(firstMappedField);
  }

  // 4. Smart Toast Suppression:
  if (!isMapped) {
    const toastMsg = translate(options.fallbackToastMessage || err.message || "An error occurred");
    showToast(toastMsg, ToastType.ERROR);
  }

  return isMapped;
}
