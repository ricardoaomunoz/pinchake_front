<template>
  <v-theme-provider theme="dark">
    <BaseSection
      id="contact-us"
      :style="`background-color: ${ theme.current.value.colors.primary }`"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
        <BaseTitle
          space="0"
          title="Get Trek Updates"
        />

        <v-responsive
          class="px-4 mx-6"
          content-class="d-flex"
          max-width="600"
          width="100%"
        >
          <BaseTextField
            label="Your Email Address"
            hide-details
          />
          <v-btn
            class="ml-1"
            height="40"
            variant="outlined"
          >
            Subscribe
          </v-btn>
        </v-responsive>
      </v-row>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  const theme = useTheme()
</script>
