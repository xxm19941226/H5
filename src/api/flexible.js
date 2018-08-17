/**
 * YDUI 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = .32rem】
 * http://vue.ydui.org/docs/#/flexible
 */
!(function (window) {
    var width = document.documentElement.clientWidth,rate = width / 1280 * 100;
    document.getElementsByTagName('html')[0].style.fontSize = rate + 'px';
}(window))
