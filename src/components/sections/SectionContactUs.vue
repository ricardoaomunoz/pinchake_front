<template>
  <v-theme-provider>
    <BaseSection
      id="contact-us"
      color="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <BaseTitle
              :space="mdAndUp ? 0 : 4"
              title="Have questions about a trek?"
            />

            <BaseBody space="0">
              <span>
                Tell us your preferred dates and fitness level, and we will suggest the best Andean route.
              </span>
            </BaseBody>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <BaseBtn
              :block="smAndDown"
              color="white"
              href="#info-alt"
              large
              outlined
            >
              Contact Us
            </BaseBtn>
          </v-col>
        </v-row>
      </v-container>
    </BaseSection>
  </v-theme-provider>
</template>

<script setup>
  const { mdAndUp, smAndDown } = useDisplay()
</script>
