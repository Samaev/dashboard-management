import { ref, readonly } from 'vue'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function useUsers() {
    const users = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchUsers() {

    }

    async function deleteUser(id: number) {

    }

    return {
        users: readonly(users),
        loading: readonly(loading),
        error: readonly(error),
        fetchUsers,

    }
}
