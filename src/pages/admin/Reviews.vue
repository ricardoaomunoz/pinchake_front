<template>
  <div>
    <div class="text-h5 font-weight-bold mb-2">Reviews</div>
    <div class="text-body-2 text-medium-emphasis mb-6">
      Approve or reject customer reviews.
    </div>

    <BaseCard>
      <v-card-text>
        <v-progress-linear v-if="loading" indeterminate color="primary" />
        <v-table v-else>
          <thead>
            <tr>
              <th class="text-left">Tour ID</th>
              <th class="text-left">Rating</th>
              <th class="text-left">Title</th>
              <th class="text-left">Status</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="review in reviews" :key="review.id">
              <td>{{ review.tour_id }}</td>
              <td>{{ review.rating }}</td>
              <td>{{ review.title || '—' }}</td>
              <td>{{ review.is_approved ? 'Approved' : 'Pending' }}</td>
              <td>
                <v-btn
                  variant="text"
                  color="primary"
                  @click="approveReview(review)"
                  :disabled="review.is_approved"
                >
                  Approve
                </v-btn>
                <v-btn
                  variant="text"
                  color="error"
                  @click="rejectReview(review)"
                >
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </BaseCard>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { api } from '@/services/api'

  const reviews = ref([])
  const loading = ref(false)

  const loadReviews = async () => {
    loading.value = true
    try {
      const data = await api.getReviews()
      reviews.value = data.reviews || []
    } catch (error) {
      reviews.value = []
    } finally {
      loading.value = false
    }
  }

  const approveReview = async (review) => {
    try {
      const response = await api.updateReview(review.id, { is_approved: true })
      review.is_approved = response.review.is_approved
    } catch (error) {
      // noop
    }
  }

  const rejectReview = async (review) => {
    try {
      await api.deleteReview(review.id)
      reviews.value = reviews.value.filter((item) => item.id !== review.id)
    } catch (error) {
      // noop
    }
  }

  onMounted(loadReviews)
</script>
