import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Artists from '@/components/artists/Artists'
import Records from '@/components/records/Records'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{

            path: '/artists',
            name: 'Artist',
            component: Artists

        },
        {

            path: '/records',
            name: 'Records',
            component: Records

        },
        {

            path: '/',
            name: 'Signin',
            component: Signin

        },

        {
            path: '/signup',
            name: 'Signup',
            component: Signup

        }
    ]
})