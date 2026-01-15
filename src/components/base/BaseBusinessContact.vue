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
      text: '8553 N. Beach St. Ste. 227',
      html: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
    },
    {
      icon: 'mdi-cellphone',
      title: 'Phone',
      text: '01 (800) 433 744',
      html: '01 (800) 433 744<br>01 (800) 433 633',
    },
    {
      icon: 'mdi-email',
      title: 'Email',
      text: 'john@vuetifyjs.com',
      html: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
    },
  ])
</script>
