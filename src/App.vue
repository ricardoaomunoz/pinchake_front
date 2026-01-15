<template>
  <RouterView />
</template>

<script setup>
  //
</script>

<style lang="sass">
  .v-application
    background-color: #F7F7F4
    color: #2B2B2B

  .extra-padding
    padding-bottom: 96px !important
    padding-top: 96px !important

    @media screen and (max-width: 959px)
      padding-top: 48px !important
      padding-bottom: 48px !important
</style>
