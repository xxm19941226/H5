import Vue from 'vue'
import store from '../store'
import _ from 'lodash'
import './until'
import './flexible'
// import './rem'

function is_weixin () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        store.commit('BROWSER', 'wx')
		// return true
    } else {
        store.commit('BROWSER', '')
		// return false
    }
}
is_weixin()

// window.$http = Vue.prototype.$http = http
window.$store = Vue.prototype.$store = store
window._ = Vue.prototype._ = _
