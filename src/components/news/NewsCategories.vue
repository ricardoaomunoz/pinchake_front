<template>
  <BaseInfoCard title="Post Categories">
    <ul class="ps-4">
      <li
        v-for="category in categories"
        :key="category"
        class="mb-3"
        v-text="category"
      />
    </ul>
  </BaseInfoCard>
</template>

<script setup>
  const categories = ref([
    'Analytics Implementation',
    'Business Partnerships',
    'Growth Strategy',
    'Research Discussions',
  ])
</script>
