<template>
    <section class="page">
        <x-dialog v-model="show.dialogPic" :dialog-style="{'max-width': '100%', width: '100%', height: '5.52rem', 'background-color': 'transparent', overflow: 'initial', 'z-index': '5005'}">
            <div class="dialog-md">
                <a class="sure-btn" @click="close"></a>
            </div>
        </x-dialog>
        <loading class="loading" v-model="show.loadingStatus" :text="loadText"></loading>
    </section>
</template>
<script>
import { Loading, XDialog } from 'vux'
export default {
    components: {
        Loading,
        XDialog
    },
    data () {
        return {
            flag: true, // 防止按钮多次点击状态
            data: [],
            show: {
                loadingStatus: false,  // loading状态
                dialogPic: false // dialog状态
            },
            loadText: ' '
        }
    },
    created () {
        
    },
    mounted () {
        this.$store.commit('TOKEN',this.$route.query.token)
        this.getData()
    },
    watch: {

    },
    computed: {
       
    },
    methods: {
        getData() {
            this.show.loadingStatus = true
            // this.$http.get('/Exchange/Info?token=' + this.$store.state.token).then((response) => {
            //     console.log(response.data, 'response')
            //     response.data.data ? this.data = response.data.data : this.data = []
            //     if(response.data.code === 0) {
            //         this.show.loadingStatus = false
            //     }else {
            //         setTimeout(()=>{
            //             this.$vux.alert.show({
            //                 title: '提示',
            //                 content: res.data.msg
            //             })
            //         },100)
            //     }
            // }).catch((error) => {
            //     console.log(error)
            //     setTimeout(()=>{
            //        this.$vux.alert.show({
            //            title: '提示',
            //            content: '网络异常'
            //        })
            //    },100)
            // })
        },
        mask(type) {
            this.show.dialogPic = true           
        },
        close() {
            this.show.dialogPic = false           
        }
    }
}
</script>

<style lang="scss" scoped>
    .page {
        position: relative;
        display: table;
        width: 100%;
        height: auto;

        .float-l {
            float: left;
        }

        .float-r {
            float: right;
        }

        .dialog-md {
            position: relative;
            width: 6.43rem;
            height: 4.1rem;
            margin: 0 auto 0;
            overflow: hidden;

            .sure-btn {
                position: absolute;
                display: block;
                width: 1.7rem;
                height: .82rem;
                left: 50%;
                bottom: .05rem;
                transform: translateX(-50%);
            }
        }
    }
</style>
