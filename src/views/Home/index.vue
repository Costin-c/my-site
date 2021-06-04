<template>
  <div
    v-loading="loading" 
    class="home-container" 
    ref="container" 
    @wheel="handleWheel"
  >
    <ul 
      class="carousel-container" 
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item"/>
      </li>
    </ul>

    <div 
      class="icon icon-up" 
      @click="switchTo(index - 1)" 
      v-show="index >= 1"
    >
      <Icon type="arrowUp" />
    </div>
    <div 
      class="icon icon-down" 
      @click="switchTo(index + 1)" 
      v-show="index < data.length - 1">
      <Icon type="arrowDown" />
    </div>

    <div class="indicator">
      <ul>
        <li  
          @click="switchTo(i)" 
          :class="{ active: i === index }" 
          v-for="(item, i) in data" 
          :key="item.id"></li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";

export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false,   // 是否正在切换中
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  // 挂载之后才能拿到dom元素
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // console.log(this.$refs.container.clientHeight);
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight - 1 + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    switchTo(i){
      this.index = i;
    },
    handleWheel(e) {
      if(this.switching || e.deltaY <= 5 && e.deltaY >= -5){
        return;
      }
      
      if(e.deltaY < -5 && this.index > 0) {
        // 往上滚动
        this.switching = true;
        this.index --;
        // console.log("aaaa");
      }else if(e.deltaY > 5 && this.index < this.data.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index ++;
        // console.log("bbb");
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },

  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  // background: @dark;
  overflow: hidden;
  position: relative;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: .5s;
  li {
    height: 100%;
    width: 100%;
  }
}

.icon {
  @gap: 25px;
  .self-center();
  font-size: 30px;
  transform: translateX(-50%);
  cursor: pointer;
  color: @gray;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;

  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;
    // transition: .5s;
    &.active {
      background: #fff;
    }
  }
}
</style>
