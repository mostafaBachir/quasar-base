<template>
  <section
    class="hero-full row items-center justify-between"
    :class="{ 'light-mode': !$q.dark.isActive }"
  >
    <!-- Texte et CTA -->
    <div class="hero-left column items-start justify-center">
      <h1 v-if="showTitle" class="hero-title text-glow typewriter q-mb-md">
        AI-Powered <br />Receipt Scanning
      </h1>

      <transition name="fade">
        <p v-if="showSubtitle" class="hero-subtitle q-mb-lg">
          Automatisez la gestion de vos reçus <br />grâce à l’intelligence artificielle.
        </p>
      </transition>

      <transition name="fade">
        <q-btn
          v-if="showCta"
          to="/register"
          label="Essayez maintenant"
          color="primary"
          class="bg-gradient-primary text-white hero-cta"
          unelevated
        />
      </transition>

      <transition name="fade">
        <div v-if="showBadge" class="hero-badge q-mt-md">
          <q-badge color="accent" align="top"> <q-icon name="api" left /> API disponible </q-badge>
        </div>
      </transition>
    </div>

    <!-- Illustration animée -->
    <transition name="zoom-fade">
      <div v-if="showScan" class="hero-right flex flex-center">
        <ReceiptScan />
      </div>
    </transition>

    <!-- Overlay visuel -->
    <div class="hero-overlay"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import ReceiptScan from '../ui/ReceiptScan.vue'

const $q = useQuasar()
const showTitle = ref(false)
const showSubtitle = ref(false)
const showCta = ref(false)
const showBadge = ref(false)
const showScan = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTitle.value = true
    setTimeout(() => {
      showSubtitle.value = true
      setTimeout(() => {
        showCta.value = true
        setTimeout(() => {
          showBadge.value = true
          setTimeout(() => {
            showScan.value = true
          }, 400)
        }, 600)
      }, 600)
    }, 900)
  }, 300)
})
</script>

<style lang="sass" scoped>
.hero-full
  min-height: 100vh
  width: 100vw
  background: url('/fond.png') center center no-repeat
  background-size: cover
  position: relative
  padding: 0
  box-sizing: border-box
  z-index: 1
  overflow-x: hidden

  &.light-mode
    background: linear-gradient(135deg, #f6f7fc 60%, #e8e8fa 100%) !important

.hero-overlay
  position: absolute
  inset: 0
  background: rgba(16,18,40,0.37)
  z-index: 0
  pointer-events: none

.hero-left
  flex: 1 1 390px
  min-width: 260px
  max-width: 600px
  z-index: 2
  padding-left: 6vw
  padding-right: 2vw

.hero-title
  font-family: 'Ubuntu', sans-serif
  font-size: clamp(2.1rem, 5vw, 3.6rem)
  font-weight: 700
  line-height: 1.13

.hero-subtitle
  font-size: 1.09rem
  font-weight: 400
  color: #d6d8fa

.bg-gradient-primary
  background: linear-gradient(90deg, #00B8FF 0%, #9A00FF 80%)

.hero-cta
  font-size: 1.1rem
  padding: 0.90em 2.45em
  border-radius: 13px
  font-weight: bold
  margin-top: 0.7rem

.text-glow
  text-shadow: 0 0 10px #00B8FF, 0 0 18px #9A00FF

.hero-badge
  font-size: 1.02rem

.hero-right
  flex: 1 1 390px
  min-width: 310px
  max-width: 480px
  display: flex
  align-items: center
  justify-content: center
  padding-right: 6vw
  margin-top: 200px
  z-index: 2

.typewriter
  overflow: hidden
  white-space: nowrap
  border-right: 2px solid #00B8FF
  width: 0
  animation: typing 3.5s steps(40, end) forwards, blinkCaret 0.75s step-end infinite

@keyframes typing
  from
    width: 0
  to
    width: 100%

@keyframes blinkCaret
  50%
    border-color: transparent

.fade-enter-active
  transition: opacity 0.8s ease
.fade-enter-from
  opacity: 0
.fade-enter-to
  opacity: 1

.zoom-fade-enter-active
  animation: zoomFade 0.9s ease both

@keyframes zoomFade
  0%
    opacity: 0
    transform: scale(0.92)
  100%
    opacity: 1
    transform: scale(1)

@media (max-width: 950px)
  .hero-full
    flex-direction: column
    min-height: 105vh

  .hero-left
    max-width: 100vw
    padding: 2vw 4vw
    align-items: center
    text-align: center
    margin-bottom: 34px

  .hero-right
    max-width: 97vw
    min-width: 180px
    padding: 0
    margin-bottom: 18px

@media (max-width: 700px)
  .hero-full
    flex-direction: column
    min-height: 110vw
    padding: 0

  .hero-left
    padding: 6vw 3vw 2vw 3vw
    max-width: 100vw
    text-align: center
</style>
