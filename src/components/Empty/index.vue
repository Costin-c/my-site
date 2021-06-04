<template>
    <div class="empty-container">
        <Icon type="empty"/>
        <p>{{ text }}</p>
    </div>
</template>

<script>
import Icon from '../Icon';
export default {
    components: {
        Icon,
    },
    props: {
        text: {
            type: String,
            default: "无数据",
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.empty-container {
    .self-center();
    color: @gray;
    text-align: center;
}

// 通过作用域改变子组件根元素的样式
.icon-container {
    font-size: 72px;
}

</style>