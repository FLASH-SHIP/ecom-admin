"use client";

import {
  ImagePreviewModal as BaseImagePreviewModal,
  type ImagePreviewModalProps as BaseProps,
} from "@flash-ship/ecom-ui";
import { useTranslations } from "next-intl";

export interface ImagePreviewModalProps extends Omit<BaseProps, "loadingText" | "errorText" | "invalidUrlText"> {}

export function ImagePreviewModal(props: ImagePreviewModalProps) {
  const t = useTranslations("topup");

  return (
    <BaseImagePreviewModal
      {...props}
      loadingText={t("dialog.loadingImage")}
      errorText={t("dialog.errorImage")}
      invalidUrlText={t("dialog.invalidImageUrl")}
    />
  );
}
