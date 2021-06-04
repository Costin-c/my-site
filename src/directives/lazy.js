import eventBus from '@/eventBus';
import { debounce } from "@/utils";
import defaultGif from '@/assets/default.gif';

// 用来存储图片及信息
let imgs = [];

function setImage(img) {
    // 先让所有图片变为默认图片
    img.dom.src = defaultGif;
    // 处理图片
    // 该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;

    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;

    if (rect.top >= -height && rect.top <= clientHeight) {
        // 在视口范围内
        //方法一：
        const tempImg = new Image();
        tempImg.onload = function(){
            // 当真实图片加载完成之后
            img.dom.src = img.src;
        }
        tempImg.src = img.src;
        
        // 方法二
        // img.dom.src = img.src;
        imgs = imgs.filter( (i) => i !== img);
        // console.log(img.src, "在视口范围");
    }
}

// 调用该函数，就能设置合适的图片
function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}
function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img);

        // 立即处理图片
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}