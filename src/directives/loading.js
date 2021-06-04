import styles from './loading.module.less';
import loadingImg from '@/assets/loading.svg';

function getImageDom(el){
   return  el.querySelector("img[data-role=loading]");
}
function createImage(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingImg;
    img.className = styles.loading;
    return img;
}

export default function(el, bunding){
    const curImg = getImageDom(el);
    if(bunding.value){
        if(!curImg){
            const img = createImage();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}