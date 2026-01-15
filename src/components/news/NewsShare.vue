<template>
  <div>
    <v-divider />

    <v-row
      align="center"
      class="ma-0 pa-4"
    >
      <div>
        <BaseAvatar
          :color="theme.current.value.colors.primary"
          :dark="true"
          :outlined="false"
          :size="32"
          class="mr-1 align-self-start"
          icon="mdi-share-variant"
        />

        <span class="d-inline-block text-body-1 font-weight-bold">Share Post</span>
      </div>

      <v-spacer />

      <div>
        <a
          v-for="(platform, i) in socialMedia"
          :key="i"
          class="text--primary d-inline-block ml-2"
          href="#"
          v-text="`${platform}${i + 1 < socialMedia.length ? ',' : ''}`"
        />
      </div>
    </v-row>

    <v-divider />
  </div>
</template>

<script setup>
  const socialMedia = ref([
    'Website',
    'Template',
    'Psd',
  ])

  const theme = useTheme()
</script>
