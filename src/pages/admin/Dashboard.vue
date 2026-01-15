<template>
  <div>
    <div class="text-h5 font-weight-bold mb-2">Dashboard</div>
    <div class="text-body-2 text-medium-emphasis mb-6">
      Quick access to core admin areas.
    </div>

    <v-row>
      <v-col cols="12" md="4">
        <BaseCard>
          <v-card-text>
            <div class="text-h6">Tours</div>
            <div class="text-body-2 text-medium-emphasis mt-2">
              Create and manage trekking packages.
            </div>
            <v-btn class="mt-4" :to="{ name: 'AdminTours' }">Manage</v-btn>
          </v-card-text>
        </BaseCard>
      </v-col>
      <v-col cols="12" md="4">
        <BaseCard>
          <v-card-text>
            <div class="text-h6">Reviews</div>
            <div class="text-body-2 text-medium-emphasis mt-2">
              Approve and monitor client feedback.
            </div>
            <v-btn class="mt-4" :to="{ name: 'AdminReviews' }">Review</v-btn>
          </v-card-text>
        </BaseCard>
      </v-col>
      <v-col cols="12" md="4">
        <BaseCard>
          <v-card-text>
            <div class="text-h6">Subscribers</div>
            <div class="text-body-2 text-medium-emphasis mt-2">
              Manage newsletter opt-ins.
            </div>
            <v-btn class="mt-4" :to="{ name: 'AdminSubscribers' }">View</v-btn>
          </v-card-text>
        </BaseCard>
      </v-col>
    </v-row>
  </div>
</template>
