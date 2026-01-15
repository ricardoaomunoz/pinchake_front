<template>
  <v-theme-provider theme="dark">
    <BaseSection
      id="map"
      :style="`background-color: ${ theme.current.value.colors.accent }`"
      class="bg-accent"
      space="56"
    >
      <BaseTitle
        align="center"
        space="8"
        title="GET OUR NEWSLETTER"
      />

      <v-responsive
        class="mx-auto px-4"
        max-width="400"
      >
        <v-text-field
          bg-color="rgba(255, 255, 255, .04)"
          label="Your Email Address"
          variant="solo"
          dark
          flat
          hide-details
          tile
        >
          <template #append>
            <v-btn
              color="rgba(255, 255, 255, .04)"
              icon
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-responsive>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  const theme = useTheme()
</script>
