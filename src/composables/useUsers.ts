import { ref, readonly } from 'vue'
import type {User} from "@/types/user.ts";
import {mockUsers} from "@/data/users.ts";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function useUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function fetchUsers() {
        loading.value = true
        error.value = null
        try {
            await delay(1000)
            users.value = [...mockUsers]
        } catch (e: any) {
            error.value = e?.message ?? 'Failed to fetch users'
        } finally {
            loading.value = false
        }
    }

    async function deleteUser(id: number) {
        try {
            await delay(500)
            users.value = users.value.filter(u => u.id !== id)
            return true
        } catch (e: any) {
            error.value = e?.message ?? 'Failed to delete user'
            return false
        }
    }

    return {
        users: readonly(users),
        loading: readonly(loading),
        error: readonly(error),
        fetchUsers,
        deleteUser
    }
}
