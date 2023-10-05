<script setup lang="ts">
import { ElTable } from 'element-plus';

type TableData = {
  photo: string;
  name: string;
  surname: string;
  country: string;
};

type IsLoading = boolean;

const tableProps = defineProps<{
  tableData: TableData[];
  isLoading?: IsLoading;
  hasStripe?: boolean;
}>();
</script>

<template>
  <el-table
    :data="tableProps.tableData"
    :stripe="tableProps.hasStripe"
    style="width: 100%"
    v-loading="tableProps.isLoading"
  >
    <el-table-column label="Photo" width="100%">
      <template #default="props">
        <img :src="props.row.photo" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" width="100%" />
    <el-table-column prop="surname" label="Surname" width="100%" />
    <el-table-column prop="country" label="Country" width="100%" />
  </el-table>
</template>

<style></style>
