<script setup lang="ts"></script>

<template>
  <section class="header-component">
    <h1 class="title">Dashboard</h1>
    <p class="greet">Welcome back, Alberto</p>
  </section>
</template>

<style>
.el-header {
  padding: 0;
}

.header-component {
  margin-block-start: 24px;
}

.header-component > .title {
  font-size: 1.833rem;
  font-variation-settings: 'wght' 500;
  margin: 0;
}

.header-component > .greet {
  font-size: 1.333rem;
  font-variation-settings: 'wght' 300;
  margin-block-start: 8px;
  margin-block-end: 16px;
}
</style>
