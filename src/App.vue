<template>
  <router-view />
  <div v-if="ui.loading" class="screen-loader">
    <q-spinner-grid size="70px" color="accent" class="q-mb-md" />
    <div class="loader-text text-white">{{ $t('loading') }}</div>
  </div>
</template>

<script setup>
import { use_ui_store } from 'src/stores/ui-store'
const ui = use_ui_store()
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
const { locale } = useI18n()

watch(locale, (val) => {
  document.body.setAttribute('dir', val === 'ar' ? 'rtl' : 'ltr')
})
</script>

<style lang="sass">
.screen-loader
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: rgba(13,15,26,0.83)
  z-index: 9999
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  pointer-events: all

.loader-text
  font-size: 18px
  font-weight: 500
  animation: pulse 1.5s infinite
  letter-spacing: 1px

@keyframes pulse
  0%, 100%
    opacity: 1
  50%
    opacity: 0.45
</style>
