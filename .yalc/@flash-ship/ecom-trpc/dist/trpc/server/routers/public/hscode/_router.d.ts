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
        output: {
            code: string;
            description: string;
        }[];
        meta: object;
    }>;
    getDetail: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            code: string;
        };
        output: {
            chapter: {
                code: string;
                name: string;
                notesHtml: string | null;
            };
            heading: {
                code: string;
                name: string;
            } | null;
            selectedRate: {
                code: string;
                description: string;
                chapterCode: string;
                headingCode: string;
                unit: string | null;
                generalRate: string | null;
                specialRate: string | null;
            } | null;
            rates: {
                code: string;
                description: string;
                chapterCode: string;
                headingCode: string;
                unit: string | null;
                generalRate: string | null;
                specialRate: string | null;
            }[];
            children: any[];
        };
        meta: object;
    }>;
    search: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            query: string;
        };
        output: {
            code: string;
            description: string;
            chapterCode: string;
            headingCode: string;
            unit: string | null;
            generalRate: string | null;
            specialRate: string | null;
        }[];
        meta: object;
    }>;
    getHeadingTree: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            code: string;
        };
        output: {
            code: string;
            description: string;
            generalRate: string | null;
            specialRate: string | null;
            unit: string | null;
            children: any[];
        }[];
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
        output: {
            dutyRate: string;
            baseCost: number;
            totalDuties: number;
            hmf: number;
            mpf: number;
            total: number;
        };
        meta: object;
    }>;
    getCountries: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            flag: string | null;
            code: string;
            id: number;
            name: string;
        }[];
        meta: object;
    }>;
    getTransportModes: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            code: string;
            id: number;
            name: string;
        }[];
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map