<template>
  <q-page class="landing-wrapper column items-center justify-center q-pa-lg">
    <div class="landing-box relative-position">
      <img :src="img" alt="AI Illustration" class="landing-image" />
      <div class="overlay column items-center justify-center text-center absolute-full">
        <h1 class="typewriter text-white text-h4 text-glow q-mb-sm">
          AI-Powered Receipt & Invoice Processing
        </h1>
        <transition name="fade-in">
          <p v-if="showParagraph" class="text-subtitle1 text-grey-4 q-mb-md fade-in-target">
            Automatisez la gestion de vos reçus et factures grâce à l'intelligence artificielle.
          </p>
        </transition>
        <q-btn
          to="/register"
          label="Essayez maintenant"
          color="primary"
          class="bg-gradient-primary text-white"
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import img from 'src/assets/landing.png'

const showParagraph = ref(false)

onMounted(() => {
  // Afficher le paragraphe après l'effet de typewriter (~3.5s)
  setTimeout(() => {
    showParagraph.value = true
  }, 3600)
})
</script>

<style lang="sass" scoped>
.landing-wrapper
  min-height: 100vh
  background: #0c0c26

.landing-box
  width: 100%
  max-width: 900px
  height: 350px
  border-radius: 24px
  overflow: hidden
  position: relative
  box-shadow: 0 0 30px rgba(0, 184, 255, 0.2)

.landing-image
  width: 100%
  height: 100%
  object-fit: cover
  filter: brightness(0.6)
  animation: zoomSlow 12s ease-in-out infinite alternate

.overlay
  z-index: 2
  padding: 2rem
  background: rgba(0, 0, 0, 0.35)

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 12px #9A00FF

.bg-gradient-primary
  background: linear-gradient(to right, #00B8FF, #9A00FF)

@keyframes typing
  from
    width: 0
  to
    width: 100%

@keyframes blinkCaret
  50%
    border-color: transparent

@keyframes zoomSlow
  from
    transform: scale(1)
  to
    transform: scale(1.05)

.typewriter
  overflow: hidden
  white-space: nowrap
  border-right: 2px solid #00B8FF
  width: 0
  animation: typing 3.5s steps(40, end) forwards, blinkCaret 0.75s step-end infinite

.fade-in-enter-active
  transition: opacity 1.2s ease
.fade-in-enter-from
  opacity: 0
.fade-in-enter-to
  opacity: 1
</style>
