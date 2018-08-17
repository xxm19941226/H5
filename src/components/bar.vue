<template>
    <div class="progress-bar">
        <div class="gobal-bar">
            <div class="float-l cur-gobal-bar" :style="{width: percentage + '%'}">
                <div class="bar-animation"><i class="gobal-bar-btn"></i></div>
            </div>
            <!-- <div class="float-l rest-gobal-bar" :style="{width: (100 - percentage) + '%'}"></div> -->
        </div>
    </div>
</template>
<script>

export default {
    props: ['percentage'],
    data () {
        return {
            
        }
    },
    created () {
        
    },
    mounted () {
       
    },
    watch: {

    },
    computed: {
        
    },
    methods: {
       
    }
}
</script>

<style lang="scss" scoped>
    .progress-bar {
        width: 1.37rem;
        height: .16rem;
        box-sizing: border-box;

        .gobal-bar {
            position: relative;
            width: 100%;
            height: 100%;
            left: 0;
            box-sizing: border-box;
            font-size: .1rem;
            background: #383737;
            border-radius: .08rem;

            .cur-gobal-bar {
                position: relative;
                left: 0;
                color: #fff;
                width: auto;
                height: 100%;
                line-height: 100%;
                text-align: center;
                border-radius: .08rem;

                .bar-animation {
                    position: relative;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    animation: bar 3s;
                    background: #52ceff;
                    border-radius: .08rem 0 0 .08rem;
                }
            }

            .rest-gobal-bar {
                position: relative;
                color: #fe4671;
                width: auto;
                height: 100%;
                line-height: 100%;
                text-align: center;
            }

            // .gobal-bar-btn {
            //     position: absolute;
            //     right: -.57rem;
            //     top: -.4rem;
            //     width: 1.14rem;
            //     height: 1.14rem;                              
            //     background: url('https://cdn.gulugulu.cn/event/h5_release/dragonBoatFestival/img/cur_bar_btn.png') no-repeat;
            //     background-size: 100% 100%;
            // }
        }
    }

    @keyframes bar {
        0% {
            width: 0;
        }
        50% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
</style>