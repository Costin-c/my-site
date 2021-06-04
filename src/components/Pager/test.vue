<template>
  <div id="app">
    <h1>Pager</h1>
    <pager :current="current" :total="total" @pageChange="changePage($event)"></pager>
  </div>
</template>

<script>
import Pager from "./index.vue";

export default {
  name:"App", //如果组件注册的时候没有指定名字，则默认使用这个name
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    }
  },
  methods: {
    changePage(newPage){
      // console.log("页面改变了",newPage);
      this.current = newPage;
    }
  },
  
}
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>

