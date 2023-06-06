<template>
<div>
    <div class="search">
        <!-- <Search :serversData="datas" @onSubmit="getdata($event)"/> -->
        <Search  @onSubmit="click($event)"/>
    </div>
    <div>
        <DeletePrefix ref="DeletePrefix"/>
    </div>
</div>
</template>

<script>
import Search from './SearchItem'
import DeletePrefix from './DeletePrefix'
export default {
    components: {
        Search,
        DeletePrefix
    },
    methods: {
        click(e) {
                //this.$refs.child.$emit('childMethod','发送给方法一的数据') // 方法1:触发监听事件
                this.$refs.DeletePrefix.DeletePrefix(e) // 方法2:直接调用
            },
    }
}
</script>

<style>

</style>