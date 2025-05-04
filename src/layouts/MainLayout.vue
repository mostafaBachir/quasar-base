<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Tableau de bord </q-toolbar-title>

        <!-- 🟢 Toggle Offline -->
        <q-toggle
          v-model="offline"
          size="sm"
          color="red"
          checked-icon="cloud_off"
          unchecked-icon="cloud_done"
          :label="offline ? 'Offline' : 'Online'"
          @update:model-value="toggleOffline"
        />
      </q-toolbar>
    </q-header>

    <!-- DRAWER / SIDEBAR (optionnel) -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { setGlobalOffline, getGlobalOffline } from 'src/services/ws-manager'

const offline = ref(getGlobalOffline())

function toggleOffline(val) {
  offline.value = val // ← garder cette ligne manuelle
  setGlobalOffline(val)
}
</script>
