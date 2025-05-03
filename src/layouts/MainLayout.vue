<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Mon Tableau de Bord </q-toolbar-title>

        <q-btn flat round dense icon="logout" @click="logout" v-if="store.isAuthenticated" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { auth_store } from 'stores/auth-store'

const store = auth_store()
const router = useRouter()

const logout = () => {
  store.logout(router)
}
</script>
