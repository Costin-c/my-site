<template>
  <div class="test-container">
      <Contact/>
  </div>
</template>

<script>
import Contact from './index.vue';
import "@/styles/global.less";
export default {
    components: {
        Contact
    }
}
</script>

<style scoped>
.test-container {
    width: 400px;
    height: 400px;
    border: 2px solid black;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 1);
    padding-top: 200px;
}
</style>