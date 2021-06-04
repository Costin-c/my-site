<template>
  <div class="test-container">
      <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
      Empty
  },
  data() {
      return {
          msg: "abcd"
      }
  },
}
</script>

<style scoped>
.test-container{
  width: 500px;
  height: 400px;
  border: 1px solid black;
  margin: 30px auto;
  position: relative;
}
</style>

