<script setup lang="ts">
import { ref, watch } from 'vue';
import { ElDialog } from 'element-plus';

type Props = {
  visible: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits(['close']);

const showModal = ref<boolean>(false);

const handleClose = (): void => {
  emit('close');
};

watch(
  () => props.visible,
  (newValue) => {
    showModal.value = newValue;
  }
);
</script>

<template>
  <ElDialog
    :before-close="handleClose"
    align-center
    v-model="showModal"
    width="30%"
  >
    <span>This is a message</span>
  </ElDialog>
</template>

<style></style>
