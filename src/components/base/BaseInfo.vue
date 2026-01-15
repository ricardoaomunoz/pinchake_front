<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">
    <BaseImg
      :src="Logo"
      max-width="140"
      min-height="78"
      width="100%"
      contain
    />

    <BaseTitle
      size="text-body-1"
      space="4"
      title="Pinchake Trekking & Adventure"
      weight="regular"
    />

    <BaseBody>
      We are a local guiding team dedicated to trekking in the Colombian Andes. Our trips highlight safety, community, and conservation.
    </BaseBody>

    <BaseBtn
      class="mb-12"
      color="white"
      outlined
    >
      Learn More
    </BaseBtn>
  </v-theme-provider>
</template>

<script setup>
  import Logo from '@/assets/pinchake-logo.jpg'

  defineProps({
    title: String,
    dark: {
      type: Boolean,
      default: false,
    },
  })

  const business = ref([
    {
      icon: 'mdi-map-marker-outline',
      title: 'Address',
      text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
    },
    {
      icon: 'mdi-cellphone',
      title: 'Phone',
      text: '01 (800) 433 744<br>01 (800) 433 633',
    },
    {
      icon: 'mdi-email',
      title: 'Email',
      text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
    },
  ])
</script>
