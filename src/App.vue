<script setup lang="ts">
import {useUsers} from "@/composables/useUsers.ts";
import {onMounted} from "vue";

const { users, loading, error, fetchUsers, deleteUser } = useUsers();
onMounted(fetchUsers);
</script>

<template>
  <div class="container">
   <div class="panel">
    <div class="header">
     <h1>User Management Dashboard</h1>
    </div>
    <div v-for="user in users">
     {{ user.name }}
    </div>
    <div class="footer">
     <span>Demo with mock data & delays</span>
     <span>Vue 3 • Composition API • TypeScript</span>
    </div>
   </div>

  </div>
</template>

<style scoped></style>
