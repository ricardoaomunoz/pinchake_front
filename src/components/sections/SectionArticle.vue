<template>
  <BaseSection
    id="article"
    space="72"
  >
    <v-container class="py-0">
      <v-row justify="center">
        <v-col
          cols="12"
          md="7"
        >
          <NewsCard
            class="mb-4"
            prominent
            v-bind="article"
          />

          <NewsShare />

          <NewsAuthor v-bind="author" />

          <NewsComments />

          <NewsCommentReply />
        </v-col>

        <v-col
          class="hidden-sm-and-down"
          cols="3"
        >
          <NewsSearch />

          <NewsCategories />

          <NewsRecentArticles />

          <NewsArchives />

          <NewsTags />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  import AuthorImg from '@/assets/author.png'
  import FirstArticleImg from '@/assets/article-1.jpg'

  const author = ref({
    name: 'John Leider',
    blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio nostrum.',
    src: AuthorImg,
  })

  const article = ref({
    icon: 'mdi-image',
    date: 'Jan 12, 2020',
    category: 'Research Discussions',
    comments: 5,
    title: 'Lorem ipsum dolor, sit amet consectetur',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam. Vero dolorem, eos sapiente, ad voluptatem eveniet, a cum blanditiis consequatur esse facere minima! Non, minus ullam facere earum labore aperiam aliquam.</p>
    `,
    src: FirstArticleImg,
  })
</script>
