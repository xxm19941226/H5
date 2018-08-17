/**
 * Created by chonglu.wang on 2017/3/9.
 */

// import * as types from './mutation-types'

export default {
    UID (state, change) {
        state.uid = change
    },
    OUID (state, change) {
        state.ouid = change
    },
    TOKEN (state, change) {
        state.token = change
    },
    ISLOGIN (state, change) {
        state.islogin = change
    },
    LOGIN (state, change) {
        state.login = change
    },
    WIN (state, change) {
        console.log(change)
        state.win.width = change.winWidth === '' ? '' : change.winWidth
        state.win.height = change.winHeight === '' ? '' : change.winHeight
    },
    USERINFO (state, change) {
        state.userInfo = change
    },
    BROWSER (state, change) {
        state.browser = change
    },
    OS (state, change) {
        state.os = change
    },
    lottery (state, change) {
        state.lottery = change
    },
    isendDate (state, change) {
        state.isendDate = change
    },
    wxConfig (state, change) {
        state.wxConfig = change
    }

}
