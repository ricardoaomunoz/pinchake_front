<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <component
          :is="`section-${section}`"
          v-for="section in sections"
          :key="section"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script setup>

  defineProps({
    id: {
      type: String,
      default: 'view',
    },
    sections: {
      type: String,
    },
  })

</script>
