<template>
  <BaseSection id="news">
    <BaseSectionHeading title="Latest News">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed consequuntur ipsam temporibus impedit, laboriosam corrupti debitis.
    </BaseSectionHeading>

    <v-container>
      <v-row>
        <v-col
          v-for="(news, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <NewsCard
            v-bind="news"
            :src="getImgUrl(`../../assets/article-${i + 1}.jpg`)"
          />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const articles = ref([
    {
      icon: 'mdi-image',
      date: 'Jan 12, 2020',
      category: 'Design',
      comments: 5,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed[...]',
    },
    {
      icon: 'mdi-play',
      date: 'Oct 19, 2019',
      category: 'Strategy',
      comments: 8,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed[...]',
    },
    {
      icon: 'mdi-text',
      date: 'Jul 24, 2019',
      category: 'Business',
      comments: 13,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nulla voluptas sed[...]',
    },
  ])

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

</script>
