<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <div class="pa-4 text-h6 font-weight-bold">Pinchake Admin</div>
      <v-divider />
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer />
      <v-btn variant="text" @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { authStore } from '@/services/api'

  const router = useRouter()
  const drawer = ref(true)
  const items = [
    { title: 'Dashboard', to: { name: 'AdminDashboard' } },
    { title: 'Tours', to: { name: 'AdminTours' } },
    { title: 'Reviews', to: { name: 'AdminReviews' } },
    { title: 'Subscribers', to: { name: 'AdminSubscribers' } },
    { title: 'Users', to: { name: 'AdminUsers' } },
  ]

  const logout = () => {
    authStore.clearToken()
    router.push({ name: 'AdminLogin' })
  }
</script>
