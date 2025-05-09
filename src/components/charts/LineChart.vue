<template>
  <div>
    <canvas ref="canvas" height="240"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)

const props = defineProps({
  chartData: Object,
  chartOptions: Object,
})

const canvas = ref(null)
let chartInstance

const renderChart = () => {
  if (chartInstance) chartInstance.destroy()
  chartInstance = new Chart(canvas.value, {
    type: 'line',
    data: props.chartData,
    options: props.chartOptions,
  })
}

onMounted(renderChart)
watch(() => props.chartData, renderChart)
</script>
