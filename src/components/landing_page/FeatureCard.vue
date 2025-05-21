<template>
  <q-card
    class="feature-card glass-card column items-center q-pa-xl q-py-lg"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="cardStyle"
  >
    <div class="glass-glow" />
    <q-icon :name="icon" size="50px" class="feature-icon q-mb-md" />
    <div class="feature-title text-h6 text-center q-mb-xs">{{ title }}</div>
    <div class="feature-desc text-center text-grey-4">{{ desc }}</div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  icon: String,
  title: String,
  desc: String,
})

const cardStyle = ref({})
function onMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  // Accentuer la rotation (15° au lieu de 10°)
  const rotateX = ((y - centerY) / centerY) * 15
  const rotateY = ((x - centerX) / centerX) * -15
  // Accentuer l’ombre
  cardStyle.value = {
    transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
    boxShadow: '0 24px 56px 0 #00B8FF44, 0 2px 12px #9A00FF80, 0 0 42px #9A00FF22',
    border: '2.5px solid #6C60FF55',
  }
}
function onMouseLeave() {
  cardStyle.value = {
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
    boxShadow: '0 4px 28px #00B8FF30',
    border: '2.5px solid rgba(192, 198, 255, 0.18)',
  }
}
</script>

<style lang="sass" scoped>
.glass-card
  background: rgba(39, 46, 85, 0.41)
  border: 2.5px solid rgba(192, 198, 255, 0.18)
  backdrop-filter: blur(22px) saturate(155%)
  box-shadow: 0 4px 28px #00B8FF15
  border-radius: 25px
  position: relative
  transition: transform 0.22s cubic-bezier(.23,1.09,.62,1.02), box-shadow 0.17s, border 0.18s
  min-height: 255px
  will-change: transform, box-shadow

// Glow en haut à gauche pour simuler une lumière sur le verre
.glass-glow
  position: absolute
  top: 0
  left: 0
  width: 70%
  height: 40%
  pointer-events: none
  border-radius: 40px 40px 60px 20px
  background: linear-gradient(120deg, #e4eaff55 0%, #ffffff08 80%)
  filter: blur(7px)
  opacity: 0.22
  z-index: 2

.feature-icon
  color: #00B8FF
  filter: drop-shadow(0 0 11px #9A00FF77) brightness(1.15)

.feature-title
  font-family: 'Ubuntu', sans-serif
  font-size: 1.23rem
  font-weight: 600

@media (max-width: 700px)
  .glass-card
    min-height: 170px
    padding: 1.1rem 0.6rem
</style>
