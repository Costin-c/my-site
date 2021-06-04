import Vue from "vue"

/**
 * 获取某个组件渲染的Dom根元素
 * @param {Component} comp  需要获取Dom根元素传入的组件
 * @param {Object} props 传入的组件身上的属性
 * @returns 
 */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}