<template>
<div>
    <div class="search">
        <!-- <Search :serversData="datas" @onSubmit="getdata($event)"/> -->
        <Search  @onSubmit="click($event)"/>
    </div>
    <div>
        <CidrList ref="CidrList"/>
    </div>
</div>
</template>

<script>
import Search from './SearchItem'
import CidrList from './CidrList'
export default {
    components: {
        Search,
        CidrList
    },
    methods: {
        click(e) {
                //this.$refs.child.$emit('childMethod','发送给方法一的数据') // 方法1:触发监听事件
                this.$refs.CidrList.CreateMethod(e) // 方法2:直接调用
            },
    }
}
</script>

<style>

</style>