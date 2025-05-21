<template>
  <FancySection class="world-heatmap-section">
    <transition name="fade-slide-up" appear>
      <h2 class="heatmap-title text-glow text-center q-mb-lg">Utilisation mondiale du service</h2>
    </transition>

    <transition name="fade-zoom" appear>
      <div class="world-heatmap-card">
        <v-chart class="world-heatmap" :option="option" autoresize />
      </div>
    </transition>
  </FancySection>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { MapChart } from 'echarts/charts'
import { VisualMapComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import * as echarts from 'echarts/core'

use([CanvasRenderer, MapChart, VisualMapComponent, TooltipComponent, TitleComponent])

const option = ref(null)

const geoData = [
  { name: 'Canada', value: 280 },
  { name: 'France', value: 220 },
  { name: 'Morocco', value: 190 },
  { name: 'United States', value: 150 },
  { name: 'Germany', value: 175 },
  { name: 'United Kingdom', value: 125 },
  { name: 'UAE', value: 115 },
]

onMounted(async () => {
  const worldGeo = await fetch('/geo/world.json').then((r) => r.json())
  echarts.registerMap('world', worldGeo)
  option.value = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: (p) => `${p.name}<br>Scans : <b>${p.value ? p.value : 0}</b>`,
    },
    visualMap: {
      min: 0,
      max: 350,
      text: ['Haut', 'Bas'],
      realtime: false,
      calculable: true,
      inRange: { color: ['#5B4FFF22', '#00B8FF', '#9A00FF', '#FF00A0'] },
      left: 0,
      bottom: 15,
      textStyle: { color: '#ffffff' },
    },
    series: [
      {
        name: 'Utilisation',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: { label: { show: false } },
        itemStyle: { borderColor: '#6A60FF77', borderWidth: 1 },
        data: geoData,
      },
    ],
  }
})
</script>

<style lang="sass" scoped>
.world-heatmap-section
  padding: 40px 20px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center


.heatmap-title
  font-family: 'Ubuntu', sans-serif
  font-size: clamp(2.1rem, 4vw, 2.7rem)
  font-weight: 700
  margin-bottom: 32px

.world-heatmap-card
  background: rgba(32, 38, 75, 0.36)
  border-radius: 24px
  box-shadow: 0 6px 34px #9A00FF24
  border: 1.5px solid #5B4FFF22
  padding: 24px 20px
  max-width: 920px
  width: 100%
  backdrop-filter: blur(20px) saturate(140%)

.world-heatmap
  width: 100%
  max-width: 100%
  min-height: 380px


.fade-slide-up-enter-active
  animation: fadeSlideUp 1.1s ease both

@keyframes fadeSlideUp
  0%
    opacity: 0
    transform: translateY(20px)
  100%
    opacity: 1
    transform: translateY(0)

.fade-zoom-enter-active
  animation: zoomFade 0.9s ease-out both

@keyframes zoomFade
  0%
    opacity: 0
    transform: scale(0.95)
  100%
    opacity: 1
    transform: scale(1)
</style>
