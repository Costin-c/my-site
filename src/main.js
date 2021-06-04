import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"   // 引入全局样式
import router from "./router"   // 引入路由
import showMessage from './utils/showMessage';  // 引入自定义方法全局挂载
import "./mock" // 引入测试数据
import "./eventBus";  // 引入事件总线
import store from "./store";  // 引入数据仓库
store.dispatch("setting/fetchSetting");

import vLoading from './directives/loading';    // 注册全局指令
import vLazy from './directives/lazy';    // 全局指令懒加载
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

// 此方法可能会在不同组件内多次调用，因此写入原型
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


// 测试数据
import * as blogApi from "./api/blog";
