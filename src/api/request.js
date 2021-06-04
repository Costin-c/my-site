import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();     // 创建axios实例

ins.interceptors.response.use(function(resp){   // 创建响应拦截器过滤一些规则
    if(resp.data.code !== 0){
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500
        })
        return null;
    }
    return resp.data.data;
})

export default ins;