<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHeroAlt />

        <SectionProject />

        <SectionRelatedProjects />

        <SectionRecentWorks />

        <SectionWeHelpYourSuccess />

        <SectionAffiliates />

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
      default: 'galley-project',
    },
  })
</script>
