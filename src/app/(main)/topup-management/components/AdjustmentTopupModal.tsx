"use client";

import { useToast } from "@admin/components/toast-provider";
import { trpc } from "@admin/lib/trpc";
import { DatePicker } from "@flash-ship/ecom-ui";
import { Badge } from "@flash-ship/ecom-ui/components/badge";
import { Button } from "@flash-ship/ecom-ui/components/button";
import { Card } from "@flash-ship/ecom-ui/components/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Input } from "@flash-ship/ecom-ui/components/input";
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ImageIcon,
  Info,
  Loader2,
  Plus,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { ImagePreviewModal } from "./ImagePreviewModal";
import type { TopupTransactionRow } from "./TopupManagementContent";

export interface AdjustmentTopupModalProps {
  transaction: TopupTransactionRow | null;
  onClose: () => void;
  onSuccess: () => void;
}

interface UploadedImageItem {
  id: string;
  url: string;
  file: File;
}

export function AdjustmentTopupModal({
  transaction,
  onClose,
  onSuccess,
}: AdjustmentTopupModalProps) {
  const t = useTranslations("topup");
  const { toast } = useToast();
  const utils = trpc.useUtils();

  // Copy State
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast(t("dialog.copiedTransactionCode") || "Đã sao chép mã giao dịch vào bộ nhớ tạm!", "info");
    setTimeout(() => setCopiedCode(false), 2000);
  };
  const [wireDate, setWireDate] = useState<string>("");
  const [wireAmountUsd, setWireAmountUsd] = useState<string>("");
  const [wireAmountVnd, setWireAmountVnd] = useState<string>("");
  const [activeInput, setActiveInput] = useState<"usd" | "vnd" | null>(null);

  // Upload States
  const [uploadedFiles, setUploadedFiles] = useState<UploadedImageItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preview Image Modal state for existing/uploaded images
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // Refs for uploaded images scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const adjustMutation = trpc.customer.topup.adjust.useMutation();

  // Extract existing wire image URLs
  const existingWireImages: string[] = (transaction?.wireImages ?? [])
    .map((img: any) => (typeof img === "string" ? img : img?.imageUrl || img?.url || ""))
    .filter(Boolean);

  // Determine if payment method is bank
  const isBank = Boolean(transaction?.paymentMethodIsBank);

  // Initialize form state when transaction changes
  useEffect(() => {
    if (transaction) {
      const initialDate = transaction.wireDate
        ? new Date(transaction.wireDate).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];
      setWireDate(initialDate);

      const initialUsd = transaction.wireAmountApproved
        ? String(transaction.wireAmountApproved)
        : String(transaction.wireAmount || "");
      setWireAmountUsd(initialUsd);
      setActiveInput("usd");
      setUploadedFiles([]);
      setErrorMessage(null);
    }
  }, [transaction]);

  // Query exchange rate according to selected wireDate
  const { data: exchangeRateData } = trpc.customer.topup.getLatestExchangeRate.useQuery(
    wireDate ? { date: wireDate } : undefined,
    { enabled: Boolean(transaction && isBank && wireDate) },
  );

  const exchangeRate =
    typeof exchangeRateData === "number" && exchangeRateData > 0 ? exchangeRateData : 25000;

  // Debounce 1s USD -> VND
  useEffect(() => {
    if (activeInput !== "usd" || !isBank) return;
    const timer = setTimeout(() => {
      if (!wireAmountUsd) {
        setWireAmountVnd("");
        return;
      }
      const num = parseFloat(wireAmountUsd);
      if (!Number.isNaN(num)) {
        const vnd = Math.round(num * exchangeRate);
        setWireAmountVnd(vnd.toLocaleString("vi-VN"));
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [wireAmountUsd, exchangeRate, activeInput, isBank]);

  // Debounce 1s VND -> USD
  useEffect(() => {
    if (activeInput !== "vnd" || !isBank) return;
    const timer = setTimeout(() => {
      if (!wireAmountVnd) {
        setWireAmountUsd("");
        return;
      }
      const cleanDigits = wireAmountVnd.replace(/[^0-9]/g, "");
      const num = Number.parseInt(cleanDigits, 10);
      if (!Number.isNaN(num)) {
        const usd = (num / exchangeRate).toFixed(2);
        setWireAmountUsd(usd);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [wireAmountVnd, exchangeRate, activeInput, isBank]);

  // Input Handlers
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val && !/^[0-9.]*$/.test(val)) {
      setErrorMessage(t("dialog.invalidAmountError") || "Số tiền nạp chỉ được nhập số.");
      return;
    }
    if (val.includes(".")) {
      const parts = val.split(".");
      if (parts[1] && parts[1].length > 2) {
        setErrorMessage(t("dialog.invalidAmountError") || "Số tiền USD tối đa 2 chữ số thập phân.");
        return;
      }
    }
    setErrorMessage(null);
    setActiveInput("usd");
    setWireAmountUsd(val);
  };

  const handleVndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const cleanDigits = val.replace(/[^0-9]/g, "");
    if (val && !/^[0-9,.]*$/.test(val)) {
      setErrorMessage(t("dialog.invalidAmountError") || "Số tiền chỉ được nhập chữ số.");
      return;
    }
    setErrorMessage(null);
    setActiveInput("vnd");
    const num = Number.parseInt(cleanDigits, 10);
    setWireAmountVnd(Number.isNaN(num) ? "" : num.toLocaleString("vi-VN"));
  };

  // Scroll Position Check
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  useEffect(() => {
    checkScrollPosition();
  }, [uploadedFiles]);

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  // File Upload Processors
  const processFiles = (files: File[]) => {
    if (uploadedFiles.length + files.length > 10) {
      setErrorMessage(t("dialog.maxFilesText") || "Bạn chỉ được tải lên tối đa 10 ảnh.");
      return;
    }

    const validNewItems: UploadedImageItem[] = [];

    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage(t("dialog.uploadNote") || "Dung lượng mỗi ảnh không được vượt quá 5MB.");
        return;
      }

      const isValidType =
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.name.match(/\.(png|jpg|jpeg)$/i);

      if (!isValidType) {
        setErrorMessage(t("dialog.allowedFormatsText") || "Chỉ chấp nhận định dạng ảnh: *png, *jpg, *jpeg.");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      validNewItems.push({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        url: imageUrl,
        file,
      });
    }

    setUploadedFiles((prev) => [...prev, ...validNewItems]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (!e.target.files) return;
    processFiles(Array.from(e.target.files));
    e.target.value = "";
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles((prev) => {
      const itemToRemove = prev.find((item) => item.id === id);
      if (itemToRemove) {
        URL.revokeObjectURL(itemToRemove.url);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (e.dataTransfer.files) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleOpenExistingPreview = (index: number) => {
    if (existingWireImages.length > 0) {
      setPreviewImages(existingWireImages);
      setPreviewIndex(index);
      setIsPreviewOpen(true);
    }
  };

  const handleOpenNewPreview = (index: number) => {
    const urls = uploadedFiles.map((f) => f.url);
    if (urls.length > 0) {
      setPreviewImages(urls);
      setPreviewIndex(index);
      setIsPreviewOpen(true);
    }
  };

  // Disable future days in DatePicker
  const disabledFutureDays = (date: Date) => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return date > today;
  };

  // Submit Handler
  const handleSubmit = async () => {
    if (!transaction) return;

    if (!wireDate) {
      setErrorMessage(t("dialog.wireDateRequiredError") || "Vui lòng chọn ngày chuyển tiền.");
      return;
    }

    const todayStr = new Date().toISOString().split("T")[0];
    if (wireDate > todayStr) {
      setErrorMessage(t("dialog.wireDateFutureError") || "Ngày chuyển tiền không được lớn hơn ngày hiện tại.");
      return;
    }

    if (!wireAmountUsd || Number.isNaN(parseFloat(wireAmountUsd)) || parseFloat(wireAmountUsd) <= 0) {
      setErrorMessage(t("dialog.invalidAmountError") || "Vui lòng nhập số tiền nạp hợp lệ.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      let newWireImageUrls: string[] | undefined = undefined;

      // 1. Tải danh sách ảnh mới lên API upload nếu có chọn ảnh mới
      if (uploadedFiles.length > 0) {
        const formData = new FormData();
        for (const item of uploadedFiles) {
          formData.append("files", item.file);
        }

        const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/$/, "");
        const uploadRes = await fetch(`${apiBaseUrl}/api/v1/upload/topup`, {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          let errText = "Tải ảnh chứng từ thất bại.";
          try {
            const errJson = await uploadRes.json();
            errText = errJson.message || errJson.error || errText;
          } catch {}
          throw new Error(errText);
        }

        const uploadData = await uploadRes.json();
        newWireImageUrls = Array.isArray(uploadData.data) ? uploadData.data : [];
      }

      // 2. Gọi TRPC mutation adjustTopupRequest
      await adjustMutation.mutateAsync({
        id: Number(transaction.id),
        wireAmountApproved: parseFloat(wireAmountUsd),
        wireDate: wireDate || undefined,
        wireImages: newWireImageUrls,
      });

      toast(t("dialog.successAdjust") || "Đã cập nhật giao dịch thành công", "success");
      utils.customer.topup.getTopupHistory.invalidate();
      onClose();
      onSuccess();
    } catch (err: any) {
      setErrorMessage(err.message || "Cập nhật giao dịch thất bại");
      toast(err.message || "Cập nhật giao dịch thất bại", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!transaction) return null;

  return (
    <>
      <Dialog open={Boolean(transaction)} onOpenChange={() => onClose()}>
        <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden bg-white dark:bg-slate-950 rounded-xl shadow-xl flex flex-col max-h-[90vh]">
          {/* Header Cố định */}
          <DialogHeader className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between shrink-0">
            <DialogTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {t("dialog.adjustTitle") || "Cập nhật giao dịch"}
            </DialogTitle>
          </DialogHeader>

          {/* Content Cuộn Y */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 text-xs text-slate-700 dark:text-slate-300">
            {/* Error Banner */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 rounded-lg text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. Card Mã giao dịch & Khách hàng */}
            <Card className="p-4 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {t("dialog.transactionCode") || "Mã giao dịch"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Badge variant="outline" className="bg-white dark:bg-slate-800 font-mono text-xs text-primary border-primary/30">
                      {transaction.transactionCode}
                    </Badge>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(transaction.transactionCode)}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer"
                      title={t("dialog.copiedTransactionCode") || "Sao chép mã giao dịch"}
                    >
                      {copiedCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-slate-200/60 dark:border-slate-800">
                <div>
                  <span className="text-slate-500">{t("filter.customer") || "Khách hàng"}</span>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {transaction.customerName}
                  </p>
                </div>
                <div>
                  <span className="text-slate-500">{t("dialog.customerCodeLabel") || "Mã KH"}</span>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {transaction.customerCode || "—"}
                  </p>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500">{t("dialog.customerEmailLabel") || "Email KH"}</span>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {transaction.customerEmail || "—"}
                  </p>
                </div>
              </div>
            </Card>

            {/* 2. Phương thức thanh toán & DatePicker */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-800 dark:text-slate-200 block">
                  {t("dialog.paymentMethod") || "Phương thức thanh toán"}
                </label>
                <div className="flex items-center gap-2.5 p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  {transaction.paymentMethodIcon ? (
                    <img
                      src={transaction.paymentMethodIcon}
                      alt={transaction.paymentMethodName}
                      className="w-6 h-6 rounded-full object-contain shrink-0 border border-slate-200"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {transaction.paymentMethodName?.charAt(0).toUpperCase() || "$"}
                    </div>
                  )}
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {transaction.paymentMethodName}
                  </span>
                </div>
              </div>

              {/* DatePicker wireDate */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-800 dark:text-slate-200 block">
                  {t("dialog.wireDateLabel") || "Ngày chuyển tiền"} <span className="text-red-500">*</span>
                </label>
                <DatePicker
                  value={wireDate}
                  onChange={(d) => d && setWireDate(d)}
                  disabledDays={disabledFutureDays}
                  className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg text-xs"
                />
              </div>

              {/* WireAmount USD / VND */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-800 dark:text-slate-200 block">
                    {t("dialog.amountUsdLabel") || "Topup Amount (USD)"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      value={wireAmountUsd}
                      onChange={handleUsdChange}
                      placeholder="0.00"
                      className="pr-12 text-xs font-semibold text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 rounded-lg"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                      USD
                    </span>
                  </div>
                </div>

                {/* Nếu isBank = true -> hiển thị ô nhập VND + Ghi chú tỷ giá */}
                {isBank && (
                  <>
                    <div className="space-y-1.5">
                      <label className="font-semibold text-slate-800 dark:text-slate-200 block">
                        {t("dialog.amountVndLabel") || "Topup Amount (VND)"}
                      </label>
                      <div className="relative">
                        <Input
                          value={wireAmountVnd}
                          onChange={handleVndChange}
                          placeholder="0"
                          className="pr-12 text-xs font-semibold text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 rounded-lg"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                          VND
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 p-2 bg-blue-50/60 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 rounded-lg text-[11px]">
                      <Info className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {t("dialog.exchangeRateTitle") || "Tỷ giá quy đổi:"}{" "}
                        <strong>{exchangeRate.toLocaleString("vi-VN")} VND = 1 USD</strong>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 3. Chứng từ chuyển tiền hiện tại */}
            {existingWireImages.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="font-semibold text-slate-800 dark:text-slate-200 block">
                  {t("dialog.currentProofImages") || "Chứng từ chuyển khoản hiện tại"}
                </label>
                <div>
                  <button
                    type="button"
                    onClick={() => handleOpenExistingPreview(0)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f0f4ff] hover:bg-[#e4ebff] dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-xs font-semibold text-[#1e293b] dark:text-slate-100 transition-colors cursor-pointer border border-[#e2e8f0]/60 dark:border-blue-900/40"
                  >
                    <ImageIcon className="w-4 h-4 text-[#2563eb] dark:text-blue-400 shrink-0" strokeWidth={2.2} />
                    <span>{t("table.viewProofImages", { count: existingWireImages.length }) || `View (${existingWireImages.length})`}</span>
                  </button>
                </div>
              </div>
            )}

            {/* 4. Cập nhật chứng từ chuyển tiền mới */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {t("dialog.uploadNewProofTitle") || "Tải lên chứng từ mới (Xóa chứng từ cũ nếu tải mới)"}
                  <span className="text-slate-400 font-normal">
                    {t("dialog.uploadNote") || " (Tối đa 10 ảnh, dung lượng mỗi ảnh không quá 5MB)"}
                  </span>
                </label>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />

              {uploadedFiles.length === 0 ? (
                /* State 1: Big Drag & Drop Zone Box when 0 files uploaded */
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-2xl border-2 border-dashed border-sky-400/80 bg-slate-50/50 dark:bg-zinc-900/30 hover:bg-slate-100/50 dark:hover:bg-zinc-900/50 p-5 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-200/60 dark:bg-zinc-800 flex items-center justify-center mb-0.5 text-slate-400">
                    <ImageIcon className="w-6 h-6" />
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 font-normal">
                    {t("dialog.dragAndDropText") || "Kéo & thả hoặc"}{" "}
                    <span className="text-[#1B64F2] font-semibold hover:underline">
                      {t("dialog.browseText") || "tải ảnh mới lên"}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400">
                    {t("dialog.maxFilesText") || "Tải lên tối đa 10 ảnh"}
                  </span>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {t("dialog.allowedFormatsText") || "Định dạng cho phép: *png, *jpg, *jpeg"}
                  </span>
                </div>
              ) : (
                /* State 2: Uploaded List View with Horizontal Scroll & Floating Arrows */
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="relative rounded-2xl border-2 border-dashed border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 p-3 min-h-[110px] flex items-center"
                >
                  {/* Left Scroll Arrow */}
                  {canScrollLeft && (
                    <button
                      type="button"
                      onClick={handleScrollLeft}
                      className="absolute left-2 z-10 w-7 h-7 rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-md text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-800 cursor-pointer border border-slate-200 dark:border-zinc-700 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  )}

                  {/* Horizontal Scroll Area */}
                  <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollPosition}
                    className="w-full flex items-center gap-3 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {uploadedFiles.map((item, idx) => (
                      <div
                        key={item.id}
                        className="relative w-20 h-20 rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shrink-0 overflow-hidden group shadow-xs cursor-pointer"
                        onClick={() => handleOpenNewPreview(idx)}
                      >
                        <img
                          src={item.url}
                          alt="Wire confirmation"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFile(item.id);
                          }}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center opacity-90 hover:bg-rose-600 transition-all cursor-pointer"
                          title="Xóa ảnh"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}

                    {/* Add Image Button (+) - ONLY displayed when uploadedFiles.length > 0 AND < 10 */}
                    {uploadedFiles.length < 10 && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-20 h-20 rounded-2xl border-2 border-dashed border-sky-400/80 bg-sky-50/50 dark:bg-sky-950/20 hover:bg-sky-100/50 dark:hover:bg-sky-950/40 flex flex-col items-center justify-center shrink-0 cursor-pointer transition-all group"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#00B4D8] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#00B4D8]">
                          {t("dialog.uploadFile") || "Upload file"}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Right Scroll Arrow */}
                  {canScrollRight && (
                    <button
                      type="button"
                      onClick={handleScrollRight}
                      className="absolute right-2 z-10 w-7 h-7 rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-md text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-800 cursor-pointer border border-slate-200 dark:border-zinc-700 transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Footer Cố định */}
          <DialogFooter className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 gap-2 sm:gap-0 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              disabled={isSubmitting}
              className="h-8 text-xs"
            >
              {t("dialog.cancel") || "Hủy"}
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="h-8 text-xs min-w-[90px] bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-1.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{t("dialog.confirmAdjust") || "Xác nhận cập nhật"}...</span>
                </>
              ) : (
                t("dialog.confirmAdjust") || "Xác nhận cập nhật"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        images={previewImages}
        initialIndex={previewIndex}
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
