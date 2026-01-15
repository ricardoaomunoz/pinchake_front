<template>
  <BaseSection
    id="customer-reviews"
    space="64"
  >
    <BaseSectionHeading
      icon="mdi-chat-processing"
      space="0"
      title="Customer Reviews"
    />

    <v-carousel
      class="mt-n12"
      height="600"
    >
      <v-carousel-item
        v-for="(customer, i) in customers"
        :key="i"
      >
        <v-container class="fill-height">
          <v-responsive
            class="mx-auto shrink text-center"
            max-width="70%"
            width="700"
          >
            <BaseBody
              :text="customer.review"
              align="center"
              class="mb-6 d-block"
              tag="em"
            />

            <v-avatar
              class="mb-6"
              size="128"
            >
              <BaseImg :src="getImgUrl(`../../assets/user-${i + 1}.jpg`)" />
            </v-avatar>

            <BaseTitle
              :title="customer.name"
              align="center"
              space="0"
            />

            <BaseSubtitle :title="customer.role" align="center" />
          </v-responsive>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </BaseSection>
</template>

<script setup>
  provide('heading', { align: 'center' })

  const customers = ref([
    {
      review: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
      name: 'HENRY LUSIO',
      role: 'DIRECTOR OF EXAMPLE LTD',
    },
    {
      review: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
      name: 'HENRY LUSIO',
      role: 'DIRECTOR OF EXAMPLE LTD',
    },
    {
      review: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
      name: 'HENRY LUSIO',
      role: 'DIRECTOR OF EXAMPLE LTD',
    },
  ])

  const getImgUrl = imagePath => new URL(`${imagePath}`, import.meta.url).href

</script>

<style lang="sass">
  #customer-reviews
    .v-carousel__controls
      background: transparent

    .base-body
      line-height: 2
</style>
