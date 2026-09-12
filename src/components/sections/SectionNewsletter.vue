<template>
  <v-theme-provider theme="dark">
    <BaseSection
      id="contact-us"
      :style="`background-color: ${ theme.current.value.colors.primary }`"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <BaseTitle
          space="0"
          :title="t('newsletter.title')"
        />

        <v-responsive
          class="px-4 mx-6"
          content-class="d-flex"
          max-width="600"
          width="100%"
        >
          <BaseTextField
            :label="t('newsletter.email')"
            hide-details
          />
          <v-btn
            class="ml-1"
            height="40"
            variant="outlined"
          >
            {{ t('newsletter.cta') }}
          </v-btn>
        </v-responsive>
      </v-row>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'

  const theme = useTheme()
  const { t } = useI18n()
</script>
