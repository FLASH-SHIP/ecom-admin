export declare class PushNotificationService {
    private firebaseAdmin;
    private isInitialized;
    private initializationPromise;
    constructor(options?: {
        serviceAccountJson?: string;
    });
    private initialize;
    /**
     * Sends multicast push notifications to multiple FCM tokens.
     * Returns list of invalid tokens that should be cleaned up.
     */
    sendPushNotification(tokens: string[], payload: {
        title: string;
        body: string;
        data?: Record<string, string>;
    }): Promise<{
        successCount: number;
        failureCount: number;
        invalidTokens: string[];
    }>;
}
//# sourceMappingURL=PushNotificationService.d.ts.map