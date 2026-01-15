<template>
  <BaseSection id="gallery">
    <v-tabs
      v-model="tab"
      align-tabs="center"
      class="mb-12"
    >
      <v-tab
        v-for="(t, i) in tabs"
        :key="t"
        :href="`#${t.toLowerCase()}`"
        class="text-capitalize"
      >
        {{ t }}
      </v-tab>
    </v-tabs>

    <v-container>
      <v-fade-transition
        class="d-flex flex-wrap"
        tag="div"
        group
        hide-on-leave
      >
        <v-col
          v-for="(project, i) in projects"
          :key="project.title"
          class="gallery-card"
          cols="12"
          md="4"
          sm="6"
        >
          <ProjectCard
            v-bind="project"
            :src="getImgUrl(`../../assets/project-${project.index}.jpg`)"
            height="300"
            width="100%"
          />
        </v-col>
      </v-fade-transition>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const tab = ref('All')
  const tabs = ref([
    'All',
    'Wordpress',
    'Branding',
    'Statistics',
    'Ecommerce',
    'Photography',
  ])

  const projects = computed(() => {
    return [
      { index: 1, title: 'Cierra Vega', subtitle: 'Wordpress' },
      { index: 2, title: 'Pierre Cox', subtitle: 'Statistics' },
      { index: 3, title: 'Alden Cantrell', subtitle: 'Wordpress' },
      { index: 4, title: 'Kierra Gentry', subtitle: 'Branding' },
      { index: 5, title: 'Thomas Crane', subtitle: 'Shopping' },
      { index: 6, title: 'Miranda Shaffer', subtitle: 'Branding' },
      { index: 7, title: 'Bradyn Kramer', subtitle: 'Photography' },
      { index: 8, title: 'Bailey Wolfe', subtitle: 'Wordpress' },
      { index: 9, title: 'Lorelei Holloway', subtitle: 'Ecommerce' },
      { index: 10, title: 'Justine Elliott', subtitle: 'Ecommerce' },
    ].filter((project, index) => {
      if (typeof tab.value === 'number' && (tab.value === 0 || project.subtitle.toLowerCase() === tabs.value[tab.value].toLowerCase())) return true
      if (typeof tab.value === 'string' && (tab.value.toLowerCase() === 'all' || project.subtitle.toLowerCase() === tab.value.toLowerCase())) return true
    })
  })

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

</script>

<style lang="sass">
  .gallery-card
    transform-origin: center center 0
    transition: .3s cubic-bezier(.25,.8,.50,1)
</style>
