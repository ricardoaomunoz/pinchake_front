<template>
  <BaseSection id="about-our-product">
    <BaseSectionHeading
      icon="$vuetify"
      title="About our Product"
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
      title: 'Grow your Revenue',
      subtitle: 'Best Productivity',
      text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
      callout: '01',
    },
    {
      title: 'Affordable Prices',
      subtitle: 'Special Offers',
      text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
      callout: '02',
    },
    {
      title: 'Target Setting',
      subtitle: 'Income Flow',
      text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
      callout: '03',
    },
  ])
</script>
