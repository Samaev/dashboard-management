<template>
  <span class="badge" :class="badgeClass">
    {{ status }}
  </span>
</template>

<script setup lang="ts">
import {computed} from "vue";
import type {UserStatus} from "@/types/user-status.ts";

const props = defineProps<{ status: UserStatus }>()

const badgeClass = computed(() =>
  props.status === 'active' ? 'badge--green' : 'badge--red'
)
</script>
