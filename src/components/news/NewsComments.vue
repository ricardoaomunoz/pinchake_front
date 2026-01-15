<template>
  <BaseInfoCard
    :title="`Comments(${comments.length})`"
    class="mb-12"
  >
    <NewsComment
      v-for="(comment, i) in comments"
      :key="i"
      v-bind="comment"
      :src="getImgUrl(`../../assets/user-${i + 1}.jpg`)"
    />
  </BaseInfoCard>
</template>

<script setup>
  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

  const comments = ref(
    [
      {
        name: 'Stacy Porter',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni, pariatur, iste enim esse.',
        reply: false,
      },
      {
        name: 'James Brooker',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni, pariatur, iste enim esse.',
        reply: true,
      },
      {
        name: 'Holly Campbell',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni, pariatur, iste enim esse.',
        reply: false,
      },
    ]
  )
</script>./NewsComment.vue
