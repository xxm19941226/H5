import 'babel-polyfill'
import Vue from 'vue'
// require('./extends/filters')
// require('./extends/directives')
import router from './router/routers.js'
import App from './App.vue'
import Mixins from './mixins/mixins'
import './api/index'
import http from './api/http'
import FastClick from 'fastclick'
import VueTouch from 'vue-touch'
import {ToastPlugin, AlertPlugin} from 'vux'
// import VueHead from 'vue-head' // 引入vue-head
FastClick.attach(document.body)
// Vue.use(VueHead)
Vue.use(http)
Vue.use(Mixins)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

router.afterEach(function () {
})
//实例
var APP = new Vue({
    el: '#container',
    router,
    components: {
        App
    }
})
