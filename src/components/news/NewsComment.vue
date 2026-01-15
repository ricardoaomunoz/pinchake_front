<template>
  <v-list-item
    :style="styles"
    class="mb-2 px-0"
  >
    <div class="d-flex">
      <v-avatar
        class="mr-6 align-self-start mt-2"
        color="grey-lighten-1"
        size="96"
      >
        <v-img :src="src" />
      </v-avatar>
      <div>
        <v-list-item-title
          class="text-h6 text-uppercase mb-2"
          v-text="name"
        />
        <v-list-item-subtitle class="mb-3">
          15th Oct 2015 - 10.45 AM&nbsp;—&nbsp;
          <a
            class="text--primary"
            href="#"
          >
            Reply
          </a>
        </v-list-item-subtitle>

        <BaseBody
          :text="comment"
          space="4"
        />
        <v-divider />
      </div>
    </div>
  </v-list-item>
</template>

<script setup>
  const props = defineProps({
    comment: String,
    date: String,
    name: String,
    reply: Boolean,
    src: String,
  })

  const styles = computed(() => {
    return {
      marginLeft: props.reply ? `${96 + (6 * 4)}px` : undefined,
    }
  })
</script>
