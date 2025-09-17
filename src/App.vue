<script setup lang="ts">
import UserList from "@/components/UserList.vue";

</script>

<template>
  <div class="container">
   <div class="panel">
    <div class="header">
     <h1>User Management Dashboard</h1>
    </div>
    <UserList/>
    <div class="footer">
     <span>Demo with mock data & delays</span>
     <span>Vue 3 • Composition API • TypeScript</span>
    </div>
   </div>

  </div>
</template>

<style scoped></style>
