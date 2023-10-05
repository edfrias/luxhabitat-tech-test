<script setup lang="ts">
import { ElAvatar } from 'element-plus';
</script>

<template>
  <ElAvatar :size="24" class="user-badge-component">A</ElAvatar>
</template>

<style>
:root {
  --user-badge-bg-color: #f3dac7;
}

.user-badge-component {
  background-color: var(--user-badge-bg-color);
  color: black;
  font-size: 1.333rem;
}
</style>
