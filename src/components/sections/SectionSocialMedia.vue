<template>
  <BaseSection
    id="social"
    class="text-center text-white"
    color="accent"
    space="56"
  >
    <BaseIcon class="mb-8">
      mdi-twitter
    </BaseIcon>

    <BaseSectionHeading
      align="center"
      color="white"
      title="Social Media"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
    </BaseSectionHeading>

    <a
      :style="`text-decoration: none; color: ${theme.current.value.colors.primary};`"
      class="d-inline-block mb-8 text-primary"
      href="https://vuetifyjs.com"
      target="_blank"
    >
      https://vuetifyjs.com
    </a>

    <div class="py-4" />

    <v-btn
      class="font-weight-bold"
      color="white"
      href="https://twitter.com/vuetifyjs"
      min-width="168"
      size="x-large"
      target="_blank"
      theme="light"
    >
      Follow Us

      <v-icon end>
        mdi-open-in-new
      </v-icon>
    </v-btn>
  </BaseSection>
</template>

<script setup>
  const theme = useTheme()
</script>
