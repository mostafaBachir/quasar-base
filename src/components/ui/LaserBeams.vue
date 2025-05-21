<template>
  <svg
    :width="width"
    :height="height"
    :style="{ position: 'absolute', left: `${left}px`, top: `${top}px`, zIndex }"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <defs>
      <!-- Degradé fushia pur avec opacités variables -->
      <linearGradient id="laser" x1="0" y1="0" :x2="width" y2="0">
        <stop offset="0%" stop-color="#ff38e7" stop-opacity="0.91" />
        <stop offset="38%" stop-color="#da00e7" stop-opacity="0.68" />
        <stop offset="78%" stop-color="#9A00FF" stop-opacity="0.45" />
        <stop offset="100%" stop-color="#9A00FF" stop-opacity="0.04" />
      </linearGradient>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="7" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      <template v-for="i in numBeams" :key="i">
        <line
          :x1="originX"
          :y1="originY"
          :x2="endX(i - 1)"
          :y2="endY(i - 1)"
          stroke="url(#laser)"
          :stroke-width="beamWidth"
          :filter="'url(#glow)'"
          :opacity="opacity"
        />
      </template>
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  width: { type: Number, default: 320 },
  height: { type: Number, default: 340 },
  left: { type: Number, default: 0 },
  top: { type: Number, default: 0 },
  zIndex: { type: Number, default: 20 },
  originX: { type: Number, default: 55 },
  originY: { type: Number, default: 82 },
  beamWidth: { type: Number, default: 6 },
  numBeams: { type: Number, default: 3 },
  spread: { type: Number, default: 45 }, // Largeur du cône en degrés
  opacity: { type: Number, default: 0.7 },
  animate: { type: Boolean, default: true },
  length: { type: Number, default: 220 },
})

const animAngles = ref(Array(props.numBeams).fill(0))
let raf

function endX(idx) {
  // Perspective en X, angle réparti autour de l’axe principal
  const angle =
    -props.spread / 2 + (props.spread / (props.numBeams - 1)) * idx + animAngles.value[idx]
  return props.originX + Math.cos((angle * Math.PI) / 180) * props.length
}
function endY(idx) {
  const angle =
    -props.spread / 2 + (props.spread / (props.numBeams - 1)) * idx + animAngles.value[idx]
  // Effet de perspective en Y (rayons lég. oscillants)
  return (
    props.originY +
    Math.sin((angle * Math.PI) / 180) * props.length * 0.07 +
    (animAngles.value[idx] || 0)
  )
}

// Fonction renommée pour éviter toute collision avec la prop
function animateBeams() {
  animAngles.value = animAngles.value.map(
    (base, idx) => Math.sin(Date.now() / (560 + idx * 90)) * 4,
  )
  raf = requestAnimationFrame(animateBeams)
}

onMounted(() => {
  animAngles.value = Array(props.numBeams).fill(0)
  if (props.animate) animateBeams()
})
onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
})
</script>
