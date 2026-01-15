<template>
  <BaseSection id="about-our-product">
    <BaseSectionHeading
      icon="$vuetify"
      title="About Pinchake"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <BaseInfoCard v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const cards = ref([
    {
      title: 'Local Andean Guides',
      subtitle: 'Colombia Based',
      text: 'We are a Colombian guiding team specialized in trekking and high-mountain adventures across the Andes.',
      callout: '01',
    },
    {
      title: 'High-Altitude Expertise',
      subtitle: 'Safety First',
      text: 'Routes are designed with safety, acclimatization, and responsible trekking practices in mind.',
      callout: '02',
    },
    {
      title: 'Conservation Focus',
      subtitle: 'Respect the Mountains',
      text: 'We promote the conservation of Andean ecosystems while supporting local communities.',
      callout: '03',
    },
  ])
</script>
