<template>
  <v-list-item class="py-12 px-0">
    <div class="d-flex">
      <v-avatar
        class="mr-6"
        color="grey-lighten-1"
        size="128"
      >
        <v-img :src="src" />
      </v-avatar>
      <div>

        <v-list-item-title
          class="mb-3 text-h6 text-uppercase"
          v-text="name"
        />
        <BaseBody
          :text="blurb"
          space="3"
        />
        <div class="mx-n2">
          <v-icon
            v-for="icon in icons"
            :key="icon"
            class="px-2"
            size="small"
            @click="() => {}"
          >{{ icon }}</v-icon>
        </div>
      </div>
    </div>
  </v-list-item>
</template>

<script setup>
  const icons = ref([
    'mdi-twitter',
    'mdi-facebook',
    'mdi-github',
    'mdi-snapchat',
  ])

  defineProps({
    name: String,
    blurb: String,
    src: String,
  })
</script>
