/**
 * Feature flag names — type-safe constants.
 * Inspired by Cal.com's feature flags + Laravel config/cache pattern.
 */
export declare const Flags: {
    readonly WORKFLOW_ENABLED: "feature.workflow.enabled";
    readonly COMMENTS_ENABLED: "feature.comments.enabled";
    readonly PUBLIC_API_ENABLED: "feature.publicApi.enabled";
    readonly ANALYTICS_ENABLED: "feature.analytics.enabled";
    readonly REGISTRATION_ENABLED: "feature.registration.enabled";
    readonly WEBHOOKS_ENABLED: "feature.webhooks.enabled";
    readonly SCHEDULED_PUBLISH_ENABLED: "feature.scheduledPublish.enabled";
    readonly MEDIA_UPLOAD_ENABLED: "feature.mediaUpload.enabled";
    readonly REDIRECTS_ENABLED: "feature.redirects.enabled";
    readonly TEMPLATES_ENABLED: "feature.templates.enabled";
};
export type FlagName = (typeof Flags)[keyof typeof Flags];
/**
 * Feature flag service backed by the Settings table + in-memory cache.
 *
 * Flags default to `true` (enabled) if not explicitly set.
 */
export declare class FeatureFlagService {
    /**
     * Check if a feature flag is enabled.
     */
    isEnabled(flag: FlagName): Promise<boolean>;
    /**
     * Set a feature flag value.
     */
    setFlag(flag: FlagName, enabled: boolean): Promise<void>;
    /**
     * Get all feature flags with their current values.
     */
    getAllFlags(): Promise<Record<string, boolean>>;
    /**
     * Clear the in-memory cache (useful for testing or after bulk updates).
     */
    clearCache(): void;
}
export declare function getFeatureFlagService(): FeatureFlagService;
//# sourceMappingURL=FeatureFlagService.d.ts.map