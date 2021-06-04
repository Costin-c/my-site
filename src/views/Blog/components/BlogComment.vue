<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    // this.$bus.$emit("mainScroll");
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed:{
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    handleScroll(dom){
      // 避免加载次数过多
      if(this.isLoading || !dom){
        return;
      }
      const range = 100; // 一个到底部的范围内
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range){
        this.fetchMore();
      }
      // console.log(dom);
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore(){
      if(!this.hasMore){
        // 没有更多数据了
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
