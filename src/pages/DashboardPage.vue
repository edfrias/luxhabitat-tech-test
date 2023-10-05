<script setup lang="ts">
import { ElDivider, ElHeader, ElContainer, ElMain } from 'element-plus';
import AsideComponent from '../components/AsideComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import DeckComponent from '../components/DeckComponent.vue';
</script>

<template>
  <section class="dashboard-page">
    <ElContainer>
      <AsideComponent />
      <ElContainer class="content-container">
        <ElHeader>
          <HeaderComponent />
        </ElHeader>
        <ElDivider class="divider" />
        <ElMain class="main-container">
          <DeckComponent />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </section>
</template>

<style>
:root {
  --color-grey-5: #888;
}

.dashboard-page .content-container {
  padding-inline-end: 64px;
}

.dashboard-page .divider {
  border-color: var(--color-grey-5);
}

.dashboard-page .el-main.main-container {
  overflow: visible;
}
</style>
