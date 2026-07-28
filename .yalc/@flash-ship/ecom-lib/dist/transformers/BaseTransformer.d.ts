export declare abstract class BaseTransformer<T, R> {
    abstract transform(item: T): R;
    transformItem(item: T): R;
    transformCollection(items: T[]): R[];
    transformPaginated<M extends {
        total: number;
        page: number;
        perPage: number;
    }>(paginated: {
        data: T[];
        meta: M;
    }): {
        data: R[];
        meta: M;
    };
}
//# sourceMappingURL=BaseTransformer.d.ts.map