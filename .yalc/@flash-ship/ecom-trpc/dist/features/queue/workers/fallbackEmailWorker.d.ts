export declare const FALLBACK_EMAIL_QUEUE = "fallback-email";
interface FallbackEmailJobPayload {
    notificationId: number;
    to: string;
    subject: string;
    html: string;
    text?: string;
}
export declare function registerFallbackEmailWorker(): void;
export declare function queueFallbackEmail(data: FallbackEmailJobPayload, delayMs: number): Promise<string>;
export {};
//# sourceMappingURL=fallbackEmailWorker.d.ts.map