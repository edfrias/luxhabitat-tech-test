<script setup lang="ts">
import { ElCard, ElImage, ElButton } from 'element-plus';
</script>

<template>
  <ElCard class="card-component">
    <ElImage
      class="image-component"
      src="https://source.unsplash.com/random/325x245/?house"
      alt="Random image of a house"
    />
    <section class="house-info">
      <p class="house-name">
        Palm Jumeriah
        <span class="house-availability">Ready</span>
      </p>
      <p class="house-price">Price on application</p>
      <ElButton class="house-follow" type="info" round>Follow</ElButton>
      <p class="house-specs">Penthouse · 4 beds · 9,222 sq. ft.</p>
    </section>
  </ElCard>
</template>

<style>
:root {
  --card-border-radius: 8px;
}

.el-card {
  border-radius: var(--card-border-radius);
}

.card-component {
  padding: 16px;
  max-height: 424px;
  max-width: 357px;
}

.card-component > .el-card__body {
  padding: 0;
}

.card-component .image-component {
  height: 245px;
  width: 325px;
}

.house-info {
  margin-block-start: 16px;
}

.house-info > p {
  padding: 0;
  margin: 0;
}

.house-name {
  font-size: 1.667rem;
  font-weight: 500;
}

.house-name > .house-availability {
  color: var(--color-grey-6);
  font-size: 1.167rem;

  font-weight: 400;
}

.house-price {
  font-size: 1.333rem;
  font-weight: 300;
}

.house-follow {
  font-size: 1.167rem;
  font-weight: 400;
}

.house-specs {
  color: var(--color-grey-5);
  font-size: 1.167rem;
  font-weight: 400;
}
</style>
