<template>
  <BaseSection
    id="project"
    class="mx-auto"
  >
    <v-container style="max-width: 1024px;">
      <BaseSubheading
        space="12"
        tag="h1"
        title="A WONDERFUL SERENITY HAS TAKEN POSSESSION"
      />

      <BaseImg
        :height="mdAndUp ? 500 : 250"
        :src="getImgUrl(`../../assets/project-${Math.floor(Math.random() * 10) + 1}.jpg`)"
        class="mb-6 mb-md-12"
      />

      <v-row>
        <v-col
          cols="12"
          md="9"
        >
          <BaseTitle title="CASE STUDY" />

          <BaseBody space="12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut totam ipsam cum facere quam alias earum labore explicabo, corrupti molestias neque eaque assumenda adipisci nulla, nemo libero eligendi voluptatibus impedit, corrupti molestias neque eaque assumenda adipisci nulla, nemo libero eligendi voluptatibus impedit, corrupti molestias neque eaque assumenda adipisci nulla, nemo libero eligendi voluptatibus impedit!!
          </BaseBody>

          <v-row class="text-center">
            <v-col
              v-for="[value, title] of values"
              :key="title"
              cols="6"
              md="3"
            >
              <BaseCircularProgress v-bind="{ title, value }" />
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <div class="mb-12">
            <BaseTitle
              align="center"
              title="SHARE"
            />

            <div class="mx-n2 text-center">
              <v-icon
                v-for="icon in icons"
                :key="icon"
                class="px-2"
                @click="() => {}"
              >
                {{ icon }}
              </v-icon>
            </div>
          </div>

          <div class="text-caption">
            <BaseTitle
              space="2"
              title="GENERAL INFO"
            />

            <v-divider />

            <div class="text-grey-darken-1">
              <template v-for="([title, sub], i) of info" :key="title">
                <v-row
                  class="mx-0 my-3"
                  justify="space-between"
                >
                  <span v-text="title" />

                  <strong v-text="sub" />
                </v-row>

                <v-divider />
              </template>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const { mdAndUp } = useDisplay()

  const icons = ref([
    'mdi-twitter',
    'mdi-facebook',
    'mdi-github',
    'mdi-snapchat',
  ])

  const info = ref([
    ['LIVE SITE', 'ZERO-THEME-PRO.JOHNLEIDER.COM'],
    ['DEVELOPMENT TIME', '2 MONTHS'],
    ['TRAFFIC INCREASE', 'BY 91%'],
    ['CUSTOMER SATISFACTION', '99%'],
  ])

  const values = ref([
    [75, 'Prototyping'],
    [50, 'UI/UX Design'],
    [100, 'Development'],
    [65, 'Marketing'],
  ])

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

</script>
