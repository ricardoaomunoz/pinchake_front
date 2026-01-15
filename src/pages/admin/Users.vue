<template>
  <div>
    <div class="text-h5 font-weight-bold mb-2">Users</div>
    <div class="text-body-2 text-medium-emphasis mb-6">
      Admin and customer accounts.
    </div>

    <BaseCard>
      <v-card-text>
        <v-progress-linear v-if="loading" indeterminate color="primary" />
        <v-table v-else>
          <thead>
            <tr>
              <th class="text-left">Email</th>
              <th class="text-left">Name</th>
              <th class="text-left">Role</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.email }}</td>
              <td>{{ user.full_name }}</td>
              <td>{{ user.role }}</td>
              <td>{{ user.is_active ? 'Active' : 'Inactive' }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </BaseCard>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { api } from '@/services/api'

  const users = ref([])
  const loading = ref(false)

  const loadUsers = async () => {
    loading.value = true
    try {
      const data = await api.getUsers()
      users.value = data.users || []
    } catch (error) {
      users.value = []
    } finally {
      loading.value = false
    }
  }

  onMounted(loadUsers)
</script>
