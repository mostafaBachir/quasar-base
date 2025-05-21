<template>
  <q-card
    class="fancy-card glass-card column items-center justify-center q-pa-lg"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="cardStyle"
  >
    <div class="glass-glow" />
    <slot name="icon">
      <q-icon :name="icon" size="48px" class="fancy-icon q-mb-md" v-if="icon" />
    </slot>
    <div v-if="title" class="fancy-title text-center q-mb-xs">{{ title }}</div>
    <div v-if="desc" class="fancy-desc text-center text-grey-4">{{ desc }}</div>
    <slot />
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
  const rotateX = ((y - centerY) / centerY) * 15
  const rotateY = ((x - centerX) / centerX) * -15

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
  border-radius: 25px
  transition: transform 0.22s cubic-bezier(.23,1.09,.62,1.02), box-shadow 0.17s, border 0.18s
  min-height: 255px
  will-change: transform, box-shadow
  position: relative

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

.fancy-icon
  color: #00B8FF
  filter: drop-shadow(0 0 11px #9A00FF77)

.fancy-title
  font-size: 1.25rem
  font-weight: 600
  font-family: 'Ubuntu', sans-serif

.fancy-desc
  font-size: 0.95rem
  opacity: 0.85

@media (max-width: 700px)
  .glass-card
    min-height: 180px
    padding: 1rem 0.6rem
</style>
