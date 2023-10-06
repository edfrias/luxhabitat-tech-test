<script setup lang="ts">
import { ElContainer } from 'element-plus';
import CardComponent from './CardComponent.vue';
import cards from '../mocks/cards';
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
      <CardComponent
        v-for="card in cards"
        :key="card.id"
        :house-images="card.houseImages"
        :house-name="card.houseName"
        :house-availability="card.houseAvailability"
        :house-price="card.housePrice"
        :house-has-price="card.houseHasPrice"
        :house-specs="card.houseSpecs"
      />
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
.deck-component {
  margin-block-end: 72px;
}

.deck-component .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
}

.deck-component .subtitle {
  color: var(--color-grey-6);
  font-size: 1.333rem;
  font-variation-settings: 'wght' 300;
  margin-block-start: 8px;
  margin-block-end: 24px;
}
</style>
