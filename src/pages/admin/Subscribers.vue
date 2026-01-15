<template>
  <div>
    <div class="text-h5 font-weight-bold mb-2">Subscribers</div>
    <div class="text-body-2 text-medium-emphasis mb-6">
      Newsletter contacts from the website.
    </div>

    <BaseCard>
      <v-card-text>
        <v-progress-linear v-if="loading" indeterminate color="primary" />
        <v-table v-else>
          <thead>
            <tr>
              <th class="text-left">Email</th>
              <th class="text-left">Name</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subscriber in subscribers" :key="subscriber.id">
              <td>{{ subscriber.email }}</td>
              <td>{{ subscriber.full_name || '—' }}</td>
              <td>{{ subscriber.is_active ? 'Active' : 'Inactive' }}</td>
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

  const subscribers = ref([])
  const loading = ref(false)

  const loadSubscribers = async () => {
    loading.value = true
    try {
      const data = await api.getSubscribers()
      subscribers.value = data.subscribers || []
    } catch (error) {
      subscribers.value = []
    } finally {
      loading.value = false
    }
  }

  onMounted(loadSubscribers)
</script>
