<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="5" lg="4">
          <BaseCard>
            <v-card-text>
              <div class="text-h5 font-weight-bold mb-2">Admin Login</div>
              <div class="text-body-2 text-medium-emphasis mb-6">
                Sign in to manage tours, reviews, and subscribers.
              </div>

              <v-form @submit.prevent="handleLogin">
                <BaseTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                />
                <BaseTextField
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                />
                <v-btn
                  type="submit"
                  color="primary"
                  block
                  :loading="loading"
                  class="mt-4"
                >
                  Sign In
                </v-btn>
              </v-form>

              <v-alert
                v-if="error"
                type="error"
                variant="tonal"
                class="mt-4"
              >
                {{ error }}
              </v-alert>
            </v-card-text>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { api, authStore } from '@/services/api'

  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const loading = ref(false)
  const error = ref('')

  const handleLogin = async () => {
    error.value = ''
    loading.value = true

    try {
      const response = await api.login(email.value, password.value)
      authStore.setToken(response.access_token)
      router.push({ name: 'AdminDashboard' })
    } catch (err) {
      error.value = err.message || 'Login failed'
    } finally {
      loading.value = false
    }
  }
</script>
