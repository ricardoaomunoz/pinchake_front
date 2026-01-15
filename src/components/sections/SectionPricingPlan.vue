<template>
  <BaseSection
    id="pricing-plan"
    class="text-center"
  >
    <BaseSectionHeading title="Select Pricing Plan">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </BaseSectionHeading>

    <v-btn-toggle
      v-model="interval"
      tile
    >
      <BaseBtn
        :outlined="!interval"
        width="196"
      >
        Monthly
      </BaseBtn>

      <BaseBtn
        :outlined="!!interval"
        width="196"
      >
        Yearly
      </BaseBtn>
    </v-btn-toggle>

    <div class="pa-8" />

    <v-container>
      <v-row>
        <v-col
          v-for="(plan, i) in plans"
          :key="i"
          cols="12"
          md="4"
        >
          <PriceCard v-bind="plan" />
        </v-col>
      </v-row>
    </v-container>
  </BaseSection>
</template>

<script setup>
  provide('heading', { algin: 'center' })

  const features = ref([
    'Full statistics',
    'Max 100 items/month',
    'Up to 5 users',
    'Unlimited Queries',
  ])

  const internalPlans = ref([
    {
      title: 'Basic',
      subtitle: 'Best Plan for Small Businesses',
      monthly: 10,
      yearly: 110,
    },
    {
      title: 'Popular',
      subtitle: 'Best Plan for Professional Users',
      monthly: 39,
      yearly: 312,
      value: true,
    },
    {
      title: 'Premium',
      subtitle: 'Best Plan for Power Users',
      monthly: 79,
      yearly: 632,
    },
  ])

  const interval = ref(0)

  const plans = computed(() => {
    return internalPlans.value.map(plan => {
      return {
        ...plan,
        features: features.value,
        interval: !interval.value
          ? 'Month'
          : 'Year',
        title: plan.title,
        subtitle: plan.subtitle,
        price: !interval.value
          ? plan.monthly
          : plan.yearly,
      }
    })
  })
</script>
