<template>
  <BaseSection id="marketing">
    <v-container>
      <v-row>
        <v-col
          class="text-center hidden-sm-and-down"
          cols="3"
        >
          <template v-for="(card, i) in cards" :key="card.title">
            <BaseAvatarCard
              align="center"
              v-bind="card"
            />

            <v-divider
              v-if="i + 1 !== cards.length"
              class="my-8"
            />
          </template>
        </v-col>

        <v-col
          class="hidden-sm-and-down text-center"
          cols="2"
        >
          <v-responsive
            class="mt-2"
            height="calc(100% - 16px)"
          >
            <v-divider class="h-100" vertical />
          </v-responsive>
        </v-col>

        <v-col
          cols="12"
          md="7"
        >
          <BaseSubheading
            size="text-h4"
            space="0"
            title="MARKETING"
          />

          <BaseTitle
            tag="div"
            title="SERVICES"
          />

          <BaseBody>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est omnis dolor repellendus.
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et mo lestiae non recusandae Itaque earum rerum hic tenetur.
            a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
          </BaseBody>

          <BaseBtn class="mb-12">
            Discover More
          </BaseBtn>

          <v-row>
            <v-col
              v-for="(text, i) in marketing"
              :key="i"
              cols="12"
              md="6"
            >
              <BaseListItem :text="text" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const cards = ref([
    {
      title: 'Graphic Design',
      icon: 'mdi-mouse',
      outlined: true,
    },
    {
      dark: true,
      title: 'Marketing',
      color: 'primary',
      icon: 'mdi-headphones',
    },
    {
      title: 'Development',
      icon: '$vuetify',
      outlined: true,
    },
  ])

  const marketing = ref([
    'Search Engine optimization',
    'Virtual Marketing',
    'Content Management',
    'Virtual Marketing',
    'Keyword Analysis',
    'Content Management',
  ])
</script>
