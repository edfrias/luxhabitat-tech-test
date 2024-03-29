<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { ElButton } from 'element-plus';
import { TableDataItem } from './Types/types';
import { useStore } from '../stores/Store';
import { generateRandomLead } from '../utils/generateRandomLead';
import data from '../mocks/leads.json';
import TableComponent from './TableComponent.vue';

const TIMEOUT_DELAY = 1000;

const store = useStore();

const loadingLeads = ref<boolean>(false);

const generateRandomLeads = (): Partial<TableDataItem>[] => {
  const fakeLeads = [];
  for (let i = 1; i < 12; i++) {
    fakeLeads.push(generateRandomLead());
  }

  return fakeLeads;
};

const handleLoadLeads = (): void => {
  console.log('loading new random leads...');
  const newLeads = generateRandomLeads() as Array<TableDataItem>;
  loadingLeads.value = true;

  store.setLeadsData(newLeads);

  setTimeout(() => {
    loadingLeads.value = false;
  }, TIMEOUT_DELAY);
};

onBeforeMount(() => {
  store.setLeadsData(data);
});
</script>

<template>
  <section class="table-container-component">
    <div class="text">
      <h2 class="title">Lead activity</h2>
    </div>
    <div class="table-container">
      <TableComponent :data="store.getLeadsData" :is-loading="loadingLeads" />
      <ElButton class="load-leads" @click="handleLoadLeads" round>
        Load more
      </ElButton>
    </div>
  </section>
</template>

<style>
.table-container-component {
  display: flex;
  margin-block: 64px;
}

.table-container-component .text .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
  margin-inline-end: 32px;
}

.table-container-component .text {
  flex-grow: 1;
}

.table-container-component .table-container {
  flex-grow: 11;
}

.table-container-component .table-container .load-leads {
  background-color: var(--color-grey-6);
  border-color: var(--color-grey-6);
  color: white;
  font-size: 1.167em;
  font-variation-settings: 'wght' 400;
  margin-block-start: 48px;
  height: 38px;
  width: 136px;
}
</style>
