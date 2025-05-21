<template>
  <svg
    :width="width"
    :height="height"
    :style="{
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      pointerEvents: 'none',
      zIndex: zIndex,
      transform: `rotate(${angle}deg)`,
      opacity: opacity,
    }"
  >
    <defs>
      <linearGradient id="laser" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ff2be6" stop-opacity="0.7" />
        <stop offset="50%" stop-color="#e0e" stop-opacity="1" />
        <stop offset="80%" stop-color="#00ffe7" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#00ffe7" stop-opacity="0" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect
      :x="0"
      :y="scanY"
      :width="width"
      :height="beamWidth"
      rx="beamWidth"
      fill="url(#laser)"
      filter="url(#glow)"
    />
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props : largeur, hauteur, angle, position, z-index, opacité, épaisseur du rayon
const props = defineProps({
  width: { type: Number, default: 290 },
  height: { type: Number, default: 220 },
  left: { type: Number, default: 0 },
  top: { type: Number, default: 0 },
  angle: { type: Number, default: 0 },
  beamWidth: { type: Number, default: 13 },
  zIndex: { type: Number, default: 8 },
  opacity: { type: Number, default: 1 },
})

const scanY = ref(0)
let dir = 1
let raf

function animate() {
  scanY.value += dir * 2.2
  if (scanY.value > props.height - props.beamWidth * 2) dir = -1
  if (scanY.value < props.beamWidth * 0.5) dir = 1
  raf = requestAnimationFrame(animate)
}
onMounted(() => {
  scanY.value = props.beamWidth * 1.5
  animate()
})
onUnmounted(() => cancelAnimationFrame(raf))
</script>
