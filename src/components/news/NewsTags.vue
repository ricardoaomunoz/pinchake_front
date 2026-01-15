<template>
  <BaseInfoCard title="Top Tags">
    <v-row
      class="mb-10"
      dense
    >
      <v-col
        v-for="tag in tags"
        :key="tag"
        cols="auto"
      >
        <v-btn
          class="text-capitalize"
          color="grey-darken-2"
          variant="outlined"
          tile
        >
          {{ tag }}
        </v-btn>
      </v-col>
    </v-row>

    <BaseImg
      :src="TagsImg"
      color="grey-lighten-1"
      height="250"
      width="100%"
      cover
      tile
    />
  </BaseInfoCard>
</template>

<script setup>
  import TagsImg from '@/assets/tags.jpg'

  const tags = ref([
    'Business',
    'Analyze',
    'Video',
    'Branding',
    'Packaging',
    'Motion',
    'Web Pages',
    'Drag & Drop',
  ])
</script>
