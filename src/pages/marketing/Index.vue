<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHeroAlt />

        <SectionMarketing />

        <SectionProFeatures />

        <SectionContactUs />

        <SectionFeatures />

        <SectionMobile />

        <SectionAffiliates />

        <SectionCustomerReviews />

        <SectionSocialMedia />

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
      default: 'marketing',
    },
  })
</script>
