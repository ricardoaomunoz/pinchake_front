<template>
  <BaseSection id="about-our-product">
    <BaseSectionHeading
      icon="$vuetify"
      :title="t('about.title')"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <BaseInfoCard v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const cards = computed(() => [
    {
      title: t('about.cards.one.title'),
      subtitle: t('about.cards.one.subtitle'),
      text: t('about.cards.one.text'),
      callout: '01',
    },
    {
      title: t('about.cards.two.title'),
      subtitle: t('about.cards.two.subtitle'),
      text: t('about.cards.two.text'),
      callout: '02',
    },
    {
      title: t('about.cards.three.title'),
      subtitle: t('about.cards.three.subtitle'),
      text: t('about.cards.three.text'),
      callout: '03',
    },
  ])
</script>
