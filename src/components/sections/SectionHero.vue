<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="BackgroundLight"
      class="text-white"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
      cover
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <BaseSubheading
            :title="t('hero.eyebrow')"
            weight="regular"
          />

          <BaseHeading
            size="text-h2"
            :title="t('hero.title')"
            weight="medium"
          />

          <BaseBody>
            {{ t('hero.body') }}
          </BaseBody>

          <div
            :class="smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <BaseBtn :to="{ name: 'Tours' }">
              {{ t('hero.primaryCta') }}
            </BaseBtn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <BaseBtn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
              href="#contact-us"
            >
              {{ t('hero.secondaryCta') }}
            </BaseBtn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script setup>
  import BackgroundLight from '@/assets/photo1.jpg'
  import { useI18n } from 'vue-i18n'

  const { mdAndUp, smAndDown } = useDisplay()
  const theme = useTheme()
  const { mainRect } = useLayout()
  const { t } = useI18n()

  const minHeight = computed(() => {
    const height = mdAndUp ? '100vh' : '50vh'

    return `calc(${height} - ${mainRect.value.top}px)`
  })
</script>
