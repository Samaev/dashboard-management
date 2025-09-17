import { reactive } from 'vue'
import type {ToastVariant} from "@/types/toast-variant.ts";
import type {ToastItem} from "@/types/toast-item.ts";



const state = reactive<{ toasts: ToastItem[] }>({
    toasts: []
})

let seed = 1

export function useToast() {
    function push(message: string, variant: ToastVariant = 'info', duration = 2500) {
        const id = seed++
        state.toasts.push({ id, message, variant })
        window.setTimeout(() => dismiss(id), duration)
    }

    function dismiss(id: number) {
        const idx = state.toasts.findIndex(t => t.id === id)
        if (idx !== -1) state.toasts.splice(idx, 1)
    }

    return {
        toasts: state.toasts,
        push
    }
}
