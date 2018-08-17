import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '../store'
// import store from '../store'
// import { querystring } from 'vux'
// require('es6-promise').polyfill() //让axios兼容低版本的浏览器
// const state = store.state
console.log('config', store.state.apiHost)
const http = axios.create({
    baseURL: store.state.apiHost,
    timeout: 60000,
    // withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'uid': store.state.uid,
        // 'token': store.state.token
    },
    transformRequest: [function (data) {
        return qs.stringify(data)
    }
    ],
    transformResponse: [function (data) {
        // 这里提前处理返回的数据
        return (data instanceof Object ? data : JSON.parse(data));
    }],
    paramsSerializer (data) {
        return qs.stringify(data)
    }
})
// export default http
export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, '$http', { value: http });
    }
};