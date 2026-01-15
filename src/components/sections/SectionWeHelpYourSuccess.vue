<template>
  <BaseSection id="we-help-your-success">
    <BaseSectionHeading
      icon="mdi-account-outline"
      title="We Help Your Success"
      variant="outlined"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </BaseSectionHeading>

    <v-container>
      <v-row>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="6"
          md="3"
        >
          <v-hover>
            <template #default="{ hover }">
              <BaseImg
                :height="mdAndUp ? 400 : 200"
                :src=" getImgUrl(`../../assets/team-${n}.jpg`)"
                color="grey-lighten-1"
                cover
                flat
                tile
              >
                <v-overlay
                  :model-value="hover"
                  class="pa-4"
                  opacity=".9"
                  scrim="secondary"
                  absolute
                >
                  <BaseSubheading :title="`Name ${n}`" />

                  <BaseBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae provident, accusantium suscipit nesciunt dignissimos architecto saepe. Aspernatur, consequatur architecto. Fugit ex culpa adipisci in at voluptatem, laboriosam enim doloribus?
                  </BaseBody>
                </v-overlay>
              </BaseImg>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const { mdAndUp } = useDisplay()

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href
</script>
