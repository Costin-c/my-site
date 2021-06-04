<template>
  <!-- 只有总页数大于1的时候才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleCilck(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleCilck(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>

    <a
    
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      @click="handleCilck(n)"
      >{{ n }}</a
    >

    <a @click="handleCilck(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleCilck(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到现实的最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let num = [];
      for (var i = this.visibleMin; i <= this.visibleMax; i++) {
        num.push(i);
      }
      return num;
    },
  },
  methods: {
    handleCilck(newPage){
      if(newPage < 1){
        newPage = 1;
      }
      if(newPage > this.pageNumber){
        newPage = this.pageNumber;
      }
      if(this.newPage === this.current){
        return;
      }
      this.$emit("pageChange", newPage);
    }
  },
};
</script>

<style lang="less" scoped>
// ~@表示src目录
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
a {
  cursor: pointer;
  color: @primary;
  margin: 0 6px;
  &.disabled {
    color: @lightWords;
    cursor: not-allowed;
  }
  &.active {
    color: @words;
    font-weight: bold;
    cursor: text;
  }
}
</style>