<template>
  <q-layout view="hHh lpR fFf" class="bg-dark text-white">
    <!-- NAVBAR -->
    <AppNavbar
      :isAuthenticated="auth.isAuthenticated"
      :isDark="isDark"
      @toggle-sidebar="sideBar = !sideBar"
      @set-lang="setLang"
      @toggle-dark="toggleDark"
    />

    <!-- SIDEBAR -->
    <FancyDrawer :visible="sideBar && auth.isAuthenticated" @close="sideBar = false" />

    <!-- PAGE CONTAINER -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="glow-portal" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- GLOBAL LOADER -->
      <q-inner-loading
        :showing="ui.loading"
        class="global-loader z-max column items-center justify-center"
      >
        <q-spinner-grid size="60px" color="accent" class="q-mb-md" />
        <div class="loader-text text-white">{{ $t('loading') }}</div>
      </q-inner-loading>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { use_auth_store } from 'src/stores/auth-store'
import { use_ui_store } from 'src/stores/ui-store'
import { useI18n } from 'vue-i18n'
import { Dark } from 'quasar'
import AppNavbar from 'components/layout/AppNavbar.vue'
import FancyDrawer from 'components/FancyDrawer.vue'

const isDark = ref(Dark.isActive)
const auth = use_auth_store()
const ui = use_ui_store()
const { locale } = useI18n()
const sideBar = ref(false)

function setLang(lang) {
  locale.value = lang
}
function toggleDark(val) {
  isDark.value = val
  Dark.set(val)
}

onMounted(() => {
  ui.showLoader()
  setTimeout(() => {
    ui.hideLoader()
  }, 2000)
})
</script>

<style lang="sass" scoped>
.bg-dark
  background: linear-gradient(135deg, #0c0c26, #1a1b3f)

.global-loader
  backdrop-filter: blur(6px)
  background-color: rgba(0, 0, 0, 0.3)
  transition: all 0.3s ease-in-out
  border-radius: 12px

.loader-text
  font-size: 16px
  font-weight: 500
  animation: pulse 1.5s infinite
  letter-spacing: 1px

@keyframes pulse
  0%, 100%
    opacity: 1
  50%
    opacity: 0.4

.text-glow
  text-shadow: 0 0 6px $primary, 0 0 10px $accent

.hover-glow:hover
  text-shadow: 0 0 10px $accent
</style>
