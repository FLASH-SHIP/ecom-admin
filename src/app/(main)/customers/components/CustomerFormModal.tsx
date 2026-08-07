"use client";

import { useToast } from "@admin/components/toast-provider";
import { mapTRPCErrorToForm, type TRPCErrorLike } from "@admin/lib/form-error-handler";
import { trpc } from "@admin/lib/trpc";
import { PHONE_REGEX } from "@flash-ship/ecom-types";
import { Button } from "@flash-ship/ecom-ui/components/button";
import { DatePicker } from "@flash-ship/ecom-ui/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@flash-ship/ecom-ui/components/dialog";
import { Input } from "@flash-ship/ecom-ui/components/input";
import { Label } from "@flash-ship/ecom-ui/components/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@flash-ship/ecom-ui/components/select";
import { Switch } from "@flash-ship/ecom-ui/components/switch";
import { Textarea } from "@flash-ship/ecom-ui/components/textarea";
import { PhoneInput } from "@flash-ship/ecom-ui/domain";
import { cn } from "@flash-ship/ecom-ui/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Eye, EyeOff, Loader2, Save } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const _schemaShape = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().min(1),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  changePassword: z.boolean().optional(),
  username: z.string().max(30).optional(),
  phone: z.string().max(20).optional(),
  dob: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "BANNED"]).optional(),
  description: z.string().max(1000).optional(),
  groupId: z.number().int().positive().nullable().optional(),
});

type FormValues = z.infer<typeof _schemaShape>;

const defaultValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  changePassword: false,
  username: "",
  phone: "",
  dob: "",
  gender: undefined,
  status: "ACTIVE",
  description: "",
  groupId: null,
};

interface CustomerFormModalProps {
  customerId?: string | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: form modal contains custom validations and both edit/create routes
export function CustomerFormModal({ customerId, open, onClose, onSaved }: CustomerFormModalProps) {
  const t = useTranslations("customers");
  const tUsers = useTranslations("users");
  const tCommon = useTranslations("common");
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isEdit = customerId !== undefined && customerId !== null;

  const { data: customerData, isLoading: isCustomerLoading } = trpc.viewer.customers.get.useQuery(
    { id: customerId ?? "" },
    { enabled: open && isEdit },
  );

  const { data: customerGroups, isLoading: isGroupsLoading } =
    trpc.viewer.customerGroups.listAll.useQuery(undefined, {
      enabled: open,
    });

  const schema = z
    .object({
      name: z.string().min(1, t("validation.nameRequired")).max(200, t("validation.nameMax")),
      email: z.string().min(1, t("validation.emailRequired")).email(t("validation.emailInvalid")),
      password: z.string().optional(),
      confirmPassword: z.string().optional(),
      changePassword: z.boolean().optional(),
      username: z
        .string()
        .max(30, t("validation.usernameMax"))
        .refine((val) => !val || /^[a-z0-9_.]{3,30}$/.test(val), t("validation.usernameInvalid"))
        .optional(),
      phone: z
        .string()
        .max(20, t("validation.phoneMax"))
        .refine((val) => {
          if (!val?.trim()) return true;
          const cleaned = val.replace(/[\s\-().]/g, "");
          if (/^\+\d{1,4}$/.test(cleaned)) return true;
          return PHONE_REGEX.test(cleaned);
        }, t("validation.phoneInvalid"))
        .optional(),
      dob: z.string().optional(),
      gender: z.enum(["male", "female", "other"]).optional(),
      description: z.string().max(1000, t("validation.descriptionMax")).optional(),
      groupId: z.number().int().positive().nullable().optional(),
    })
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: superRefine contains conditional password check complexity
    .superRefine((data, ctx) => {
      if (!isEdit) {
        if (!data.password) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("validation.passwordRequired"),
            path: ["password"],
          });
        } else if (data.password.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("validation.passwordMin"),
            path: ["password"],
          });
        } else if (data.password.length > 100) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("validation.passwordMax"),
            path: ["password"],
          });
        }

        if (data.password !== data.confirmPassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("validation.passwordMismatch"),
            path: ["confirmPassword"],
          });
        }
      } else {
        if (data.changePassword) {
          if (!data.password) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t("validation.passwordRequired"),
              path: ["password"],
            });
          } else if (data.password.length < 8) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t("validation.passwordMin"),
              path: ["password"],
            });
          } else if (data.password.length > 100) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t("validation.passwordMax"),
              path: ["password"],
            });
          }

          if (!data.confirmPassword) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t("validation.confirmPasswordRequired"),
              path: ["confirmPassword"],
            });
          } else if (data.password !== data.confirmPassword) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t("validation.passwordMismatch"),
              path: ["confirmPassword"],
            });
          }
        }
      }
    });

  const form = useForm<FormValues>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { control, handleSubmit, formState, reset, setValue, clearErrors, watch } = form;

  const changePasswordToggle = watch("changePassword") ?? false;
  const { isSubmitting } = formState;

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: resets nested form properties conditionally depending on create/edit mode
  useEffect(() => {
    if (open) {
      if (isEdit) {
        if (customerData) {
          let dobStr = "";
          if (customerData.dob) {
            const dateVal = new Date(customerData.dob);
            if (!Number.isNaN(dateVal.getTime())) {
              dobStr = dateVal.toISOString().split("T")[0] ?? "";
            }
          }

          reset({
            name: customerData.name ?? "",
            email: customerData.email,
            username: customerData.username ?? "",
            phone: customerData.phone ?? "",
            dob: dobStr,
            gender: (customerData.gender as "male" | "female" | "other" | undefined) || undefined,
            status:
              (customerData.status as "ACTIVE" | "INACTIVE" | "BANNED" | undefined) || "ACTIVE",
            description: customerData.description ?? "",
            password: "",
            confirmPassword: "",
            changePassword: false,
            groupId: customerData.groupId && customerData.groupId > 0 ? customerData.groupId : null,
          });
        }
      } else {
        reset(defaultValues);
      }
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  }, [open, isEdit, customerData, reset]);

  const utils = trpc.useUtils();

  const handleServerError = (err: TRPCErrorLike) => {
    mapTRPCErrorToForm(err, form, {
      codeToFieldMap: {
        EMAIL_ALREADY_EXISTS: "email",
        USERNAME_ALREADY_EXISTS: "username",
      },
      translate: (msg) => {
        if (msg.includes("already exists") || msg.includes("tồn tại") || msg === "EMAIL_ALREADY_EXISTS") {
          return t("validation.emailTaken");
        }
        if (msg.includes("already taken") || msg.includes("tồn tại") || msg === "USERNAME_ALREADY_EXISTS") {
          return t("validation.usernameTaken");
        }
        return msg;
      },
    });
  };

  const createMut = trpc.viewer.customers.create.useMutation({
    onSuccess: (newCustomerData: { id?: string }) => {
      utils.viewer.customers.list.invalidate();
      if (newCustomerData?.id) {
        utils.customer.topup.getWalletSummary.invalidate({ customerId: newCustomerData.id });
      }
      toast(tCommon("successCreated"), "success");
      onSaved();
    },
    onError: handleServerError,
  });

  const updateMut = trpc.viewer.customers.update.useMutation({
    onSuccess: () => {
      utils.viewer.customers.list.invalidate();
      utils.viewer.customers.get.invalidate({ id: customerId ?? "" });
      toast(tCommon("successUpdated"), "success");
      onSaved();
    },
    onError: handleServerError,
  });

  const setPasswordMut = trpc.viewer.customers.setPassword.useMutation({
    onSuccess: () => {
      utils.viewer.customers.get.invalidate({ id: customerId ?? "" });
    },
    onError: handleServerError,
  });

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: onSubmit calls create/update and optionally setPassword mutations
  async function onSubmit(data: FormValues) {
    if (isEdit) {
      if (customerId === null || customerId === undefined) return;
      try {
        await updateMut.mutateAsync({
          id: customerId,
          username: data.username?.trim() || undefined,
          name: data.name?.trim() || undefined,
          phone: data.phone || undefined,
          dob: data.dob || null,
          gender: data.gender || null,
          status: data.status,
          description: data.description?.trim() || null,
          groupId: data.groupId && data.groupId > 0 ? data.groupId : null,
        });

        if (data.changePassword && data.password) {
          await setPasswordMut.mutateAsync({
            id: customerId,
            password: data.password,
          });
        }
      } catch {
        // Mutation error handled in callback hooks
      }
    } else {
      createMut.mutate({
        email: data.email,
        username: data.username?.trim() || undefined,
        name: data.name?.trim() || undefined,
        phone: data.phone || undefined,
        dob: data.dob || undefined,
        gender: data.gender,
        description: data.description?.trim() || undefined,
        password: data.password || undefined,
        groupId: data.groupId || undefined,
      });
    }
  }

  const isMutPending = createMut.isPending || updateMut.isPending || setPasswordMut.isPending;
  const anyError = createMut.error || updateMut.error || setPasswordMut.error;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg sm:max-w-2xl overflow-hidden flex flex-col p-0 max-h-[90vh]">
        <DialogHeader className="border-b border-border px-6 py-4">
          <DialogTitle className="text-lg font-bold">
            {isEdit ? t("drawer.editTitle") : t("drawer.createTitle")}
          </DialogTitle>
        </DialogHeader>

        {(isEdit && isCustomerLoading) || isGroupsLoading ? (
          <div className="flex flex-1 items-center justify-center min-h-[300px]">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col overflow-hidden"
          >
            {/* Fake inputs to prevent browser password managers from auto-filling saved credentials */}
            <input type="text" name="fake_username_autofill" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <input type="password" name="fake_password_autofill" style={{ display: "none" }} tabIndex={-1} autoComplete="new-password" />

            <div className="flex flex-1 flex-col gap-4 px-6 py-5 overflow-y-auto max-h-[calc(90vh-130px)]">
              {isEdit && customerData?.customerCode && (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="customer-code" className="font-semibold text-xs">
                    {t("fields.customerCode") ?? "Mã khách hàng"}
                  </Label>
                  <Input
                    id="customer-code"
                    value={customerData.customerCode}
                    disabled
                    className="bg-muted font-semibold text-foreground cursor-not-allowed h-9 text-xs"
                  />
                  <p className="text-[11px] text-muted-foreground">
                    {t("form.customerCodeImmutable") ??
                      "Mã khách hàng là cố định và không thể chỉnh sửa."}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Full Name */}
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-name" className="font-semibold text-xs">
                        {t("form.nameLabel")} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        {...field}
                        id="customer-name"
                        placeholder={t("form.namePlaceholder")}
                        required
                        aria-invalid={!!fieldState.error}
                        className={cn(
                          "h-9 text-xs",
                          fieldState.error && "border-destructive focus-visible:ring-destructive",
                        )}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 2. Email */}
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-email" className="font-semibold text-xs">
                        {t("form.emailLabel")} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        {...field}
                        id="customer-email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        disabled={isEdit}
                        autoComplete="off"
                        aria-invalid={!!fieldState.error}
                        className={cn(
                          "h-9 text-xs",
                          fieldState.error && "border-destructive focus-visible:ring-destructive",
                        )}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 3. Username */}
                <Controller
                  name="username"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-username" className="font-semibold text-xs">
                        {tUsers("fields.username")}
                      </Label>
                      <Input
                        {...field}
                        id="customer-username"
                        placeholder={tUsers("fields.username")}
                        aria-invalid={!!fieldState.error}
                        autoComplete="new-password"
                        onChange={(e) => field.onChange(e.target.value.toLowerCase())}
                        className={cn(
                          "h-9 text-xs",
                          fieldState.error && "border-destructive focus-visible:ring-destructive",
                        )}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 4. Phone */}
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <PhoneInput
                        id="customer-phone"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        label={t("form.phoneLabel")}
                        placeholder={t("form.phonePlaceholder")}
                        disabled={field.disabled}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 5. Date of Birth */}
                <Controller
                  name="dob"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-dob" className="font-semibold text-xs">
                        {t("form.dobLabel")}
                      </Label>
                      <DatePicker
                        value={field.value ?? ""}
                        onChange={(val) => field.onChange(val)}
                        placeholder="dd/mm/yyyy"
                        disabled={field.disabled}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 6. Customer Group */}
                <Controller
                  name="groupId"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-group" className="font-semibold text-xs">
                        {t("form.groupLabel")}
                      </Label>
                      <Select
                        value={field.value && field.value > 0 ? String(field.value) : "none"}
                        onValueChange={(val) => {
                          if (!val || val === "none") {
                            field.onChange(null);
                          } else {
                            const num = Number(val);
                            field.onChange(Number.isNaN(num) || num <= 0 ? null : num);
                          }
                        }}
                      >
                        <SelectTrigger
                          id="customer-group"
                          className={cn("h-9 text-xs", fieldState.error && "border-destructive")}
                          disabled={field.disabled}
                        >
                          <SelectValue placeholder={t("form.groupPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">{t("form.noGroup")}</SelectItem>
                          {customerGroups?.map((group) => (
                            <SelectItem key={group.id} value={String(group.id)}>
                              {group.name} ({group.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 7. Gender */}
                <Controller
                  name="gender"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-gender" className="font-semibold text-xs">
                        {t("form.genderLabel")}
                      </Label>
                      <Select value={field.value ?? ""} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="customer-gender"
                          className={cn("h-9 text-xs", fieldState.error && "border-destructive")}
                          disabled={field.disabled}
                        >
                          <SelectValue placeholder={t("form.genderPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">{t("gender.male")}</SelectItem>
                          <SelectItem value="female">{t("gender.female")}</SelectItem>
                          <SelectItem value="other">{t("gender.other")}</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />

                {/* 8. Status */}
                <Controller
                  name="status"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="customer-status" className="font-semibold text-xs">
                        {t("fields.status")}
                      </Label>
                      <Select value={field.value ?? "ACTIVE"} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="customer-status"
                          className={cn("h-9 text-xs", fieldState.error && "border-destructive")}
                          disabled={field.disabled}
                        >
                          <SelectValue placeholder={t("fields.status")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ACTIVE">{t("status.ACTIVE")}</SelectItem>
                          <SelectItem value="INACTIVE">{t("status.INACTIVE")}</SelectItem>
                          <SelectItem value="BANNED">{t("status.BANNED")}</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* 9. Description */}
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="customer-description" className="font-semibold text-xs">
                      {t("form.descriptionLabel")}
                    </Label>
                    <Textarea
                      {...field}
                      id="customer-description"
                      placeholder={t("form.descriptionPlaceholder")}
                      rows={2}
                      aria-invalid={!!fieldState.error}
                      className="text-xs"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-destructive">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              {isEdit && (
                <Controller
                  name="changePassword"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-2 py-1">
                      <Switch
                        id="change-password-toggle"
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                          if (!checked) {
                            setValue("password", "");
                            setValue("confirmPassword", "");
                            clearErrors(["password", "confirmPassword"]);
                          }
                        }}
                      />
                      <Label
                        htmlFor="change-password-toggle"
                        className="cursor-pointer font-medium text-xs"
                      >
                        {t("form.changePasswordToggle")}
                      </Label>
                    </div>
                  )}
                />
              )}

              {(!isEdit || changePasswordToggle) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Password */}
                  <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="customer-password" className="font-semibold text-xs">
                          {isEdit ? tUsers("newPassword") : t("form.passwordLabel")}{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            {...field}
                            id="customer-password"
                            type={showPassword ? "text" : "password"}
                            placeholder={t("form.passwordPlaceholder")}
                            autoComplete="new-password"
                            className={cn(
                              "pr-10 h-9 text-xs",
                              fieldState.error &&
                                "border-destructive focus-visible:ring-destructive",
                            )}
                            aria-invalid={!!fieldState.error}
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label={
                              showPassword
                                ? tUsers("profile.hidePassword")
                                : tUsers("profile.showPassword")
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </button>
                        </div>
                        {fieldState.error && (
                          <p className="text-xs text-destructive">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />

                  {/* Confirm Password */}
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="customer-confirm-password"
                          className="font-semibold text-xs"
                        >
                          {t("form.confirmPasswordLabel")}{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            {...field}
                            id="customer-confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={t("form.confirmPasswordLabel")}
                            autoComplete="new-password"
                            className={cn(
                              "pr-10 h-9 text-xs",
                              fieldState.error &&
                                "border-destructive focus-visible:ring-destructive",
                            )}
                            aria-invalid={!!fieldState.error}
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowConfirmPassword((v) => !v)}
                            aria-label={
                              showConfirmPassword
                                ? tUsers("profile.hidePassword")
                                : tUsers("profile.showPassword")
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </button>
                        </div>
                        {fieldState.error && (
                          <p className="text-xs text-destructive">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              )}

              {/* Server error */}
              {anyError && (
                <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-red-50 px-4 py-3 text-sm text-destructive dark:bg-red-950">
                  <AlertCircle className="size-4 shrink-0" />
                  {anyError.message}
                </div>
              )}
            </div>

            {/* Footer */}
            <DialogFooter className="border-t border-border px-6 py-3 flex flex-row items-center justify-end gap-2">
              <Button type="button" variant="outline" size="sm" onClick={onClose}>
                {tCommon("cancel")}
              </Button>
              <Button
                id="customer-form-save"
                type="submit"
                size="sm"
                disabled={isSubmitting || isMutPending}
              >
                {isMutPending ? (
                  <Loader2 className="mr-2 size-4 animate-spin" />
                ) : (
                  <Save className="mr-2 size-4" />
                )}
                {isEdit
                  ? isMutPending
                    ? t("drawer.saving")
                    : t("drawer.save")
                  : isMutPending
                    ? t("form.creating")
                    : t("form.create")}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
