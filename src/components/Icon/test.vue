<template>
  <div class="test-container">
    <div class="item" v-for="type in types" :key="type">
      <Icon :type="type"  id="icon"/>
      <label  for="icon">{{ type }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index.vue";

export default {
  name:"App", //如果组件注册的时候没有指定名字，则默认使用这个name
  components: {
    Icon,
  },
  data() {
    return {
      types
    }
  },
}
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>

