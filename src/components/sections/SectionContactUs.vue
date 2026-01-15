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
              title="HAVE QUESTIONS? LET US KNOW!"
            />

            <BaseBody space="0">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor itaque modi ab accusantium architecto voluptates ipsa molestiae.
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
              href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
              target="_blank"
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
