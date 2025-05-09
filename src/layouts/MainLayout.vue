<template>
  <q-layout view="hHh lpR fFf" class="bg-dark text-white">
    <!-- Drawer visible si connecté -->
    <div v-show="sideBar">
      <transition name="fade">
        <FancyDrawer class="sidebar" :visible="auth.isAuthenticated" />
      </transition>
    </div>
    <!-- HEADER -->
    <transition name="fade">
      <q-header v-show="showNavbar" class="floating-navbar">
        <q-toolbar class="rounded-toolbar justify-between">
          <div class="row items-center">
            <q-btn
              v-if="auth.isAuthenticated"
              flat
              round
              dense
              icon="menu"
              class="q-mr-sm"
              @click="sideBar = !sideBar"
            />
            <q-avatar size="40px"><img src="~assets/logo.webp" /></q-avatar>
            <span class="text-h6 q-ml-sm text-glow">Inovision</span>
          </div>

          <div class="row items-center gt-sm">
            <q-btn flat label="Home" to="/" class="hover-glow q-mr-sm" />
            <q-btn flat label="About" to="/about" class="hover-glow q-mr-sm" />
            <q-btn
              v-if="!auth.isAuthenticated"
              flat
              label="Login"
              to="/login"
              class="text-positive q-mr-sm"
            />
            <q-btn
              v-if="!auth.isAuthenticated"
              outline
              label="Register"
              to="/register"
              color="accent"
              class="q-mr-sm"
            />

            <q-btn-dropdown flat class="q-ml-sm text-white" icon="language">
              <q-list>
                <q-item clickable v-close-popup @click="setLang('en')">
                  <q-item-section avatar><q-avatar size="24px">🇺🇸</q-avatar></q-item-section>
                  <q-item-section>English</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="setLang('fr')">
                  <q-item-section avatar><q-avatar size="24px">🇫🇷</q-avatar></q-item-section>
                  <q-item-section>Français</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="setLang('ar')">
                  <q-item-section avatar><q-avatar size="24px">🇸🇦</q-avatar></q-item-section>
                  <q-item-section>العربية</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-toolbar>
      </q-header>
    </transition>

    <!-- PAGE -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- Loader -->
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
import FancyDrawer from 'src/components/FancyDrawer.vue'

const showNavbar = ref(false)
const sideBar = ref(false)

const auth = use_auth_store()
const ui = use_ui_store()
const { locale } = useI18n()

function setLang(lang) {
  locale.value = lang
}

onMounted(() => {
  setTimeout(() => {
    showNavbar.value = true
  }, 150)
})
</script>

<style lang="sass" scoped>
.bg-dark
  background: linear-gradient(135deg, #0c0c26, #1a1b3f)

.floating-navbar
  position: fixed
  top: 20px
  left: 50%
  transform: translateX(-50%)
  width: 96vw
  max-width: 1400px
  background: rgba(15, 15, 40, 0.85)
  backdrop-filter: blur(18px)
  border-radius: 24px
  padding: 8px 16px
  box-shadow: 0 8px 24px rgba(0, 184, 255, 0.1)
  border: 1px solid rgba(255, 255, 255, 0.04)
  z-index: 999

.rounded-toolbar
  border-radius: 16px
  min-height: 64px
  padding: 0 8px
  width: 100%

.text-glow
  text-shadow: 0 0 5px #00B8FF, 0 0 10px #9A00FF

.hover-glow:hover
  text-shadow: 0 0 10px #FF00A0

.q-inner-loading.global-loader
  backdrop-filter: blur(6px)
  background-color: rgba(0, 0, 0, 0.3)
  transition: all 0.3s ease-in-out
  border-radius: 12px

.loader-text
  font-size: 16px
  font-weight: 500
  animation: pulse 1.5s infinite
  letter-spacing: 1px

.drawer-fancy
  border-right: 1px solid rgba(255, 255, 255, 0.05)
  box-shadow: 4px 0 12px rgba(0, 184, 255, 0.05)

.q-item.active-link
  background: rgba(154, 0, 255, 0.1)
  border-left: 4px solid #9A00FF
  font-weight: bold
  color: #00FFF6 !important

.q-item:hover
  background-color: rgba(255, 255, 255, 0.05)

@keyframes pulse
  0%, 100%
    opacity: 1
  50%
    opacity: 0.4

.fade-enter-active, .fade-leave-active
  transition: opacity 0.6s ease
.fade-enter-from, .fade-leave-to
  opacity: 0
.sidebar
  margin-top: 23px
</style>
