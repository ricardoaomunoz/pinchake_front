<template>
  <BaseCard
    :to="{
      name: 'Project',
      params: { project: 'lorem-ipsum' }
    }"
    v-bind="$attrs"
  >
    <BaseImg
      v-if="src"
      :aspect-ratio="1.4"
      :src="src"
      height="inherit"
      cover
    />
  </BaseCard>
</template>

<script setup>
  defineProps({
    src: String,
  })
</script>
