<template>
<div>
    <div class="search">
        <!-- <Search :serversData="datas" @onSubmit="getdata($event)"/> -->
        <Search  @releaseIP="releaseIP($event)" @markIP="markIP($event)" />
    </div>
    <div>
        <ReleaseIP ref="ReleaseIP"/>
    </div>
</div>
</template>

<script>
import Search from './SearchItem'
import ReleaseIP from './ReleaseIP'
export default {
    components: {
        Search,
        ReleaseIP
    },
    methods: {
        releaseIP(e) {
            //this.$refs.child.$emit('childMethod','发送给方法一的数据') // 方法1:触发监听事件
            this.$refs.ReleaseIP.releaseIP(e) // 方法2:直接调用
        },
        markIP(e) {
            this.$refs.ReleaseIP.markIP(e) 
        }
    }
}
</script>

<style>

</style>