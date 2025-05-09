<template>
  <q-page class="q-pa-md dashboard-page">
    <div class="text-h5 text-white text-glow q-mb-md">Inovision Overview</div>

    <div class="row q-col-gutter-xl">
      <!-- Line Chart: Dépenses par mois -->
      <div class="col-12 col-md-6">
        <q-card class="chart-card">
          <q-card-section>
            <div class="text-subtitle1 q-mb-sm">Monthly Expenses</div>
            <line-chart :chart-data="expensesChartData" :chart-options="chartOptions" />
          </q-card-section>
        </q-card>
      </div>

      <!-- Doughnut Chart: Scanned vs Corrected -->
      <div class="col-12 col-md-6">
        <q-card class="chart-card">
          <q-card-section>
            <div class="text-subtitle1 q-mb-sm">Receipts Scanned vs Corrected</div>
            <doughnut-chart :chart-data="scannedChartData" :chart-options="chartOptions" />
          </q-card-section>
        </q-card>
      </div>

      <!-- Bar Chart: Total scans per month -->
      <div class="col-12 col-md-12">
        <q-card class="chart-card">
          <q-card-section>
            <div class="text-subtitle1 q-mb-sm">Total Scans per Month</div>
            <bar-chart :chart-data="scansChartData" :chart-options="chartOptions" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import LineChart from 'src/components/charts/LineChart.vue'
import BarChart from 'src/components/charts/BarChart.vue'
import DoughnutChart from 'src/components/charts/DoughnutChart.vue'

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#ffffff' },
    },
  },
  scales: {
    x: { ticks: { color: '#cccccc' } },
    y: { ticks: { color: '#cccccc' } },
  },
}

const expensesChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Expenses ($)',
      backgroundColor: '#00E5B0',
      borderColor: '#00E5B0',
      data: [320, 540, 430, 690, 580],
      tension: 0.3,
      fill: false,
    },
  ],
}

const scannedChartData = {
  labels: ['Scanned', 'Corrected'],
  datasets: [
    {
      label: 'Receipts',
      backgroundColor: ['#5B4FFF', '#00E5B0'],
      data: [300, 180],
    },
  ],
}

const scansChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Receipts Scanned',
      backgroundColor: '#9A00FF',
      data: [120, 210, 180, 260, 300],
    },
  ],
}
</script>

<style scoped lang="sass">
.dashboard-page
  background: transparent

.text-glow
  text-shadow: 0 0 5px #00B8FF, 0 0 12px #9A00FF
.chart-card
  min-height: 340px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background: #121229
  border-radius: 12px
  box-shadow: 0 0 20px rgba(154, 0, 255, 0.15)
</style>
