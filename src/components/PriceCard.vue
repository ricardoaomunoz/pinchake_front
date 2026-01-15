<template>
  <v-card
    :color="color"
    :elevation="value ? 12 : 0"
    class="pa-2"
    variant="outlined"
    tile
  >
    <v-card
      variant="outlined"
      flat
      tile
    >
      <div class="pa-6 pb-12 mb-8">
        <BaseTitle
          :title="title"
          align="center"
          class="text-uppercase"
          space="1"
        />

        <BaseSubtitle
          :title="subtitle"
          align="center"
          space="8"
        />

        <div class="d-flex align-center justify-center">
          <BaseHeading
            :title="price.toString()"
            mobile-size="display-2"
            space="0"
            tag="h3"
          >
            <sup><small>$</small></sup>
          </BaseHeading>

          <div class="text-left ml-4 text-body-2 font-weight-bold mt-1 text-uppercase">
            PER
            <BaseDivider
              align="left"
              color="primary"
              space="0"
            />
            {{ interval }}
          </div>
        </div>
      </div>

      <div class="mb-8" />

      <div class="pb-12">
        <div class="px-8 mb-12">
          <template v-for="(feature, i) in features" :key="feature">
            <div
              class="my-3"
              v-text="feature"
            />

            <v-divider
              v-if="i + 1 < features.length"
              :key="`divider-${i}`"
            />
          </template>
        </div>

        <BaseBtn
          :outlined="!value"
          width="196"
        >
          Get Started
        </BaseBtn>
      </div>
    </v-card>
  </v-card>
</template>

<script setup>
  const theme = useTheme()

  provide('heading', { align: 'center' })

  const props = defineProps({
    features: {
      type: Array,
      default: () => [],
    },
    price: [Number, String],
    subtitle: String,
    title: String,
    interval: {
      type: String,
      required: true,
    },
    value: Boolean,
  })

  const color = computed(() => {
    if (!props.value) return undefined
    return theme.current.value.dark ? 'white' : 'grey lighten-5'
  })
</script>
