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
      icon: 'mdi-keyboard-outline',
      title: 'Trendy Design',
      text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
    },
    {
      icon: 'mdi-camera-outline',
      title: 'Photography',
      text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
    },
    {
      icon: 'mdi-pencil-outline',
      title: 'Brand Making',
      text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
    },
    {
      icon: 'mdi-puzzle-outline',
      title: '24/7 Support',
      text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
    },
  ])
</script>
