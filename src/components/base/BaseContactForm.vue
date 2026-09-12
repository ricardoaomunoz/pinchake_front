<template>
  <div>
    <BaseInfoCard
      :space="4"
      :subtitle="subtitle"
      :title="title || t('form.title')"
      color="primary"
    />

    <BaseTextField :label="t('form.name')" />

    <BaseTextField :label="t('form.email')" />

    <BaseTextField :label="t('form.subject')" />

    <BaseTextarea
      class="mb-6"
      :label="t('form.message')"
    />

    <BaseBtn
      :color="!theme.current.value.dark ? 'accent' : 'white'"
      href="mailto:info@pinchake.co?subject=Pinchake%20Trek%20Inquiry"
      target="_blank"
      outlined
    >
      {{ t('form.cta') }}
    </BaseBtn>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'

  const theme = useTheme()
  const { t } = useI18n()

  defineProps({
    subtitle: String,
    title: String,
  })
</script>
