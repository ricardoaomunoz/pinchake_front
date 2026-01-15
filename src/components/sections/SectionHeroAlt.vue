<template>
  <section id="hero-alt">
    <BaseImg
      :gradient="gradient"
      :height="mdAndUp ? 350 : 225"
      :src="getImgUrl(`../../assets/${currentTitle?.src || 'home-hero.jpg'}`)"
      max-width="100%"
      cover
      flat
      tile
    >
      <v-row
        align="center"
        class="ma-0 fill-height text-center text-white"
        justify="center"
      >
        <v-col cols="12">
          <BaseHeading
            :title="currentTitle?.title || ''"
            align="center"
            weight="medium"
          />

          <BaseDivider
            align="center"
          />

          <v-breadcrumbs :items="items" style="justify-content: center;">
            <template #divider>
              <v-icon icon="mdi-chevron-right" />
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </BaseImg>
  </section>
</template>

<script setup>
  import {
    HexToRGB,
    RGBtoCSS,
  } from 'vuetify/lib/util/colorUtils'

  provide('heading', { align: 'center' })

  const { mdAndUp } = useDisplay()
  const theme = useTheme()
  const { path } = useRoute()

  const gradient = computed(() => {
    const color = `${theme.current.value.colors.secondary}CC`
    const overlay = RGBtoCSS(HexToRGB(color))

    return `to top, ${overlay}, ${overlay}`
  })

  const currentTitle = ref({ path: '', title: 'HOME', src: 'home-hero.jpg' })

  const titleList = ref([
    { path: '', title: 'HOME', src: 'home-hero.jpg' },
    { path: 'about', title: 'ABOUT US', src: 'about.jpg' },
    { path: 'marketing', title: 'MARKETING', src: 'marketing.jpg' },
    { path: 'gallery', title: 'GALLERY', src: 'gallery.jpg' },
    { path: 'pricing-plans', title: 'PRICING PLANS', src: 'pricing.jpg' },
    { path: 'news', title: 'LATEST NEWS', src: 'news.jpg' },
    { path: 'contact-us', title: 'CONTACT US', src: 'contact.jpg' },
    { path: 'news-single', title: 'NEWS SINGLE', src: 'article.jpg' },
    { path: 'project-single', title: 'PROJECT SINGLE', src: 'project.jpg' },
    { path: 'kitchen-sink', title: 'KITCHEN SINK', src: 'sink.jpg' },

  ])

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

  onMounted(async () => {
    if (path.includes('/news/')) currentTitle.value = titleList.value[7]
    else if (path.includes('/gallery/')) currentTitle.value = titleList.value[8]
    else {
      const pathName = path.replaceAll('/', '')

      currentTitle.value = await titleList.value.find(val => val.path === pathName)
    }
  })

  const items = computed(() => {
    return [
      {
        title: 'HOME',
        disabled: false,
        href: '/',
      },
      {
        title: currentTitle.value?.title,
        disabled: false,
        href: '#',
      },
    ]
  })
</script>

<style lang="sass">
  #hero-alt
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
