<template>
  <v-slide-group
    :key="String(reset)"
    v-bind="$attrs"
    v-intersect.once="onObserve"
  >
    <v-slide-group-item
      v-for="(card, i) in filtered"
      :key="i"
      v-slot="{ active, toggle }"
    >
      <div class="mx-3">
        <ProjectCard
          :active="active"
          :height="height"
          :src=" getImgUrl(`../../assets/project-${i + 1}.jpg`)"
          :width="width"
          v-bind="card"
          @click="toggle"
        />
      </div>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
  import ProjectCard from '@/components/ProjectCard.vue'

  const props = defineProps({
    filter: {
      type: Function,
      default: v => !!v,
    },
    height: {
      type: [Number, String],
      default: 125,
    },
    width: {
      type: [Number, String],
      default: 175,
    },
  })

  const cards = ref([
    { title: 'Cierra Vega', subtitle: 'Wordpress' },
    { title: 'Pierre Cox', subtitle: 'Statistics' },
    { title: 'Alden Cantrell', subtitle: 'Wordpress' },
    { title: 'Kierra Gentry', subtitle: 'Branding' },
    { title: 'Thomas Crane', subtitle: 'Shopping' },
    { title: 'Miranda Shaffer', subtitle: 'Branding' },
    { title: 'Bradyn Kramer', subtitle: 'Photography' },
    { title: 'Bailey Wolfe', subtitle: 'Wordpress' },
    { title: 'Lorelei Holloway', subtitle: 'Ecommerce' },
    { title: 'Justine Elliott', subtitle: 'Ecommerce' },
  ])

  const reset = ref(false)

  const filtered = computed(() => {
    return cards.value.filter(props.filter)
  })

  const onObserve = (x, y, isVisible) => {
    if (reset.value) return

    // Workaround for now
    // Issue lies within the slide-group's
    // logic to re-calculate the container's
    // overflow
    setTimeout(() => {
      reset.value = !reset.value
    }, 100)
  }

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href
</script>
