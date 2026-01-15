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
      href="mailto:info@pinchake.co?subject=Pinchake%20Trek%20Inquiry"
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
      default: 'Send Us a Message',
    },
  })
</script>
