<template>
  <BaseInfoCard title="Archives">
    <ul class="ps-4">
      <li
        v-for="archive in archives"
        :key="archive"
        class="mb-3"
        v-text="archive"
      />
    </ul>
  </BaseInfoCard>
</template>

<script setup>
  const archives = ref([
    'November 2019 (8)',
    'October 2019 (8)',
    'August 2018 (8)',
    'December 2017 (8)',
  ])
</script>
