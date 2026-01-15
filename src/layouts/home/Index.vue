<template>
  <v-app>
    <HomeSystemBar />

    <HomeAppBar />

    <HomeView />

    <HomeFooter />
  </v-app>
</template>

<script setup>
  import HomeAppBar from './AppBar.vue'
  import HomeFooter from './Footer.vue'
  import HomeSystemBar from './SystemBar.vue'
  import HomeView from './View.vue'
</script>
