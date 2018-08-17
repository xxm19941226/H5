import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config/secret'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../views/index'], resolve)
        }, {
            path: '/index',
            name: 'index',
            component: resolve => require(['../views/index'], resolve)
        },{
            path: '*',
            redirect: '/404'
        }
    ],
    mode: 'history',
    base: '/' + config.path.all + '/',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {x: 0, y: 0}
    }
})
