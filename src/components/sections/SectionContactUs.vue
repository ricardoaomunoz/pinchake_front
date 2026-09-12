<template>
  <v-theme-provider>
    <BaseSection
      id="contact-us"
      color="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <BaseTitle
              :space="mdAndUp ? 0 : 4"
              :title="t('contact.title')"
            />

            <BaseBody space="0">
              <span>
                {{ t('contact.body') }}
              </span>
            </BaseBody>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <BaseBtn
              :block="smAndDown"
              color="white"
              href="#info-alt"
              large
              outlined
            >
              {{ t('contact.cta') }}
            </BaseBtn>
          </v-col>
        </v-row>
      </v-container>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'

  const { mdAndUp, smAndDown } = useDisplay()
  const { t } = useI18n()
</script>
