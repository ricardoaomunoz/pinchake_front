<template>
  <v-app-bar
    id="home-app-bar"
    elevation="1"
    height="96"
    scroll-behavior="elevate"
  >
    <template #prepend v-if='img' >
      <BaseImg
        :src="LogoImg"
        class="mx-3"
        width="140"
        contain
      />
      <!-- <BaseImg
        :src="theme.current.value.dark ? ZeroLogoDark : ZeroLogoLight"
        width="96"
        contain
      /> -->
      <!-- <BaseImg
        :src="theme.current.value.dark ? PinchakeLetters : PinchakeLetters"
        width="126"
        contain
      /> -->

    </template>

    <template #prepend v-else>
      <BaseImg
        :src="LogoImg2"
        class="mx-3 hidden-xs"
        width="46"
        contain
      />

      <BaseImg
        :src="theme.current.value.dark ? ZeroLogoDark : ZeroLogoLight"
        width="96"
        contain
      />
    </template>

    <v-spacer />

    <div class="d-flex align-center">
      <v-tabs
        bg-color="transparent"
        class="hidden-sm-and-down"
        optional
      >
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :exact="item.name === 'Home'"
          :ripple="false"
          :to="{ name: item.name }"
          class="font-weight-bold"
        >
          {{ t(item.label) }}
        </v-tab>
      </v-tabs>

      <v-select
        v-model="currentLocale"
        :items="locales"
        class="ml-4 hidden-sm-and-down"
        density="compact"
        hide-details
        variant="outlined"
        style="max-width: 110px"
      />
    </div>

    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />
  </v-app-bar>

  <HomeDrawer
    v-model="drawer"
    :items="items"
  />
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import HomeDrawer from './Drawer.vue'
  import LogoImg from '@/assets/pinchake-logo2.png'
  import PinchakeLetters from '@/assets/pichake-logo-let.png'
  
  import LogoImg2 from '@/assets/logo.svg'
  import ZeroLogoLight from '@/assets/zero-logo-light.svg'

  const { t, locale } = useI18n()
  const theme = useTheme()
  const img = ref(1)

  const locales = [
    { title: 'ES', value: 'es' },
    { title: 'EN', value: 'en' },
  ]

  const currentLocale = computed({
    get: () => locale.value,
    set: (value) => {
      locale.value = value
      localStorage.setItem('pinchake_locale', value)
    },
  })

  const drawer = ref(null)
  const items = ref([
    { name: 'Home', label: 'nav.home' },
    { name: 'Tours', label: 'nav.tours' },
    { name: 'About', label: 'nav.about' },
    { name: 'Contact', label: 'nav.contact' },
  ])
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
