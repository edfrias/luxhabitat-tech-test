<script setup lang="ts">
import { ElButton } from 'element-plus';
</script>

<template>
  <ElButton class="base-button" color="#e8e8e8">
    <slot />
  </ElButton>
</template>

<style>
:root {
  --el-border-radius-base: 8px;
}
.base-button {
  padding: 6px;
}
</style>
