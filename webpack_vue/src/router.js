import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)
//3.创建路由对象
var router=new VueRouter({
    routes:[
        {
            path:"/account",
            component:account,
            children:[
                {path:"login",component:login},
                {path:"register",component:register}
            ]
        },
        {path:"/goodlist",component:goodlist}
    ]
})
//把路由对象暴露出去
export default router
