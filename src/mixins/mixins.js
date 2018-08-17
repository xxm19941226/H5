/**
 * 点击路由跳转基础配置
 */
const Mixins = {
    install (Vue) {
        Vue.mixin({
            methods: {
                push (data) {
                    console.log('push', data)
                    this.$router.push(data)
                },
                replace (data) {
                    // 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
                    this.$router.replace(data)
                },
                go (data) {
                    console.log('go', data)
                    this.$router.go(data)
                }
            }
        })
    }
}

module.exports = Mixins
