<template>
  <div class="test-container">
      <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./index.vue";
export default {
    components: {
        Menu
    }
}
</script>

<style lang="less" scpoed>
@import "~@/styles/global.less";
.test-container{
    width: 400px;
    height: 600px;
    border: 2px solid red;
    background: #000;
    margin: 0 auto;
}

</style>