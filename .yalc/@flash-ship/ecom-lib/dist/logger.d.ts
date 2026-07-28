import { AsyncLocalStorage } from "node:async_hooks";
type LogLevel = "debug" | "info" | "warn" | "error";
interface LoggerStore {
    traceId: string;
    userId?: string;
    ipAddress?: string;
    userAgent?: string;
}
export declare const loggerContext: AsyncLocalStorage<LoggerStore>;
export declare function setLogLevel(level: LogLevel): void;
export declare function getLogLevel(): LogLevel;
/**
 * Mask sensitive data keys recursively.
 */
export declare function maskSensitiveData(data: unknown): unknown;
/**
 * Create a scoped logger for a specific module.
 *
 * @example
 * const log = createLogger("AuthService");
 * log.info("User logged in", { userId: 1 });
 * log.error("Login failed", { email: "user@example.com" });
 */
export declare function createLogger(module: string): {
    debug: (message: string, data?: Record<string, unknown>) => void;
    info: (message: string, data?: Record<string, unknown>) => void;
    warn: (message: string, data?: Record<string, unknown>) => void;
    error: (message: string, data?: Record<string, unknown>) => void;
};
export {};
//# sourceMappingURL=logger.d.ts.map