<template>
  <BaseSection id="404">
    <BaseHeading align="center" title="404" />

    <BaseSubheading
      align="center"
      class="text-primary"
      title="Oh!"
    />

    <BaseSubheading
      align="center"
      space="8"
      title="Looks like this page doesn't exist"
    />

    <BaseImg
      :src="Logo"
      class="mx-auto mb-12"
      height="350"
      width="250"
      contain
    />

    <div class="text-center">
      <BaseBtn :to="{ name: 'Home' }">
        Get me Out of Here
      </BaseBtn>
    </div>
  </BaseSection>
</template>

<script setup>
  import Logo from '@/assets/pinchake-logo.jpg'
</script>
