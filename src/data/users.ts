import type {User} from "@/types/user.ts";

export const mockUsers: User[] = [
    { id: 1, name: 'John Doe',    email: 'john@example.com',   status: 'active' },
    { id: 2, name: 'Jane Smith',  email: 'jane@example.com',   status: 'inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com',    status: 'active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com',  status: 'active' },
    { id: 5, name: 'Charlie W.',  email: 'charlie@example.com',status: 'inactive' }
]