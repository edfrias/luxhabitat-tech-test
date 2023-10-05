<script setup lang="ts">
import { ElAside } from 'element-plus';
import HouseIconButton from './buttons/HouseIconButton.vue';
import UserIconButton from './buttons/UserIconButton.vue';
import ContactPageIconButton from './buttons/ContactPageIconButton.vue';
import LayersIconButton from './buttons/LayersIconButton.vue';
import ScreenShareIconButton from './buttons/ScreenShareIconButton.vue';
import BarChartIconButton from './buttons/BarChartIconButton.vue';
import NotificationsIconButton from './buttons/NotificationsIconButton.vue';
import UserBadgeComponent from './UserBadgeComponent.vue';
</script>

<template>
  <ElAside class="aside-component" width="120px">
    <HouseIconButton />
    <UserIconButton />
    <ContactPageIconButton />
    <LayersIconButton />
    <ScreenShareIconButton />
    <BarChartIconButton />
    <NotificationsIconButton class="notifications" />
    <UserBadgeComponent />
  </ElAside>
</template>

<style>
.aside-component {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-block-start: 32px;
  overflow: hidden;
  padding-inline-end: 64px;
  padding-inline-start: 24px;
}

.aside-component > .el-button {
  margin-block-end: 18px;
}

.aside-component > .el-button + .el-button {
  margin-inline-start: 0;
  margin-block-end: 16px;
}

.aside-component > .notifications {
  margin-block-start: 336px;
}
</style>
