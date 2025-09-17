<template>
 <section>
  <div class="table-wrap" >
   <table class="table" v-if="filteredUsers.length > 0">
    <thead>
    <tr>
     <th style="min-width: 220px;">Name</th>
     <th style="min-width: 260px;">Email</th>
     <th>Status</th>
     <th style="text-align: right; min-width: 120px;">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="u in filteredUsers" :key="u.id">
     <td>{{ u.name }}</td>
     <td>{{ u.email }}</td>
     <td>
      <StatusBadge :status="u.status" />
     </td>
     <td style="text-align: right;">
       Delete
     </td>
    </tr>
    </tbody>
   </table>

   <div v-else class="empty">No users found.</div>
  </div>
 </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useUsers, type User } from '../composables/useUsers'
import type { StatusFilter } from '../types/status-filter.ts'

const { users, loading, error, fetchUsers, deleteUser } = useUsers()

const search = ref<string>('')
const status = ref<StatusFilter>('all')

const filteredUsers = computed<User[]>(() => {
 const q = search.value.toLowerCase()
 const bySearch = (u: User) =>
   q === '' ||
   u.name.toLowerCase().includes(q) ||
   u.email.toLowerCase().includes(q)

 const byStatus = (u: User) =>
   status.value === 'all' ? true : u.status === status.value

 return users.value.filter(u => bySearch(u) && byStatus(u))
})



onMounted(fetchUsers)
</script>
