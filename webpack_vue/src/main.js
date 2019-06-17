//会去配置项中查看路径，默认导入vue.runtime.common.js
//import Vue from 'vue'
import Vue from 'vue'
import app from './app.vue'


//导入路由自定义模块
import router from './router.js'

var vm=new Vue({
    el:'#app',
    data:{},
    router,
    render:c=>c(app)
})