<template>
  <BaseSection id="mobile">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <BaseSectionHeading
            align="left"
            subtitle="Download Your App"
            tag="h2"
            title="Zero On Your Mobile"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos ut eveniet neque aut veritatis numquam aliquam commodi. Laudantium quo ipsum, expedita ipsa in itaque eum culpa dolores dolore ex.
          </BaseSectionHeading>

          <v-row>
            <v-col
              v-for="([icon, title], i) in features"
              :key="i"
              cols="12"
              md="6"
            >
              <div class="d-flex align-center">
                <BaseAvatar
                  :icon="icon"
                  class="mr-6"
                  color="primary"
                  dark
                  outlined
                />

                <v-responsive max-width="112">
                  <BaseSubtitle
                    :title="title"
                    class="text--primary"
                  />
                </v-responsive>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <BaseImg
            :src="MobileImg"
            class="ml-auto"
            height="400"
            max-width="300"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  import MobileImg from '@/assets/mobile.png'

  const features = ref([
    ['mdi-cloud', 'Setup in minutes'],
    ['mdi-package', 'Easily & quickly upload products'],
    ['mdi-account-multiple', 'Get more clients'],
    ['mdi-cash-register', 'Start earning now'],
  ])
</script>
