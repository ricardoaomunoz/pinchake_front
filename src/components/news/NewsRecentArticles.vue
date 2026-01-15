<template>
  <BaseInfoCard title="Recent Articles">
    <v-list class="py-0">
      <template v-for="(article, i) in articles" :key="i">
        <v-list-item
          class="px-0"
          lines="three"
        >
          <div class="d-flex">
            <BaseImg
              :src="getImgUrl(`../../assets/article-${5+i}.jpg`)"
              class="mr-4"
              color="grey-lighten-1"
              height="72"
              width="72"
              cover
            />

            <div class="pt-1">
              <v-list-item-subtitle
                class="text-uppercase text-subtitle-2 font-weight-bold text--primary mb-2"
                v-text="article.title"
              />

              <v-list-item-subtitle
                class="font-weight-bold"
                v-text="article.date"
              />
            </div>
          </div>
        </v-list-item>

        <v-divider />
      </template>
    </v-list>
  </BaseInfoCard>
</template>

<script setup>
  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

  const articles = ref([
    {
      date: 'Jan 12, 2020',
      title: 'Lorem ipsum dolor, sit amet',
    },
    {
      date: 'Oct 19, 2019',
      title: 'Lorem ipsum dolor, sit amet',
    },
    {
      date: 'Jul 24, 2019',
      title: 'Lorem ipsum dolor, sit amet',
    },
  ])
</script>
