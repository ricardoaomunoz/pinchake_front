<template>
  <div>
    <div class="text-h5 font-weight-bold mb-2">Tours</div>
    <div class="text-body-2 text-medium-emphasis mb-6">
      Create and manage trekking packages.
    </div>

    <v-row>
      <v-col cols="12" md="4">
        <BaseCard>
          <v-card-text>
            <div class="text-h6 mb-4">Create Tour</div>
            <v-form @submit.prevent="createTour">
              <BaseTextField v-model="form.name" label="Name" required />
              <BaseTextField v-model="form.location" label="Location" required />
              <BaseTextField v-model="form.difficulty" label="Difficulty" required />
              <BaseTextField
                v-model="form.duration_days"
                label="Duration (days)"
                type="number"
                required
              />
              <BaseTextField
                v-model="form.max_altitude_m"
                label="Max Altitude (m)"
                type="number"
              />
              <BaseTextField
                v-model="form.price_from"
                label="Price From"
                type="number"
              />
              <BaseTextarea v-model="form.summary" label="Summary" required />
              <BaseTextarea v-model="form.description" label="Description" required />
              <v-btn
                type="submit"
                color="primary"
                block
                :loading="loading"
                class="mt-4"
              >
                Create Tour
              </v-btn>
            </v-form>
            <v-alert v-if="error" type="error" variant="tonal" class="mt-4">
              {{ error }}
            </v-alert>
          </v-card-text>
        </BaseCard>
      </v-col>

      <v-col cols="12" md="8">
        <BaseCard>
          <v-card-text>
            <div class="text-h6 mb-4">Existing Tours</div>
            <v-progress-linear v-if="loadingList" indeterminate color="primary" />
            <v-table v-else>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Location</th>
                  <th class="text-left">Duration</th>
                  <th class="text-left">Difficulty</th>
                  <th class="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tour in tours" :key="tour.id">
                  <td>{{ tour.name }}</td>
                  <td>{{ tour.location }}</td>
                  <td>{{ tour.duration_days }} days</td>
                  <td>{{ tour.difficulty }}</td>
                  <td>
                    <v-btn
                      variant="text"
                      color="error"
                      @click="deleteTour(tour.id)"
                    >
                      Delete
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </BaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue'
  import { api } from '@/services/api'

  const tours = ref([])
  const loading = ref(false)
  const loadingList = ref(false)
  const error = ref('')

  const form = reactive({
    name: '',
    location: '',
    summary: '',
    description: '',
    duration_days: '',
    difficulty: '',
    max_altitude_m: '',
    price_from: '',
  })

  const loadTours = async () => {
    loadingList.value = true
    try {
      const data = await api.getTours()
      tours.value = data.tours || []
    } catch (err) {
      tours.value = []
    } finally {
      loadingList.value = false
    }
  }

  const createTour = async () => {
    loading.value = true
    error.value = ''
    try {
      await api.createTour({
        ...form,
        duration_days: Number(form.duration_days),
        max_altitude_m: form.max_altitude_m ? Number(form.max_altitude_m) : null,
        price_from: form.price_from ? Number(form.price_from) : null,
      })
      Object.keys(form).forEach((key) => {
        form[key] = ''
      })
      await loadTours()
    } catch (err) {
      error.value = err.message || 'Failed to create tour'
    } finally {
      loading.value = false
    }
  }

  const deleteTour = async (id) => {
    try {
      await api.deleteTour(id)
      tours.value = tours.value.filter((tour) => tour.id !== id)
    } catch (err) {
      error.value = err.message || 'Failed to delete tour'
    }
  }

  onMounted(loadTours)
</script>
