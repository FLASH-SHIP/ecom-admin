interface OptimizeResult {
    buffer: Buffer;
    width: number;
    height: number;
    format: string;
}
/**
 * Optimizes images on upload using Sharp (if available).
 *
 * - Resizes to maxWidth/maxHeight while preserving aspect ratio
 * - Compresses with reasonable quality defaults
 * - Strips EXIF metadata
 * - Falls back to original buffer if Sharp is not installed
 *
 * Install Sharp: yarn add sharp
 */
export declare function optimizeImage(buffer: Buffer, mimeType: string, options?: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
}): Promise<OptimizeResult | null>;
export {};
//# sourceMappingURL=ImageOptimizer.d.ts.map