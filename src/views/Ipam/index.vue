<template>
<layout>
    <template v-slot:head>
        <Logo/>
    </template>
    <template v-slot:menu>
        <Menu/>
    </template>
    <template v-slot:main>
        <router-view />
    </template>
</layout>
</template>

<script>
import Layout from '@/components/Layout'
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'
import { getToken } from '@/utils/auth'
export default {
    components: {
        Layout,
        Logo,
        Menu
    },
    created() {
        if (getToken() === undefined) {
            this.$router.push({ path:  '/login'}).catch(err => console.log(err))
        }
    },
    methods: {
        
    }
}
     
</script>

<style>
.search {
    margin-top: 20px;
    border-bottom: 2px solid #cac7c7;
    padding-left: 10px;
}
</style>