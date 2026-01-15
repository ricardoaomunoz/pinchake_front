<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">
    <BaseInfoCard
      :title="title"
      color="primary"
    >
      <slot />
    </BaseInfoCard>

    <template v-for="({ icon, text, html, title: t }, i) in business" :key="i">
      <BaseAvatarCard
        :html="html"
        :icon="icon"
        :outlined="false"
        :text="text"
        :title="!dense ? t : undefined"
        space="0"
        dark
        horizontal
      />

      <v-divider
        v-if="i + 1 !== business.length"
        :key="`divider-${i}`"
        class="my-2"
      />
    </template>
  </v-theme-provider>
</template>

<script setup>
  defineProps({
    dark: Boolean,
    dense: Boolean,
    title: String,
  })

  const business = ref([
    {
      icon: 'mdi-map-marker-outline',
      title: 'Address',
      text: 'Colombian Andes',
      html: 'Colombia<br>Andean Mountain Regions',
    },
    {
      icon: 'mdi-instagram',
      title: 'Instagram',
      text: '@pinchake',
      html: '@pinchake',
    },
    {
      icon: 'mdi-facebook',
      title: 'Facebook',
      text: 'PINCHAKE guianza turistica',
      html: 'PINCHAKE guianza turistica',
    },
  ])
</script>
