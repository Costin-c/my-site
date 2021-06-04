<template>
    <div class="test-container">
        <site-aside></site-aside>
    </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
    components: {
        SiteAside,
    },
}
</script>

<style>
.test-container{
    width: 250px;
    height: 600px;
    /* background: #202020; */
    /* border: 2px solid; */
    margin: 0 auto;
}
</style>