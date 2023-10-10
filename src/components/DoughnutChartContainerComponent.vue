<script setup lang="ts">
import { onMounted } from 'vue';
import { ElCard } from 'element-plus';
import leadByType from '../mocks/lead-by-type.json';
import { Chart as ChartJS2, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS2.register(ArcElement, Tooltip);

const dataLabels = Object.keys(leadByType);
const dataValues = Object.values(leadByType);

const charData = {
  labels: dataLabels,
  datasets: [
    {
      data: dataValues,
      backgroundColor: ['#f9edcf', '#d9ceed', '#cee3de'],
      interaction: {
        intersect: false,
      },
      borderColor: 'transparent',
    },
  ],
};

const charOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: false,
    },
  },
} as const;

onMounted(() => {
  // Cheat to resize the canvas from chart
  const donutCanvas = document.getElementById('donut');
  if (donutCanvas) {
    donutCanvas.style.height = '340px';
    donutCanvas.style.width = '850px';
  }
});
</script>

<template>
  <section class="donut-chart-container-component">
    <div class="text">
      <h2 class="title">Lead events</h2>
      <p class="subtitle">Leads per day</p>
    </div>
    <ElCard class="chart-container">
      <div class="legend">
        <p class="item" v-for="lead in dataLabels" :key="lead">
          <span
            class="legend-color"
            :style="{
              'background-color': `var(--${lead.toLowerCase()}-donut-bg-color)`,
            }"
          />
          {{ lead }}
        </p>
      </div>
      <Doughnut id="donut" :data="charData" :options="charOptions" />
    </ElCard>
  </section>
</template>

<style>
:root {
  --buyer-donut-bg-color: #f9edcf;
  --seller-donut-bg-color: #d9ceed;
  --tenant-donut-bg-color: #cee3de;
}

.donut-chart-container-component {
  display: flex;
  margin-block: 64px;
}

.donut-chart-container-component .el-card__body {
  display: flex;
  padding: 0;
}

.donut-chart-container-component .text {
  flex-grow: 1;
  margin-inline-end: 32px;
  width: 124px;
}

.donut-chart-container-component .chart-container {
  flex-grow: 11;
  height: 424px;
  padding: 32px;
  overflow: hidden;
  width: calc(100% - 156px);
}

.donut-chart-container-component .chart-container .legend {
  display: flex;
  flex-direction: column;
  margin-inline-start: 32px;
  margin-block-start: 32px;
}

.donut-chart-container-component .chart-container .legend .item {
  align-items: center;
  display: flex;
  font-size: 1.333em;
  font-variation-settings: 'wght' 400;
  margin-block-start: 0;
  margin-block-end: 16px;
}

.donut-chart-container-component .chart-container .legend .legend-color {
  border-radius: 8px;
  display: inline-flex;
  margin-inline-end: 16px;
  height: 36px;
  width: 36px;
}

.donut-chart-container-component .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
}

.donut-chart-container-component .subtitle {
  color: var(--color-grey-6);
  font-size: 1.333rem;
  font-variation-settings: 'wght' 400;
  margin-block-start: 8px;
  margin-block-end: 24px;
}
</style>
