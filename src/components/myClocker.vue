<template>
    <!-- <div :class="{three : timeobj.days <= (sign||3)}">{{clocker}}</div> -->
    <span>
        <span class="float-l time-text time-d" v-text="curD"></span>
        <span class="float-l time-text time-h" v-text="curH"></span>
        <span class="float-l time-text time-m" v-text="curM"></span>
    </span>
</template>
<script>

export default {
    data () {
        return {
            curD: '', // 天
            curH: '', // 时
            curM: '', // 分
            curS: '', // ，秒
            clocker: '',
            timeobj: null // 时间对象
        }
    },
    props: ['startTime', 'endTime', 'msg', 'sign'],
    created () {
        
    },
    mounted () {
       setTimeout(()=>{
           this.countTime()
       }, 100)
    },
    watch: {

    },
    computed: {
        
    },
    methods: {
       countTime() {
            setTimeout(()=>{
                let timeLag = this.endTime - this.startTime;
                let number = num => {
                    return num < 10 ? "0" + num : num;
                };
                let timeFunction = () => {
                    let time = timeLag--; // time为两个时间戳之间相差的秒数
                    this.timeobj = { // 打印出时间对象
                        seconds: time % 60,
                        minutes: Math.floor(time / 60) % 60,
                        hours: Math.floor(time / 60 / 60) % 24,
                        days: Math.floor(time / 60 / 60 / 24),
                        weeks: Math.floor(time / 60 / 60 / 24 / 7),
                        months: Math.floor(time / 60 / 60 / 24 / 30),
                        years: Math.floor(time / 60 / 60 / 24 / 365)
                    };
                    this.clocker = `${number(this.timeobj.days)} 天 
                        ${number(this.timeobj.hours)} 小时 
                        ${number(this.timeobj.minutes)} 分 
                        ${number(this.timeobj.seconds)} 秒`;
                    this.curD = `${number(this.timeobj.days)}`
                    this.curH = `${number(this.timeobj.hours)}`
                    this.curM = `${number(this.timeobj.minutes)}`
                    this.curS = `${number(this.timeobj.seconds)}`
                    if (time <= 0) { // 当时间差小于等于0的时候证明倒计时已经过结束
                        this.clocker = this.msg || "00:00:00";
                        this.curD = '00'
                        this.curH = '00'
                        this.curM = '00'
                        this.curS = '00'
                        clearInterval(go);
                    }
                };
                //此处调用函数避免前一秒倒计时不显示
                timeFunction();
                let go = setInterval(function() {
                    timeFunction();
                }, 1000);
            }, 500)
       }
    }
}
</script>

<style lang="scss" scoped>
    
</style>