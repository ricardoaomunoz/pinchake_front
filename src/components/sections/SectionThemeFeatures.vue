<template>
  <BaseSection id="theme-features">
    <BaseSectionHeading title="Theme Features">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </BaseSectionHeading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <BaseAvatarCard
            v-bind="feature"
            align="left"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const features = ref([
    {
      title: 'Pixel Perfect Design',
      icon: 'mdi-fountain-pen-tip',
    },
    {
      title: 'Retina Ready',
      icon: 'mdi-cellphone',
    },
    {
      dark: true,
      title: 'Easily Customizable',
      icon: 'mdi-pencil-box-outline',
    },
    {
      title: 'Image Parallax',
      icon: 'mdi-image-size-select-actual',
    },
    {
      title: 'Seo Optimized',
      icon: 'mdi-ice-pop',
    },
    {
      title: '24/7 Support',
      icon: 'mdi-help-circle-outline',
    },
  ])
</script>
