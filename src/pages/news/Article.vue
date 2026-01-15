<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionHeroAlt />

        <SectionArticle />

        <SectionSocialMedia />

        <SectionNews />

        <SectionNewsletterAlt />

        <SectionInfo />
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
