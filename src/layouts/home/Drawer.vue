<template>
  <v-navigation-drawer
    v-model="drawer"
    location="bottom"
    width="360"
    temporary
  >
    <v-list color="white" shaped>
      <v-list-item
        v-for="item in items"
        :key="item.name"
        :exact="item.name === 'Home'"
        :to="{ name: item.name }"
        color="primary"
      >
        <v-list-item-title>{{ t(item.label) }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider class="my-2" />
    <v-list class="px-4">
      <v-select
        v-model="currentLocale"
        :items="locales"
        density="comfortable"
        hide-details
        label="Language"
        variant="outlined"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const drawer = ref(false)

  const { t, locale } = useI18n()

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

  defineProps({
    items: {
      type: Array,
      default: () => ([]),
    },
  })

</script>

<style lang="sass">

</style>
