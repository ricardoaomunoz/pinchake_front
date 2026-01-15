<template>
  <BaseSection
    id="recent-works"
    space="0"
  >
    <v-container
      class="py-0"
      fluid
    >
      <v-row justify="center">
        <v-theme-provider>
          <v-col
            class="extra-padding bg-accent"
            cols="12"
            md="4"
          >
            <v-responsive
              class="mx-auto"
              max-width="360"
            >
              <BaseSubtitle
                space="2"
                title="Portfolio Showcase"
              />

              <BaseTitle
                mobile-size="title"
                size="text-h4"
                space="2"
                title="RECENT WORKS"
              />

              <BaseDivider color="primary" />

              <BaseBody :space="smAndDown ? 0 : undefined">
                <div class="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati architecto adipisci ipsam dolore aut quisquam a hic corrupti. Autem natus explicabo doloribus?
                </div>
              </BaseBody>

              <v-item-group
                v-model="category"
                class="hidden-sm-and-down"
              >
                <template v-for="(c, i) in categories" :key="i">
                  <v-item :value="c">
                    <template #default="{ isSelected, toggle }">
                      <v-btn
                        :active="isSelected"
                        :text="c"
                        class="justify-start mb-1"
                        color="grey-lighten-1"
                        size="small"
                        variant="text"
                        width="140"
                        @click="toggle"
                      />
                    </template>
                  </v-item>

                  <br
                    v-if="i < categories.length"
                    :key="`br-${i}`"
                  >
                </template>
              </v-item-group>
            </v-responsive>
          </v-col>
        </v-theme-provider>

        <v-col
          class="d-flex align-center"
          cols="12"
          md="8"
        >
          <SectionProjects
            :filter="filter"
            height="325"
            width="325"
          />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  defineOptions({
    inheritAttrs: false,
  })

  const category = ref('All')
  const categories = ref([
    'All',
    'Wordpress',
    'Branding',
    'Statistics',
    'Shopping',
    'Photography',
    'Ecommerce',
  ])

  const { smAndDown } = useDisplay()

  function filter (card) {
    return card.subtitle === category.value || category.value === 'All'
  }
</script>
