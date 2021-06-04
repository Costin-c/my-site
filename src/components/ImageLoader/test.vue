<template>
  <div class="test-container">
      <image-loader 
      :src="src"  
      :placeholder="placeholder"
      @load="handleLoaded"/>
  </div>
</template>

<script>
import ImageLoader from './index.vue';
export default {
    components: {
        ImageLoader
    },
    data() {
        return {
            src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
            placeholder: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        }
    },
    methods: {
        handleLoaded(){
            console.log("loadOver");
        }
    },
}
</script>

<style scoped>
.test-container {
    width: 500px;
    height: 400px;
    border: 1px solid black;
    margin: 30px auto;
}
</style>