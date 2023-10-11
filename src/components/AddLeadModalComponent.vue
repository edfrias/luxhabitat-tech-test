<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElSelect,
  ElButton,
  ElOption,
  ElInput,
  ElCol,
} from 'element-plus';
import type { FormInstance } from 'element-plus';
import { useModal } from '../stores/ModalStore';
import { TableDataItem } from './Types/types';
import { formRules } from './validator/ValidatorRules';
import { generateRandomDate } from '../utils/generateRandomLead';
import agents from '../mocks/agents.json';

const modalStore = useModal();
const leadsList = [{ type: 'Buyer' }, { type: 'Seller' }, { type: 'Tenant' }];

const fakeDate = generateRandomDate();

const defaultLead: Partial<TableDataItem> = {
  id: 0,
  timestamp: fakeDate,
  type: '',
  lead_source: '',
  name: '',
  email: '',
  phone: '',
  property_location: 'no data',
  agent_id: undefined,
  property_id: undefined,
};

const isModalVisible = ref(modalStore.getModalOpen);
const formRef = ref<FormInstance>();
const leadForm = reactive<Partial<TableDataItem>>(defaultLead);

const handleClose = (): void => {
  modalStore.setModalOpen(false);
};

const resetFormFields = (formEl: FormInstance | undefined): void => {
  if (!formEl) return;

  formEl.resetFields();
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid) {
      modalStore.setLeadData({ ...formEl.$props.model });
    } else {
      console.log('error while submit!');
      return false;
    }
  });

  handleClose();
};

watch(
  () => modalStore.getModalOpen,
  (newValue) => {
    isModalVisible.value = newValue;
  }
);
</script>

<template>
  <ElDialog
    :before-close="handleClose"
    @closed="resetFormFields(formRef)"
    modal-class="lead-modal"
    align-center
    v-model="isModalVisible"
    width="1162"
  >
    <p class="title">Lead details</p>
    <section class="form-container">
      <ElForm ref="formRef" :model="leadForm" :rules="formRules">
        <ElFormItem class="modal-row">
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="type">
              <ElSelect
                v-model="leadForm.type"
                placeholder="Lead type*"
                size="large"
                style="width: 100%"
              >
                <ElOption
                  v-for="(item, index) in leadsList"
                  :key="index"
                  :label="item.type"
                  :value="item.type"
                />
              </ElSelect>
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="lead_source">
              <ElInput
                v-model="leadForm.lead_source"
                placeholder="Lead source*"
                size="large"
              />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="name">
              <ElSelect
                v-model="leadForm.name"
                placeholder="Name*"
                size="large"
                style="width: 100%"
              >
                <ElOption
                  v-for="agent in agents"
                  :key="agent.id"
                  :label="agent.name"
                  :value="agent.name"
                />
              </ElSelect>
            </ElFormItem>
          </ElCol>
        </ElFormItem>

        <ElFormItem class="modal-row">
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="email">
              <ElInput
                v-model="leadForm.email"
                placeholder="Email*"
                size="large"
              />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="phone">
              <ElInput
                v-model.number="leadForm.phone"
                placeholder="Phone*"
                size="large"
              />
            </ElFormItem>
          </ElCol>
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="agent_id">
              <ElInput
                v-model.number="leadForm.agent_id"
                placeholder="Agent Id*"
                size="large"
              />
            </ElFormItem>
          </ElCol>
        </ElFormItem>

        <ElFormItem class="modal-row">
          <ElCol :span="8">
            <ElFormItem class="modal-row" prop="property_id">
              <ElInput
                v-model="leadForm.property_id"
                placeholder="Property ID*"
                size="large"
              />
            </ElFormItem>
          </ElCol>
        </ElFormItem>
        <ElFormItem class="modal-row button-container">
          <ElButton
            class="booker"
            size="large"
            plain
            @click.prevent="submitForm(formRef)"
          >
            Book a valuation
          </ElButton>
        </ElFormItem>
      </ElForm>
    </section>
  </ElDialog>
</template>

<style>
:root {
  --color-grey-1: #2a2a2a;
}

.lead-modal {
  display: flex;
}

.lead-modal .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin-block-end: 32px;
}

.lead-modal .el-dialog {
  border-radius: var(--card-border-radius);
}

.lead-modal .el-dialog .el-dialog__body {
  padding-block-start: 0;
  padding-block-end: 72px;
  padding-inline: 56px;
}

.lead-modal .el-dialog .el-dialog__headerbtn .el-dialog__close {
  color: black;
}

.lead-modal .form-container .modal-row {
  margin-block-end: 32px;
}

.lead-modal .form-container .el-col-8 {
  margin-inline-end: 32px;
  flex-basis: calc(33.3333333333% - 32px);
}

.lead-modal .el-dialog .el-input--large .el-input__inner {
  font-size: 1.333em;
  font-variation-settings: 'wght' 400;
  min-height: 56px;
}

.lead-modal .el-dialog .el-input__inner::placeholder {
  color: var(--color-grey-1);
  font-size: 1.333rem;
  font-variation-settings: 'wght' 400;
}

.lead-modal .el-dialog .button-container .el-form-item__content {
  justify-content: center;
}

.lead-modal .el-dialog .booker {
  min-height: 56px;
  min-width: 256px;
}
</style>
