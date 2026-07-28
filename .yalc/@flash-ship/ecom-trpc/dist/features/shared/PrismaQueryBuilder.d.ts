export interface QueryOptions {
    page?: number;
    limit?: number;
    sort?: string;
    filter?: Record<string, any>;
    search?: string;
    searchFields?: string[];
}
export interface PrismaQueryArgs {
    where: Record<string, any>;
    orderBy?: Record<string, "asc" | "desc">[];
    skip?: number;
    take?: number;
}
export declare class PrismaQueryBuilder {
    /**
     * Build Prisma query arguments from generic QueryOptions.
     */
    static build(options: QueryOptions): PrismaQueryArgs;
}
//# sourceMappingURL=PrismaQueryBuilder.d.ts.map