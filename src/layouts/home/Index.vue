<template>
  <v-app>
    <HomeAppBar />

    <HomeView />

    <HomeFooter />
  </v-app>
</template>

<script setup>
  import HomeAppBar from './AppBar.vue'
  import HomeFooter from './Footer.vue'
  import HomeView from './View.vue'
</script>
