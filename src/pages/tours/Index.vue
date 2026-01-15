<template>
  <v-container class="py-12">
    <BaseSectionHeading
      title="Trekking Tours"
      subtitle="Explore Colombia's high-mountain routes with local guides."
    />

    <v-row class="mt-6" density="compact">
      <v-col
        v-for="tour in tours"
        :key="tour.id"
        cols="12"
        md="4"
      >
        <BaseCard class="h-100">
          <v-card-text>
            <div class="text-h6 font-weight-bold">{{ tour.name }}</div>
            <div class="text-body-2 text-medium-emphasis mt-2">
              {{ tour.summary }}
            </div>
            <div class="text-caption mt-3">
              {{ tour.location }} · {{ tour.duration_days }} days · {{ tour.difficulty }}
            </div>
          </v-card-text>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { api } from '@/services/api'

  const tours = ref([])

  onMounted(async () => {
    try {
      const data = await api.getTours()
      tours.value = data.tours || []
    } catch (error) {
      tours.value = []
    }
  })
</script>
