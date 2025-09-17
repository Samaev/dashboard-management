import type {UserStatus} from "@/types/user-status.ts";


export interface User {
    id: number
    name: string
    email: string
    status: UserStatus
}