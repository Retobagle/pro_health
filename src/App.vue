<template>
  <div class="container">
    <!-- 顶部 -->
    <hospital-top/>
    <!-- 内容 -->
    <div class="content">内容</div>
    <!-- 底部 -->
    <hospital-bottom/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
      .content {
        margin-top: 70px;
        width: 1200px;
        min-height: 700px;
      }
  }
</style>