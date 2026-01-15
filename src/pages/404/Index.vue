<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <Section404 />

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
      default: '404',
    },
  })
</script>
