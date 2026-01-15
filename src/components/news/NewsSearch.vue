<template>
  <div>
    <BaseTextField
      append-icon="mdi-magnify"
      label="Search articles"
    />

    <BaseInfoCard title="About Us">
      <BaseImg
        :src="ConferenceImg"
        class="mb-4"
        height="196"
        width="100%"
        tile
      />

      <BaseBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio tempore? Nihil nemo quae ex cum.
      </BaseBody>
    </BaseInfoCard>
  </div>
</template>

<script setup>
  import ConferenceImg from '@/assets/conference.jpg'
</script>
