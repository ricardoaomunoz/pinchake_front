<template>
  <BaseSection
    id="features"
    color="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            md="3"
            sm="4"
          >
            <BaseInfoCard
              align="center"
              color="primary"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </BaseSection>
</template>

<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const cards = computed(() => [
    {
      icon: 'mdi-compass-outline',
      title: t('features.curated.title'),
      text: t('features.curated.text'),
    },
    {
      icon: 'mdi-mountain',
      title: t('features.altitude.title'),
      text: t('features.altitude.text'),
    },
    {
      icon: 'mdi-leaf',
      title: t('features.conservation.title'),
      text: t('features.conservation.text'),
    },
    {
      icon: 'mdi-account-group-outline',
      title: t('features.groups.title'),
      text: t('features.groups.text'),
    },
  ])
</script>
