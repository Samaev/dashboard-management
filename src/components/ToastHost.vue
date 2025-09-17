<template>
 <div class="toast-host" aria-live="polite" aria-atomic="true">
  <div
    v-for="t in toasts"
    :key="t.id"
    class="toast"
    :class="`toast--${t.variant}`"
    role="status"
  >
   {{ t.message }}
  </div>
 </div>
</template>

<script setup lang="ts">
const { toasts } = useToast()
</script>
