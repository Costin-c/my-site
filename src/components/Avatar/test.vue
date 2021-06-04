<template>
  <div id="app">
    <!-- 加上：可以转换为js表达式绑定数字 -->
    <h1>Avatar</h1>
    <Avatar :url="imgUrl[0]" ></Avatar>
    <Avatar :url="imgUrl[1]" :size="100"></Avatar>

  </div>
</template>

<script>
import Avatar from "./index.vue";

export default {
  name:"App", //如果组件注册的时候没有指定名字，则默认使用这个name
  components: {
    Avatar,
  },
  data() {
    return {
      imgUrl: [
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667224596,2219050978&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2224881846,803471591&fm=26&gp=0.jpg"
      ]
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

