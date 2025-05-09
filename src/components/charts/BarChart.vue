<template>
  <div>
    <canvas ref="canvas" height="240"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, BarElement, BarController, CategoryScale, LinearScale, Title } from 'chart.js'

Chart.register(BarElement, BarController, CategoryScale, LinearScale, Title)

const props = defineProps({
  chartData: Object,
  chartOptions: Object,
})

const canvas = ref(null)
let chartInstance

const renderChart = () => {
  if (chartInstance) chartInstance.destroy()
  chartInstance = new Chart(canvas.value, {
    type: 'bar',
    data: props.chartData,
    options: props.chartOptions,
  })
}

onMounted(renderChart)
watch(() => props.chartData, renderChart)
</script>
