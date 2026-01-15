<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHeroAlt />

        <SectionPricingPlan />

        <SectionCustomerReviews />

        <SectionAboutOurProduct />

        <SectionInfoGraph />

        <SectionMarketing />

        <SectionFeatures />

        <SectionMobile />

        <SectionContactUs />

        <SectionKeepInTouch />

        <SectionInfoAlt />
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
  defineProps({
    id: {
      type: String,
      default: 'pricing-plans',
    },
  })
</script>
