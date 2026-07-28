import { BaseTransformer } from "@ecom/lib";
export interface UserResponseDto {
    id: string;
    email: string;
    name: string | null;
    username: string | null;
    phone: string | null;
    status: string;
    locale: string | null;
    avatarUrl: string | null;
    createdAt: string;
    roles: Array<{
        role: {
            id: number;
            name: string;
            displayName: string | null;
        };
    }>;
}
export interface UserInput {
    id: string;
    email?: string;
    name?: string | null;
    username?: string | null;
    phone?: string | null;
    status?: string;
    locale?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    roles?: Array<{
        role: {
            id: number;
            name: string;
            displayName: string | null;
        };
    }>;
}
export declare class UserTransformer extends BaseTransformer<UserInput, UserResponseDto> {
    transform(user: UserInput): UserResponseDto;
}
//# sourceMappingURL=UserTransformer.d.ts.map