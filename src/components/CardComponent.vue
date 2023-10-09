<script setup lang="ts">
import { computed, ref } from 'vue';
import { HouseAvailability } from './Types/types';
import {
  ElCard,
  ElImage,
  ElButton,
  ElCarousel,
  ElCarouselItem,
} from 'element-plus';

interface CardProps {
  houseImages: string[];
  houseName: string;
  houseAvailability: HouseAvailability;
  housePrice: string;
  houseHasPrice: boolean;
  houseSpecs: string;
}

const data = defineProps<CardProps>();

const isFollowActive = computed(() =>
  data.houseAvailability === HouseAvailability.NOT_READY ? true : false
);

const isLoading = ref<boolean>(true);

const imageHasLoaded = (): void => {
  isLoading.value = false;
};
</script>

<template>
  <ElCard class="card-component">
    <ElCarousel trigger="click" height="245px">
      <ElCarouselItem v-for="image in houseImages" :key="image">
        <ElImage
          v-loading="isLoading"
          :src="image"
          alt="Random image of a house"
          class="image-component"
          @load="imageHasLoaded"
        />
      </ElCarouselItem>
    </ElCarousel>
    <section class="house-info">
      <div class="content">
        <p class="house-name">
          {{ houseName }}
          <span class="house-availability">{{ houseAvailability }}</span>
        </p>
        <p :class="`house-price ${houseHasPrice && 'hasPrice'}`">
          {{ housePrice }}
        </p>
      </div>
      <ElButton
        class="house-follow"
        type="info"
        size="large"
        :disabled="isFollowActive"
        round
      >
        Follow
      </ElButton>
      <div class="footer">
        <p class="house-specs">{{ houseSpecs }}</p>
      </div>
    </section>
  </ElCard>
</template>

<style>
:root {
  --card-border-radius: 8px;
  --el-carousel-bullet-width: 8px;
  --el-carousel-bullet-height: 8px;
  --color-grey-3: #ddd;
}

.el-card {
  border-radius: var(--card-border-radius);
}

.card-component {
  padding: 16px;
  max-height: 424px;
  max-width: 357px;
}

.card-component:not(:last-child) {
  margin-inline-end: 32px;
}

.card-component > .el-card__body {
  padding: 0;
}

.card-component .image-component {
  height: 245px;
  width: 325px;
}

.card-component .el-carousel__button {
  border-radius: 50%;
  height: var(--el-carousel-bullet-height);
  width: var(--el-carousel-bullet-width);
}

.house-info {
  display: flex;
  flex-wrap: wrap;
  margin-block-start: 16px;
}

.house-info .content > p,
.footer .house-specs {
  padding: 0;
  margin: 0;
}

.house-info .content {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}

.house-name {
  font-size: 1.667rem;
  font-variation-settings: 'wght' 500;
}

.house-name > .house-availability {
  color: var(--color-grey-6);
  font-size: 1.167rem;
  font-variation-settings: 'wght' 400;
  margin-inline-start: 16px;
  text-transform: capitalize;
}

.house-info .content > .house-price {
  font-size: 1.333rem;
  font-variation-settings: 'wght' 300;
  margin-block-start: 8px;
}

.house-info .content > .house-price.hasPrice {
  text-transform: uppercase;
}

.house-follow {
  color: black;
  background-color: var(--color-grey-3);
  border-color: var(--color-grey-3);
  font-size: 1.167rem;
  font-variation-settings: 'wght' 400;
  flex-grow: 1;
}

.house-follow:is(:disabled) {
  background-color: var(--color-grey-3);
}

.footer .house-specs {
  color: var(--color-grey-5);
  font-size: 1.167rem;
  font-variation-settings: 'wght' 400;
  flex-grow: 3;
  margin-block-start: 56px;
}
</style>
