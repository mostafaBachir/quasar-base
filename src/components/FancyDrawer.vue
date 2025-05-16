<template>
  <aside v-show="visible" class="fancy-sidebar">
    <div class="sidebar-scroll">
      <q-list padding>
        <q-item-label header class="text-accent">Inovision</q-item-label>

        <q-item clickable to="/dashboard" active-class="active-link">
          <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item clickable to="/ocr" active-class="active-link">
          <q-item-section avatar><q-icon name="receipt_long" /></q-item-section>
          <q-item-section>Receipts</q-item-section>
        </q-item>
        <q-item clickable to="/profile" active-class="active-link">
          <q-item-section avatar><q-icon name="person" /></q-item-section>
          <q-item-section>Profile</q-item-section>
        </q-item>

        <q-item clickable to="/settings" active-class="active-link">
          <q-item-section avatar><q-icon name="settings" /></q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <q-item clickable @click="logout">
          <q-item-section avatar><q-icon name="logout" color="negative" /></q-item-section>
          <q-item-section class="text-negative">Logout</q-item-section>
        </q-item>
      </q-list>
    </div>
  </aside>
</template>

<script setup>
import { use_auth_store } from 'src/stores/auth-store'
import { useRouter } from 'vue-router'

defineProps({ visible: Boolean })

const auth = use_auth_store()
const router = useRouter()

function logout() {
  auth.logout(router)
}
</script>

<style lang="sass" scoped>
.fancy-sidebar
  position: fixed
  top: 96px
  left: 20px
  width: 260px
  height: calc(100vh - 132px)
  background: rgba(15, 15, 40, 0.85)
  backdrop-filter: blur(16px)
  border-radius: 24px
  box-shadow: 0 12px 24px rgba(0, 184, 255, 0.08)
  border: 1px solid rgba(255, 255, 255, 0.05)
  z-index: 998
  padding: 8px
  display: flex
  flex-direction: column

.sidebar-scroll
  flex: 1
  overflow-y: auto
  scrollbar-width: thin // pour Firefox
  &::-webkit-scrollbar // pour Chrome
    width: 6px
  &::-webkit-scrollbar-thumb
    background-color: rgba(255, 255, 255, 0.2)
    border-radius: 4px
.q-item.active-link
  background: rgba(154, 0, 255, 0.1)
  border-left: 4px solid #9A00FF
  font-weight: bold
  color: #00FFF6 !important

.q-item:hover
  background-color: rgba(255, 255, 255, 0.05)
</style>
