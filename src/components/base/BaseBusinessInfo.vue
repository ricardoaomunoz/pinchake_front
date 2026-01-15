<template>
  <v-theme-provider :theme="dark? 'dark': 'light'">
    <div>
    <BaseInfoCard
      pace="6"
      title="Keep in Touch with Pinchake"
    >
      Reach out for custom treks, group trips, or itinerary advice for the Colombian Andes.
    </BaseInfoCard>

      <BaseBusinessContact :dark="dark" dense />
    </div>
  </v-theme-provider>
</template>

<script setup>
  defineProps({
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
