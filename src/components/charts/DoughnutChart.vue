<template>
  <div>
    <canvas ref="canvas" height="240"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const props = defineProps({
  chartData: Object,
  chartOptions: Object,
})

const canvas = ref(null)
let chartInstance

const renderChart = () => {
  if (chartInstance) chartInstance.destroy()
  chartInstance = new Chart(canvas.value, {
    type: 'doughnut',
    data: props.chartData,
    options: props.chartOptions,
  })
}

onMounted(renderChart)
watch(() => props.chartData, renderChart)
</script>
