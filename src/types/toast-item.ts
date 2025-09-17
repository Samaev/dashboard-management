import type {ToastVariant} from "@/types/toast-variant.ts";

export interface ToastItem {
    id: number
    message: string
    variant: ToastVariant
}