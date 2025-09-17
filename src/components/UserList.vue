<template>
 <section>
  <div class="filters">
   <input
     v-model.trim="search"
     class="input"
     type="search"
     placeholder="Search by name or email..."
     aria-label="Search users"
   />

   <select
     v-model="status"
     class="select"
     aria-label="Filter by status"
   >
    <option value="all">All statuses</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
   </select>
  </div>

  <div class="table-wrap" v-if="loading">
   <div class="loading">Loading…</div>
  </div>

  <div class="table-wrap" v-else-if="error">
   <div class="error">{{ error }}</div>
  </div>

  <div class="table-wrap" v-else>
   <table class="table" v-if="filteredUsers.length > 0">
    <thead>
    <tr>
     <th class="table-th-name">Name</th>
     <th class="table-th-email">Email</th>
     <th>Status</th>
     <th class="table-th-actions">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="u in filteredUsers" :key="u.id">
     <td>{{ u.name }}</td>
     <td>{{ u.email }}</td>
     <td>
      <StatusBadge :status="u.status" />
     </td>
     <td class="table-td">
      <button
        class="btn btn--danger"
        @click="onDelete(u.id, u.name)"
        aria-label="Delete user"
      >
       Delete
      </button>
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
import StatusBadge from './StatusBadge.vue'
import { useUsers } from '../composables/useUsers'
import { useToast } from '../composables/useToast'
import type {User} from "@/types/user.ts";
import type {StatusFilter} from "@/types/status-filter.ts";

const { users, loading, error, fetchUsers, deleteUser } = useUsers()
const { push: pushToast } = useToast()

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

async function onDelete(id: number, name: string) {
 const ok = window.confirm(`Delete user "${name}"?`)
 if (!ok) return

 const success = await deleteUser(id)
 if (success) {
  pushToast(`User "${name}" deleted`, 'success', 3200)
 } else {
  pushToast(`Failed to delete "${name}"`, 'error', 3800)
 }
}

onMounted(fetchUsers)
</script>
