<template>
  <BaseSection
    id="info-graph"
    space="0"
  >
    <v-container
      class="py-0"
      fluid
    >
      <v-row>
        <v-col
          class="extra-padding"
          cols="12"
          md="4"
        >
          <v-responsive
            class="mx-auto"
            max-width="460"
          >
            <BaseInfoCard
              color="primary"
              subtitle="Monthly Status"
              title="Our Detailed Analysis"
            />

            <BaseBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit hic, porro numquam ipsum iste, earum adipisci dignissimos sapiente cupiditate veritatis consequatur eaque culpa enim nesciunt esse tempora iusto in?
            </BaseBody>

            <BaseBtn>Explore More</BaseBtn>
          </v-responsive>
        </v-col>

        <v-col
          :style="`background-color: ${theme.current.value.colors.secondary}`"
          class="d-flex flex-wrap child-flex"
          cols="12"
          md="4"
        >
          <v-sparkline
            :fill="true"
            :gradient="gradient"
            :model-value="value"
            :smooth="true"
            line-width="2"
          />
        </v-col>

        <v-col
          class="extra-padding"
          cols="12"
          md="4"
        >
          <v-responsive
            class="mx-auto"
            max-width="460"
          >
            <BaseInfoCard
              color="primary"
              subtitle="Our Stuff"
              title="Amazing Skills"
            />

            <BaseProgress
              v-for="([title, val], i) in progress"
              :key="i"
              :title="`${title} - ${val}%`"
              :value="val"
            />
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const theme = useTheme()

  const progress = ref([
    ['Marketing', 90],
    ['Graphic Design', 75],
    ['Wordpress', 60],
  ])
  const value = ref([4, 2, 6, 10, 12, 8, 4, 12, 4, 2, 6, 10, 12, 8, 4, 12])

  const gradient = computed(() => {
    const {
      primary,
      accent,
    } = theme.current.value.colors

    return [primary, accent]
  })
</script>
