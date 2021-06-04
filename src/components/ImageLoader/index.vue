<template>
  <div class="image-loader-container">
    <img
      v-if="!everythingOver"
      class="placeholder"
      :src="placeholder"
    />
    <img 
      :src="src"
      :style="{ opacity: originOpacity, transiton: `${duration}ms` }" 
      @load="handleLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      loadedOpacity: false,
      everythingOver: false,
    }
  },
  computed: {
    originOpacity() {
      return this.loadedOpacity ? 1 : 0;
    }
  },
  methods: {
    handleLoad() {
      // console.log("图片加载完毕",this.duration);
      this.loadedOpacity = true;
      setTimeout(()=>{
        this.everythingOver = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
  }
}
.placeholder {
  filter: blur(2vw);
}

</style>
