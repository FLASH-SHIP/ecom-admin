/**
 * Error handler logic — factored out so trpc.ts can call it without circular deps.
 */
export declare function handleTRPCError<T>(next: () => Promise<T>): Promise<T>;
//# sourceMappingURL=errorHandler.d.ts.map