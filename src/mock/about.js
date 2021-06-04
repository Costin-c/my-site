import Mock from 'mockjs';

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "http://strml.net/"
    // "https://costin.yuque.com/dashboard"
})