<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHeroAlt />

        <SectionNewsAlt />

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
      default: 'News',
    },
  })
</script>
