<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
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

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { setGlobalOffline, getGlobalOffline } from 'src/services/ws-manager'
const leftDrawerOpen = ref(false)

const offline = ref(getGlobalOffline())

function toggleOffline(val) {
  offline.value = val // ← garder cette ligne manuelle
  setGlobalOffline(val)
}
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
