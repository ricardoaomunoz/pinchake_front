<template>
  <v-footer
    id="home-footer"
    color="black"
    height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social" :key="s">
              <a
                class="text-white pa-1 pa-md-0"
                href="#"
                v-text="s"
              />

              <v-divider
                v-if="i < social.length - 1"
                class="mx-4"
                vertical
              />
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2020-{{ (new Date()).getFullYear() }} Vuetify, LLC
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  const social = ref([
    'Facebook',
    'Twitter',
    'Instagram',
    'Linkedin',
  ])
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
