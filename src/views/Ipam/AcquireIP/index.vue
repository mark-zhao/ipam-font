<template>
<div>
    <div class="search">
        <!-- <Search :serversData="datas" @onSubmit="getdata($event)"/> -->
        <Search  @onSubmit="click($event)" @onSelect="onSelect($event)" />
    </div>
    <div>
        <IPInfo ref="IPInfo"/>
    </div>
</div>
</template>

<script>
import Search from './SearchItem'
import IPInfo from './IPInfo'
export default {
    components: {
        Search,
        IPInfo
    },
    methods: {
        click(e) {
            //this.$refs.child.$emit('childMethod','发送给方法一的数据') // 方法1:触发监听事件
            this.$refs.IPInfo.AcquireIP(e) // 方法2:直接调用
            },
        onSelect(e) {
            this.$refs.IPInfo.SelectPrefixInfo(e)
        }
    }
}
</script>

<style>

</style>