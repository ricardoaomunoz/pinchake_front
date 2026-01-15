<template>
  <v-theme-provider :theme="theme.global.name.value">
    <BaseSection
      id="info-alt"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <BaseInfo />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <BaseInfoCard title="Contact" />

            <BaseBusinessContact dense />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <InfoFeatures />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <Instagram />
          </v-col>
        </v-row>
      </v-container>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  const theme = useTheme()
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
