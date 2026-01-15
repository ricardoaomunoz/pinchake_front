<template>
  <v-theme-provider theme="dark">
    <BaseSection
      id="info-alt"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <BaseInfo />

            <BaseBusinessContact />
          </v-col>

          <v-col
            class="text-center hidden-sm-and-down"
            cols="2"
          >
            <v-divider style="height: 100%;" vertical />
          </v-col>

          <v-col
            cols="12"
            md="5"
          >
            <BaseContactForm subtitle="Drop us a Line" />
          </v-col>
        </v-row>
      </v-container>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  //
</script>
