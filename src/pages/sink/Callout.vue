<template>
  <div>
    <BaseSubheading
      :title="`Section - src/components/sections/${section}.vue 👇`"
      class="pa-6 bg-primary text-white"
      weight="light"
    />

    <slot />
  </div>
</template>

<script setup>
  defineProps({
    section: String,
  })
</script>
