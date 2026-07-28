export interface CalendarEntry {
    id: number;
    title: string;
    slug: string;
    type: "post" | "page";
    status: string;
    authorName: string | null;
    date: Date;
    dateType: "published" | "scheduled" | "expires";
}
export interface CalendarDay {
    date: string;
    entries: CalendarEntry[];
}
interface ICalendarDeps {
    findPostsByDateRange: (start: Date, end: Date) => Promise<{
        id: number;
        title: string;
        slug: string;
        status: string;
        authorName: string | null;
        publishedAt: Date | null;
        scheduledAt: Date | null;
        expiresAt: Date | null;
    }[]>;
}
/**
 * Content Calendar service — provides a calendar view of content events.
 *
 * Shows published, scheduled, and expiring content on a timeline.
 * Inspired by CoSchedule and WordPress Editorial Calendar.
 */
export declare class ContentCalendarService {
    private deps;
    constructor(deps: ICalendarDeps);
    /**
     * Get calendar entries for a date range.
     */
    getCalendar(start: Date, end: Date): Promise<CalendarDay[]>;
    /**
     * Get entries for a specific month.
     */
    getMonthCalendar(year: number, month: number): Promise<CalendarDay[]>;
    private addToDay;
}
export {};
//# sourceMappingURL=ContentCalendarService.d.ts.map