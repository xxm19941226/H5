/**
 * Created by chonglu.wang on 2017/3/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import config from '../../config/secret'

Vue.use(Vuex)

// 全局state
let state = {
    os: '',
    browser: '',
    version: '2.31',
    win: {
        width: '',
        height: ''
    },
    uid: '',
    ouid: '',
    token: '',
    lottery: false,
    address: 0,
    cdn: '',
    userInfo: [],
    dlHost: '',
    apiHost: 'https://actapi-stress.gulugames.cn',
    host: '',
    // query: '?pid=' + config.path.all
    // wxConfig: ''
}
export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})
