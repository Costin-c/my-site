
// vue-cli 得配置文件  commonjs方式导出，在node环境读取
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-site.com",
            }
        }
    },
    configureWebpack: require("./webpack.config"),
}