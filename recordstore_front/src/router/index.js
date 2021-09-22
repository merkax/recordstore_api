import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{

        path: '/',
        name: 'Signin',
        component: Signin

    }]
})