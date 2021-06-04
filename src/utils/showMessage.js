import getComponentsRootDom from "./getComponentRootDom"
import Icon from '@/components/Icon';
import styles from "@/styles/showMessage.module.less"

/**
 * 弹出消息
 * @param {String} content   消息内容
 * @param {String} type      消息类型 { info, error, success, warn }
 * @param {Number} duration  消息消失的时间
 * @param {HTMLElement} container 盛放消息的容器，消息显示在该容器正中间，如果不传显示在页面正中
 * content, type = "info", duration = 1500, container
 */

export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    // 创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentsRootDom(Icon, {
        type
    });
    console.log(iconDom);
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    // 设置样式
    const typeClassNmae = styles[`message-${type}`];    // 类型样式名
    div.className = `${styles.message} ${typeClassNmae}`;

    if(options.container){
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }
    
    container.appendChild(div);
    // 因为浏览器异步加载  需要强制渲染一次（读取元素的位置、尺寸等） 导致重排reflow
    div.clientWidth

    // 处理动画效果
    div.style.opacity = 1;
    div.style.transform = "translate(-50%, -50%)";


    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%, -50%) translateY(-25px)";
        // 移除元素
        div.addEventListener("transitionend", function () {
            div.remove();
            // 运行回调函数
            options.callback && options.callback();
        }, { once: true })
    }, duration);
}