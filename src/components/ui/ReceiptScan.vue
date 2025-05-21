<template>
  <div class="receipt-ai-container">
    <svg
      class="receipt-svg"
      width="240"
      height="330"
      viewBox="0 0 330 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="330" y2="430" gradientUnits="userSpaceOnUse">
          <stop :stop-color="$q.dark.isActive ? '#23243a' : '#f8f8ff'" />
          <stop offset="1" :stop-color="$q.dark.isActive ? '#17182c' : '#e8e8f8'" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="330" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00ffe7" />
          <stop offset="1" stop-color="#9A00FF" />
        </linearGradient>
        <filter id="glass" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.14" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <!-- Effet glass -->
      <rect x="0" y="0" width="330" height="430" rx="34" fill="url(#paper)" filter="url(#glass)" />
      <!-- En-tête -->
      <text
        x="50%"
        y="48"
        text-anchor="middle"
        font-size="22"
        :fill="$q.dark.isActive ? '#00ffe7' : '#9A00FF'"
        font-family="Ubuntu, sans-serif"
        font-weight="bold"
      >
        INOVISION
      </text>
      <text
        x="50%"
        y="80"
        text-anchor="middle"
        font-size="13"
        fill="#888"
        font-family="Ubuntu, sans-serif"
        opacity="0.7"
      >
        Receipt AI Demo
      </text>
      <!-- Lignes textuelles simulées -->
      <rect
        x="26"
        y="112"
        width="278"
        height="12"
        rx="4"
        fill="#23243a"
        :opacity="$q.dark.isActive ? 0.9 : 0.07"
      />
      <rect
        x="26"
        y="134"
        width="210"
        height="8"
        rx="4"
        fill="#00ffe7"
        :opacity="$q.dark.isActive ? 0.28 : 0.19"
      />
      <rect
        x="26"
        y="152"
        width="210"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.1 : 0.1"
      />
      <rect
        x="26"
        y="170"
        width="278"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.12 : 0.14"
      />
      <rect
        x="26"
        y="188"
        width="180"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.18 : 0.2"
      />
      <rect
        x="26"
        y="206"
        width="250"
        height="8"
        rx="4"
        fill="#00ffe7"
        :opacity="$q.dark.isActive ? 0.2 : 0.16"
      />
      <rect
        x="26"
        y="224"
        width="220"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.08 : 0.14"
      />
      <rect
        x="26"
        y="242"
        width="120"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.12 : 0.13"
      />
      <rect
        x="26"
        y="260"
        width="150"
        height="8"
        rx="4"
        fill="#fff"
        :opacity="$q.dark.isActive ? 0.09 : 0.13"
      />
      <!-- Ligne de scan animée -->
      <rect
        x="0"
        :y="scanY"
        width="330"
        height="10"
        rx="5"
        fill="url(#line)"
        :opacity="$q.dark.isActive ? 0.56 : 0.28"
        style="transition: y 0.05s"
      />
      <!-- Bas -->
      <rect
        x="26"
        y="390"
        width="278"
        height="20"
        rx="8"
        fill="#00ffe7"
        :opacity="$q.dark.isActive ? 0.09 : 0.09"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

const scanY = ref(210)
let direction = 1
let raf
const $q = useQuasar()

function animateScan() {
  scanY.value += direction * 2.5
  if (scanY.value > 380) direction = -1
  if (scanY.value < 60) direction = 1
  raf = requestAnimationFrame(animateScan)
}

onMounted(() => {
  scanY.value = 60
  animateScan()
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
})
</script>

<style scoped lang="sass">
.receipt-ai-container
  width: 240px
  height: 310px
  display: flex
  align-items: center
  justify-content: center
  position: relative
  border-radius: 36px
  box-shadow: 0 8px 40px #00B8FF24, 0 2px 10px #9A00FF13

.receipt-svg
  width: 240px
  height: 330px
  display: block
</style>
