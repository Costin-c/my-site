<template>
  <nav class="menu-container">
    <router-link
        v-for="item in items" 
        :key="item.link" 
        :to="{ name: item.name }"
        :exact="item.exact"
        active-class="selected"
        exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false  // 激活状态是否精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 20px 0;
  
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    // font-size: 15px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>