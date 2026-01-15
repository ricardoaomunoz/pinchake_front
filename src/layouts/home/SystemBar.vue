<template>
  <v-system-bar
    v-if="model"
    class="ps-6 pe-4"
    color="#262626"
    height="58"
  >
    <a
      class="d-flex align-center"
      href="https://vuetifyjs.com/?ref=vtyd-pro-demo-system-bar"
      target="_blank"
    >
      <v-img
        alt="Vuetify Logo"
        class="me-2"
        src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.png"
        width="32"
        cover
      />

      <v-img
        alt="Vuetify Name"
        class="hidden-xs"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="96"
        cover
      />
    </a>

    <v-spacer />

    <v-btn
      class="text-capitalize text-subtitle-2"
      color="success"
      href="https://store.vuetifyjs.com/products/zero-theme-pro/?ref=vtyd-system-bar"
      min-width="112"
    >
      Buy It Now
    </v-btn>

    <v-divider
      class="ml-6 mr-3"
      vertical
    />

    <v-btn
      class="text-capitalize text-grey me-n2 me-sm-n1"
      size="small"
      variant="text"
      @click="model = false"
    >
      <v-icon
        :start="$vuetify.display.smAndUp"
        color="white"
      >
        mdi-close
      </v-icon>

      <span class="hidden-xs">
        Remove Frame
      </span>
    </v-btn>
  </v-system-bar>
</template>

<script setup>
  const model = ref(true)
</script>
