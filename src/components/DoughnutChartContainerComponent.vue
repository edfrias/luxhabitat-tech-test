<script setup lang="ts">
import { onMounted } from 'vue';
import { ElCard } from 'element-plus';
import leadByType from '../mocks/lead-by-type.json';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

const char = new ChartJS();

ChartJS.register(ArcElement, Tooltip, Legend);

const dataLabels = Object.keys(leadByType);
const dataValues = Object.values(leadByType);

const charData = {
  labels: dataLabels,
  datasets: [
    {
      data: dataValues,
      backgroundColor: ['#F9EDCF', '#D9CEED', '#CEE3DE'],
      interaction: {
        intersect: false,
      },
      borderColor: '#cee3de',
    },
  ],
};

//TODO: See wats happening here: https://github.com/chartjs/chartjs-plugin-datalabels/blob/master/docs/samples/charts/doughnut.md

const charOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: false,
      text: 'blbiblu',
    },
  },
};
onMounted(() => {
  // Cheat to resize the canvas from chart
  document.getElementsByTagName('canvas')[0].style.height = '358px';
});
</script>

<template>
  <section class="chart-container-component">
    <div class="text">
      <h2 class="title">Insights</h2>
      <p class="subtitle">Leads per day</p>
    </div>
    <ElCard class="chart-container">
      <Doughnut :data="charData" :options="charOptions" />
    </ElCard>
  </section>
</template>

<style>
.chart-container-component {
  display: flex;
  margin-block: 64px;
}

.chart-container-component .text {
  flex-grow: 1;
  margin-inline-end: 32px;
}

.chart-container-component .chart-container {
  flex-grow: 11;
  height: 424px;
  padding: 32px;
  overflow: hidden;
}

.el-card__body {
  padding: 0;
}

.chart-container-component .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
}

.chart-container-component .subtitle {
  color: var(--color-grey-6);
  font-size: 1.333rem;
  font-variation-settings: 'wght' 400;
  margin-block-start: 8px;
  margin-block-end: 24px;
}
</style>
