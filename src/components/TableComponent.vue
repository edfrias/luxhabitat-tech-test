<script setup lang="ts">
import { ElTable } from 'element-plus';
import { TableDataItem } from './Types/types';
import data from '../mocks/leads.json';

// type IsLoading = boolean;

// const tableProps = defineProps<{
//   tableData: TableDataItem[];
//   isLoading?: IsLoading;
// }>();

const tableData = data as TableDataItem[];
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Id" width="100%" />
    <el-table-column prop="type" label="Type" width="100%" />
    <el-table-column prop="timestamp" label="Creation date" width="100%" />
    <el-table-column prop="lead_source" label="Lead Source" width="100%" />
    <el-table-column prop="name" label="Name" width="100%" />
    <el-table-column prop="email" label="Email" width="100%" />
    <el-table-column prop="phone" label="Phone" width="100%" />
    <el-table-column prop="property_id" label="Property ID" width="100%" />
    <el-table-column prop="agent_id" label="Agent" width="100%" />
    <el-table-column label="Operations">
      <template #default>
        <el-button size="small">Update</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style></style>
