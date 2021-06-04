<template>
  <div class="app-container">
    <Layout>
      <!-- 左边 -->
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <!-- 中间 -->
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from './components/ToTop';
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>