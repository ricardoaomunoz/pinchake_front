<template>
  <v-app-bar
    id="home-app-bar"
    elevation="1"
    height="80"
    scroll-behavior="elevate"
  >
    <template #prepend>
      <BaseImg
        :src="LogoImg"
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

    <div>
      <v-tabs
        bg-color="transparent"
        class="hidden-sm-and-down"
        optional
      >
        <v-tab
          v-for="(name, i) in items"
          :key="i"
          :exact="name === 'Home'"
          :ripple="false"
          :to="{ name }"
          class="font-weight-bold"
        >
          {{ name }}
        </v-tab>
      </v-tabs>
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
  import HomeDrawer from './Drawer.vue'
  import LogoImg from '@/assets/logo.svg'
  import ZeroLogoLight from '@/assets/zero-logo-light.svg'
  import ZeroLogoDark from '@/assets/zero-logo-dark.svg'

  const theme = useTheme()

  const drawer = ref(null)
  const items = ref([
    'Home',
    'Tours',
    'About',
    'Contact',
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
