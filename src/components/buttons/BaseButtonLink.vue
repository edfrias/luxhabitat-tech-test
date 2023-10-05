<script setup lang="ts">
import { ElButton } from 'element-plus';
</script>

<template>
  <ElButton class="base-link-button" link>
    <slot />
  </ElButton>
</template>

<style>
.base-link-button {
  margin: 0;
}
</style>
