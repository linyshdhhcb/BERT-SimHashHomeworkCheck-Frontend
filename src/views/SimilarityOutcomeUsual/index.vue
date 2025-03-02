<!-- @/views/SimilarityOutcome/index.vue -->
<script setup>
import Check from './components/Check.vue';
</script>

<template>
  <div>
    <!-- 使用一个父级容器包裹所有子元素 -->
    <div>
      <!-- 二级路由 -->
      <Check />
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
