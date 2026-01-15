<template>
  <BaseSection
    id="features"
    color="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            md="3"
            sm="4"
          >
            <BaseInfoCard
              align="center"
              color="primary"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </BaseSection>
</template>

<script setup>
  const cards = ref([
    {
      icon: 'mdi-compass-outline',
      title: 'Curated Routes',
      text: 'High-mountain treks across Colombia with clear itineraries and experienced local guides.',
    },
    {
      icon: 'mdi-mountain',
      title: 'Altitude Ready',
      text: 'We plan acclimatization and pacing to keep your trek safe and enjoyable.',
    },
    {
      icon: 'mdi-leaf',
      title: 'Conservation Minded',
      text: 'Leave-no-trace practices and respect for Andean ecosystems are part of every trip.',
    },
    {
      icon: 'mdi-account-group-outline',
      title: 'Small Groups',
      text: 'Personal attention, flexible pacing, and a better connection to the mountains.',
    },
  ])
</script>
