<template>
  <section :id="id">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHero />

        <SectionAboutOurProduct />

        <SectionFeatures />

        <SectionContactUs />

        <SectionCustomerReviews />

        <SectionNewsletter />

        <SectionInfoAlt />
      </v-col>
    </v-row>
  </section>

</template>

<script setup>
  defineProps({
    id: {
      type: String,
      default: 'home',
    },
  })
</script>
