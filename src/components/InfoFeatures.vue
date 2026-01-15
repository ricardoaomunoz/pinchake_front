<template>
  <BaseInfoCard title="Features">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 text-grey text-body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </BaseInfoCard>
</template>

<script setup>
  const features = ref(
    [
      'Zero Installation',
      'Easy Customization',
      'User Friendly Design',
      '24/7 Support Desk',
      'SEO Optimized',
    ]
  )
</script>
