<template>
  <BaseInfoCard title="Instagram">
    <v-row dense>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="auto"
      >
        <BaseImg
          :src="getImgUrl(`../assets/insta-${n}.jpg`)"
          color="grey-lighten-1"
          width="96"
          tile
        />
      </v-col>
    </v-row>
  </BaseInfoCard>
</template>

<script setup>
  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href
</script>
