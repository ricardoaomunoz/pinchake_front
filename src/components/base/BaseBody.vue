<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="base-body text-body-1"
  >

    <!-- Only use v-html for user data -->
    <div
      v-if="html"
      v-html="html"
    />
    <div
      v-else-if="text"
      v-text="text"
    />

    <slot v-else />
  </component>
</template>

<script setup>
  const props = defineProps({
    html: String,
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },
    space: {
      type: [Number, String],
      default: 10,
    },
    tag: {
      type: String,
      default: 'p',
    },
    text: String,
    align: {
      type: String,
      default: 'left',
    },
  })

  const theme = inject('theme', { isDark: false })

  const classes = computed(() => {
    return [
      'grey--text',
      theme?.isDark ? 'text-lighten-1' : 'text-darken-1',
      `text-${props.align}`,
      `mb-${props.space}`,
    ]
  })

  const styles = computed(() => {
    return {
      maxWidth: `${props.maxWidth}px`,
    }
  })
</script>
