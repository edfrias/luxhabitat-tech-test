<script setup lang="ts">
import { onMounted } from 'vue';
import { ElCard } from 'element-plus';
import leadEvolution from '../mocks/lead-evolution.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels
);

const dataLabels = Object.keys(leadEvolution);
const dataValues = Object.values(leadEvolution);

const charData = {
  labels: dataLabels,
  datasets: [
    {
      data: dataValues,
      tension: 0.3,
      radius: 10,
      pointStyle: 'circle',
      borderWidth: 2,
      interaction: {
        intersect: false,
      },
      borderColor: '#cee3de',
      backgroundColor: 'transparent',
      datalabels: {
        // the position is inverted
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

const charOptions = {
  plugins: {
    datalabels: {
      backgroundColor: function (context: {
        dataset: { backgroundColor: string };
      }) {
        return context.dataset.backgroundColor;
      },
      color: 'black',
      font: {
        weight: 'bold',
      },
      formatter: Math.round,
      padding: 6,
    },
  },
  responsive: true,
  aspectRatio: false,
  layout: {
    padding: {
      top: 64,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};
onMounted(() => {
  // Cheat to resize the canvas from chart
  const donutCanvas = document.getElementById('line');
  if (donutCanvas) {
    donutCanvas.style.height = '358px';
  }
});
</script>

<template>
  <section class="line-chart-container-component">
    <div class="text">
      <h2 class="title">Insights</h2>
      <p class="subtitle">Leads per day</p>
    </div>
    <ElCard class="chart-container">
      <Line id="line" :data="charData" :options="charOptions" />
    </ElCard>
  </section>
</template>

<style>
.line-chart-container-component {
  display: flex;
  margin-block: 64px;
}

.line-chart-container-component .text {
  flex-grow: 1;
  margin-inline-end: 32px;
  width: 124px;
}

.line-chart-container-component .chart-container {
  flex-grow: 11;
  height: 424px;
  padding: 32px;
  overflow: hidden;
  width: calc(100% - 156px);
}

.el-card__body {
  padding: 0;
}

.line-chart-container-component .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
}

.line-chart-container-component .subtitle {
  color: var(--color-grey-6);
  font-size: 1.333rem;
  font-variation-settings: 'wght' 400;
  margin-block-start: 8px;
  margin-block-end: 24px;
}
</style>
