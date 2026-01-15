<template>
  <div>
    <BaseInfoCard
      :space="4"
      :subtitle="subtitle"
      :title="title"
      color="primary"
    />

    <BaseTextField label="Name" />

    <BaseTextField label="Email" />

    <BaseTextField label="Subject" />

    <BaseTextarea
      class="mb-6"
      label="Your Need & Description"
    />

    <BaseBtn
      :color="!theme.current.value.dark ? 'accent' : 'white'"
      href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
      target="_blank"
      outlined
    >
      Send message
    </BaseBtn>
  </div>
</template>

<script setup>
  const theme = useTheme()

  defineProps({
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE',
    },
  })
</script>
