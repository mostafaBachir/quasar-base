<template>
  <section class="testimonials-section">
    <transition name="fade-slide-up" appear>
      <h2 class="testimonials-title text-center text-glow q-mb-lg">
        Ce que disent nos utilisateurs
      </h2>
    </transition>

    <div class="marquee-wrapper" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="marquee-track" :class="{ paused }">
        <div
          class="testimonial-rect-card row no-wrap items-center q-pa-md"
          v-for="(testi, idx) in loopedTestimonials"
          :key="idx"
        >
          <q-avatar size="58px" class="testimonial-rect-avatar">
            <img :src="testi.avatar" :alt="testi.name" />
          </q-avatar>
          <div class="column q-ml-md">
            <div class="testimonial-rect-name text-weight-bold">{{ testi.name }}</div>
            <div class="testimonial-rect-role text-caption q-mb-xs">{{ testi.role }}</div>
            <div class="testimonial-rect-text text-grey-3">"{{ testi.text }}"</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const paused = ref(false)

const testimonials = [
  {
    name: 'Nadia R.',
    role: 'Comptable, Montréal',
    text: 'Avec Inovision, je gagne un temps fou chaque semaine. L’IA détecte tout, même mes tickets froissés !',
    avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
  {
    name: 'Kevin B.',
    role: 'Entrepreneur',
    text: 'Le service API est hyper simple à intégrer, mes notes de frais sont enfin automatisées.',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Sara El-K.',
    role: 'Consultante RH',
    text: 'La confidentialité était essentielle : la sécurité d’Inovision est top et conforme RGPD.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ali Z.',
    role: 'Freelance IT',
    text: "J'adore le design et la rapidité, je recommande à tous mes collègues !",
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    name: 'Julie L.',
    role: 'Gestionnaire PME',
    text: 'Prise en main immédiate, équipe réactive et résultats parfaits.',
    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
]

const loopedTestimonials = computed(() => [...testimonials, ...testimonials])
</script>

<style lang="sass" scoped>
.testimonials-section
  width: 100vw
  background: transparent
  padding-bottom: 30px
  overflow: hidden

.testimonials-title
  font-family: 'Ubuntu', sans-serif
  font-size: clamp(2.1rem, 4vw, 2.7rem)
  font-weight: 700
  margin-bottom: 32px
  width: 100vw

.marquee-wrapper
  overflow: hidden
  width: 100vw
  padding: 0.5rem 0

.marquee-track
  display: flex
  align-items: flex-start
  width: max-content
  animation: marquee 26s linear infinite

  &.paused
    animation-play-state: paused

.testimonial-rect-card
  min-width: 360px
  max-width: 390px
  margin: 0 24px
  border-radius: 18px
  box-shadow: 0 2px 16px #00B8FF22
  background: rgba(39, 46, 85, 0.38)
  border: 2px solid rgba(192, 198, 255, 0.11)
  backdrop-filter: blur(15px) saturate(135%)
  display: flex
  align-items: flex-start
  transition: box-shadow 0.18s, transform 0.3s ease
  &:hover
    box-shadow: 0 12px 36px #9A00FF33
    transform: translateY(-6px)

.testimonial-rect-avatar
  margin-top: 0
  margin-left: 0
  flex-shrink: 0
  border: 2px solid #9A00FF88
  box-shadow: 0 2px 8px #9A00FF33

.testimonial-rect-name
  font-size: 1.09rem
  font-family: 'Ubuntu', sans-serif

.testimonial-rect-role
  color: #8bc5ff

.testimonial-rect-text
  font-size: 1.03rem
  font-style: italic
  color: #e3e3fa

@keyframes marquee
  0%
    transform: translateX(0)
  100%
    transform: translateX(-50%)

.fade-slide-up-enter-active
  animation: fadeSlideUp 1.1s ease both

@keyframes fadeSlideUp
  0%
    opacity: 0
    transform: translateY(20px)
  100%
    opacity: 1
    transform: translateY(0)

@media (max-width: 1020px)
  .testimonial-rect-card
    min-width: 285px
    max-width: 320px
    margin: 0 10px

@media (max-width: 700px)
  .testimonial-rect-card
    min-width: 97vw
    max-width: 99vw
    margin: 0 4px
</style>
