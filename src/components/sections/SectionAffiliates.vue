<template>
  <BaseSection
    id="affiliates"
    space="36"
  >
    <v-container>
      <BaseSectionHeading title="Who's using Zero?" />

      <v-slide-group>
        <template v-for="n in 6" :key="n">
          <v-slide-group-item>
            <BaseImg
              :src="getImgUrl(`../../assets/logo-${n}-${theme.global.name.value}.png`)"
              height="40"
              width="128"
              contain
            />
          </v-slide-group-item>

          <v-responsive
            v-if="n < 6"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </BaseSection>
</template>

<script setup>
  const theme = useTheme()

  defineOptions({
    inheritAttrs: false,
  })

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href
</script>
