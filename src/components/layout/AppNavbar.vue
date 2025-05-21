<template>
  <q-header elevated class="navbar-main">
    <q-toolbar>
      <q-btn
        v-if="isAuthenticated"
        flat
        round
        dense
        icon="menu"
        @click="$emit('toggle-sidebar')"
        class="q-mr-sm"
      />
      <q-avatar size="36px"><img src="~assets/logo.webp" /></q-avatar>
      <span class="text-h6 q-ml-sm text-glow" style="font-family: 'Ubuntu', sans-serif"
        >Inovision</span
      >
      <q-space />
      <div class="row items-center gt-xs">
        <q-btn flat dense label="Home" to="/" class="navbar-link hover-glow" />
        <q-btn flat dense label="About" to="/about" class="navbar-link hover-glow" />
        <q-btn
          v-if="!isAuthenticated"
          flat
          dense
          label="Login"
          to="/login"
          class="navbar-link text-positive"
        />
        <q-btn
          v-if="!isAuthenticated"
          outline
          dense
          label="Register"
          to="/register"
          color="accent"
          class="navbar-link q-ml-xs"
        />
      </div>
      <q-btn-dropdown flat dense icon="language" class="q-ml-md">
        <q-list>
          <q-item clickable v-close-popup @click="$emit('set-lang', 'en')">
            <q-item-section avatar><q-avatar size="22px">🇺🇸</q-avatar></q-item-section>
            <q-item-section>English</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$emit('set-lang', 'fr')">
            <q-item-section avatar><q-avatar size="22px">🇫🇷</q-avatar></q-item-section>
            <q-item-section>Français</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$emit('set-lang', 'ar')">
            <q-item-section avatar><q-avatar size="22px">🇸🇦</q-avatar></q-item-section>
            <q-item-section>العربية</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-toggle
        :model-value="isDark"
        checked-icon="dark_mode"
        unchecked-icon="light_mode"
        @update:model-value="$emit('toggle-dark', $event)"
        size="sm"
        class="q-ml-md"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineProps({
  isAuthenticated: Boolean,
  isDark: Boolean,
})
</script>

<style lang="sass" scoped>
.navbar-main
  border-radius: 24px !important
  margin: 20px auto 0 auto
  max-width: 1400px
  width: 96vw
  box-shadow: 0 8px 24px #00B8FF22
  overflow: hidden
  background: rgba(15, 15, 40, 0.85)
  backdrop-filter: blur(18px)
  border: 1px solid rgba(255,255,255,0.06)

.navbar-link
  font-family: 'Ubuntu', sans-serif
  text-transform: none
  font-size: 0.9rem
  font-weight: 500
  letter-spacing: 0.01em
  padding: 0 10px
</style>
