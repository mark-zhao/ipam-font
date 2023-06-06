import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Cookies from 'js-cookie'
import 'element-ui/lib/theme-chalk/index.css'
import './icons' // icon
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

// if (process.env.NODE_ENV === 'production') {
//     const { mockXHR } = require('../mock')
//     mockXHR()
//   }

Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    //locale: enLang // 如果使用中文，无需设置，请删除
});
Vue.config.productionTip = false


new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})