<template>
  <div>
    <RouterLink
      :to="{
        name: 'Article',
        params: { slug: 'lorem-ipsum-dolor-sit-amet-consectetur' }
      }"
      class="d-block text-decoration-none"
    >
      <BaseImg
        :height="prominent ? 400 : 250"
        :src="getImgUrl(src)"
        cover
        flat
        tile
      >
        <v-row
          align="end"
          class="ma-0 fill-height"
          justify="end"
        >
          <v-sheet
            class="pa-2 d-inline-flex align-center justify-center"
            color="primary"
            height="40"
            width="40"
          >
            <BaseIcon
              :icon="icon"
              size="24"
            />
          </v-sheet>
        </v-row>
      </BaseImg>
    </RouterLink>

    <v-sheet
      class="d-flex"
      color="secondary"
      max-width="100%"
      tile
    >
      <div class="grow pa-2 text-body-2">
        <div class="d-flex align-center fill-height">
          <span
            class="px-2"
            v-text="date"
          />
          /
          <span
            class="px-2"
            v-text="category"
          />

          <template v-if="mdAndUp">
            /
            <span
              class="px-2"
              v-text="`${comments} Comments`"
            />
          </template>
        </div>
      </div>
    </v-sheet>

    <div class="pa-4">
      <BaseTitle
        :title="title"
        class="text-truncate text-uppercase"
      />

      <BaseBody
        :html="html"
        :text="!html ? truncatedText : undefined"
        space="0"
      />
    </div>

    <v-btn
      v-if="readMore"
      class="font-weight-bold"
      variant="text"
    >
      Read More
    </v-btn>

    <v-divider
      v-if="divider"
      class="mt-6"
    />
  </div>
</template>

<script setup>
  const { mdAndUp } = useDisplay()

  const props = defineProps({
    category: String,
    comments: [Number, String],
    date: String,
    divider: Boolean,
    html: String,
    icon: String,
    prominent: Boolean,
    readMore: Boolean,
    src: String,
    text: String,
    title: String,
    truncate: [Number, String],
  })

  const truncatedText = computed(() => {
    if (!props.text) return ''

    const truncate = Number(props.truncate)

    return props.text.length > truncate
      ? props.text.slice(0, truncate) + ' [...]'
      : props.text
  })

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href
</script>
