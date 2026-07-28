import type { EventMap } from "./EventBus";
export declare class OutboxStore {
    /**
     * Save an event into the outbox table.
     * If run within a transaction, it automatically participates.
     * If running in test mode, it dispatches the event immediately via EventBus to bypass DB unless overridden.
     */
    static publish<K extends keyof EventMap>(event: K, payload: EventMap[K]): Promise<void>;
}
//# sourceMappingURL=OutboxStore.d.ts.map