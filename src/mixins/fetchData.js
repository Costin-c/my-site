// 公共的远程获取数据的代码
export default function(fetchDataDefault = null){
    return {
        data() {
            return {
                isLoading: true,
                data: fetchDataDefault
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    }
}