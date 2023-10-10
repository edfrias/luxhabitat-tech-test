<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { ElTable, ElTableColumn, ElButton } from 'element-plus';
import { TableDataItem } from './Types/types';
import { useModal } from '../stores/ModalStore';
import AddLeadModalComponent from './AddLeadModalComponent.vue';

const modalStore = useModal();

type IsLoading = boolean;

type TableData = Array<Partial<TableDataItem>>;

const props = defineProps<{
  data: TableData;
  isLoading: IsLoading;
}>();

const isNewLeadModalVisible = ref<boolean>(false);

const handleAddLead = (): void => {
  modalStore.setModalOpen(true);
  isNewLeadModalVisible.value = modalStore.getModalOpen;
};

const isLoading = computed<IsLoading>(() => props.isLoading);

watch(
  () => modalStore.getModalOpen,
  (newValue) => {
    if (!newValue) {
      isNewLeadModalVisible.value = newValue;
    }
  }
);
</script>

<template>
  <ElTable
    id="table"
    height="505"
    style="width: 100%"
    flexible
    table-layout="fixed"
    v-loading="isLoading"
    :data="props.data"
  >
    <ElTableColumn class-name="id" prop="id" label="Id" width="60" sortable />
    <ElTableColumn
      class-name="type"
      prop="type"
      label="Type"
      width="60"
      sortable
    />
    <ElTableColumn
      class-name="date"
      prop="timestamp"
      label="Creation date"
      width="100"
      sortable
    />
    <ElTableColumn
      class-name="lead-source"
      prop="lead_source"
      label="Lead Source"
      width="90"
    />
    <ElTableColumn class-name="name" prop="name" label="Name" width="100" />
    <ElTableColumn class-name="phone" prop="phone" label="Phone" width="100" />
    <ElTableColumn class-name="email" prop="email" label="Email" width="160" />
    <ElTableColumn
      class-name="property-id"
      prop="property_id"
      label="Property ID"
      width="60"
    />
    <ElTableColumn
      class-name="property-location"
      prop="property_location"
      label="Full location"
      width="80"
    />
    <ElTableColumn
      class-name="agent-id"
      prop="agent_id"
      label="Agent"
      width="60"
    />
    <ElTableColumn class-name="actions" width="136">
      <template #header>
        <ElButton class="add-lead" @click="handleAddLead" round>
          Add new lead
        </ElButton>
      </template>
      <template #default>
        <ElButton class="update" round>Update</ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
  <AddLeadModalComponent :visible="isNewLeadModalVisible" />
</template>

<style>
#table {
  --el-table-header-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-border-color: transparent;
  --el-table-row-hover-bg-color: transparent;
  --el-table-text-color: black;
  --el-table-header-text-color: black;
  background-color: transparent;
  font-size: 1em;
  font-variation-settings: 'wght' 300;
}

#table.el-table th.el-table__cell {
  font-size: 1.167em;
  font-variation-settings: 'wght' 500;
  padding-block-end: 40px;
}

#table.el-table .el-table__cell {
  padding: 0;
  padding-block-end: 32px;
}

#table.el-table .cell {
  padding: 0;
}

#table.el-table .el-table__cell.actions {
  display: flex;
  justify-content: flex-end;
}

#table.el-table th.el-table__cell.id {
  text-transform: uppercase;
}

#table.el-table th.el-table__cell.date .cell {
  display: flex;
  max-width: 100px;
  word-break: break-word;
}

#table.el-table th.el-table__cell.lead-source .cell {
  display: flex;
  max-width: 60px;
  word-break: break-word;
}

#table.el-table th.el-table__cell.property-location .cell {
  display: flex;
  max-width: 60px;
  word-break: break-word;
}

#table.el-table .el-table__cell .el-button:not(.add-lead) {
  --el-button-bg-color: transparent;
}

#table.el-table th.el-table__cell .el-button.add-lead {
  background-color: black;
  border-color: black;
  color: white;
}

#table.el-table th.el-table__cell .el-button.add-lead span {
  font-size: 1.167em;
}

#table.el-table .el-table__cell .el-button.update {
  min-width: 120px;
}
</style>
