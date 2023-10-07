<script setup lang="ts">
import TableComponent from './TableComponent.vue';
</script>

<template>
  <section class="table-container-component">
    <div class="text">
      <h2 class="title">Lead activity</h2>
    </div>
    <div class="table-container">
      <TableComponent />
    </div>
  </section>
</template>

<style>
.table-container-component {
  display: flex;
  margin-block: 64px;
}

.table-container-component .title {
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
</style>
