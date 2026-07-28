import * as hsCodeFeatures from "@ecom/features/hscodes/hscode-service";
export declare const publicHsCodeRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    getTree: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: hsCodeFeatures.ChapterTree[];
        meta: object;
    }>;
    getDetail: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            code: string;
        };
        output: any;
        meta: object;
    }>;
    search: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            query: string;
        };
        output: hsCodeFeatures.HSCodeItem[];
        meta: object;
    }>;
    getCountries: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: hsCodeFeatures.Country[];
        meta: object;
    }>;
    getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: hsCodeFeatures.TransportMode[];
        meta: object;
    }>;
    calculate: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            code: string;
            value: number;
            mode: string;
            country?: string | undefined;
            entryDate?: string | undefined;
            loadingDate?: string | undefined;
        };
        output: any;
        meta: object;
    }>;
}>>;
export type PublicHsCodeRouter = typeof publicHsCodeRouter;
//# sourceMappingURL=_router.d.ts.map