import type { RateCardType, RateItemType, ShippingMethod } from "@ecom/prisma";
import type { RateCardRepository } from "../repositories/RateCardRepository";
export interface IRateCardServiceDeps {
    rateCardRepo: RateCardRepository;
}
export interface CalculateFreightParams {
    shippingMethod: ShippingMethod;
    country: string;
    weight: number;
    origin?: string | null;
    customerId: string;
    calculationDate?: Date;
}
export interface SlabInput {
    startWeight: number;
    endWeight: number;
    rateType: RateItemType;
    amount: number;
}
export declare class RateCardService {
    private deps;
    private cache;
    constructor(deps: IRateCardServiceDeps);
    /**
     * Validates that startDate is not in the past (before today 00:00:00).
     */
    validateStartDateNotPast(startDate?: Date | null): void;
    /**
     * Called when a Default rate card is approved and published.
     * Automatically archives previous active Default rate card for same method/country/origin.
     */
    onDefaultCardApproved(card: {
        id: number;
        type: RateCardType;
        shippingMethod: ShippingMethod;
        country: string;
        origin: string | null;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    }>;
    /**
     * Resolves active Rate Card from cache or waterfall DB queries.
     */
    private resolveRateCard;
    /**
     * Calculates freight cost based on selected pricing slab rate type.
     */
    private calculateItemFreight;
    /**
     * Calculates shipping freight based on shipping method, destination country,
     * cargo weight, origin airport/hub, and customer ID.
     */
    calculateFreight(params: CalculateFreightParams): Promise<{
        freightCost: number;
        appliedRateCardId: number;
        appliedRateCardSnapshot: {
            rateCardId: number;
            rateCardCode: string;
            rateCardName: string;
            currency: string;
            itemId: number;
            startWeight: number;
            endWeight: number;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
            amount: number;
        };
    }>;
    /**
     * Calculates freight cost using a specific RateCard ID.
     */
    calculateFreightWithCardId(rateCardId: number, weight: number): Promise<{
        freightCost: number;
        appliedRateCardId: number;
        appliedRateCardSnapshot: {
            rateCardId: number;
            rateCardCode: string;
            rateCardName: string;
            currency: string;
            itemId: number;
            startWeight: number;
            endWeight: number;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
            amount: number;
        };
    }>;
    /**
     * Validates pricing slabs for continuity, gaps, and monotonicity.
     */
    validateSlabs(minWeight: number, maxWeight: number, slabs: SlabInput[]): void;
    private validateSlabsBounds;
    private validateSlabsContiguityAndMonotonicity;
    private checkGapAndMonotonicity;
    /**
     * Validates if publishing a rate card causes date/group overlap conflicts.
     */
    validatePublishingConstraints(rateCardId: number): Promise<void>;
    /**
     * Helper to invalidate cache keys for a given Rate Card.
     */
    invalidateRateCardCache(rateCardId: number): Promise<void>;
}
//# sourceMappingURL=RateCardService.d.ts.map