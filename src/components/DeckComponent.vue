<script setup lang="ts">
import { ElContainer } from 'element-plus';
import CardComponent from './CardComponent.vue';
</script>

<template>
  <section class="deck-component">
    <section class="header">
      <h2 class="title">Do more with Luxhabitat</h2>
      <p class="subtitle">
        Grow your bussines with our award-winning website desings and marketing
        solutions
      </p>
    </section>

    <ElContainer>
      <CardComponent />
    </ElContainer>
  </section>
</template>

<style>
:root {
  --color-grey-6: #656565;
}

.el-main {
  padding: 0;
}

.deck-component .title {
  font-size: 1.833rem;
  font-weight: 500;
  margin: 0;
}

.deck-component .subtitle {
  color: var(--color-grey-6);
  font-size: 1.333rem;
  font-weight: 300;
  margin-block-start: 8px;
  margin-block-end: 16px;
}
</style>
