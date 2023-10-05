<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const IconProps = defineProps<{
  name: string;
}>();

const icon = defineAsyncComponent(
  () => import(`../assets/svg/${IconProps.name}.svg`)
);
</script>

<template>
  <component :is="icon" />
</template>

<style></style>
