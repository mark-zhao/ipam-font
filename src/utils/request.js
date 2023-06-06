import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken, setToken } from '@/utils/auth'
import router from '../router'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)


// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        // if the custom code is not 401, it is judged as an error.
        // console.log(response.status)
        // if (response.status === 401 || response.status === 403) {
        //     // 401: Token expired;
        //     router.push({
        //         path: '/login',
        //         // 拿到当前页面完成路径包括参数,再跳转过去
        //     }).catch(err => console.log(err))
        //     return Promise.reject(new Error(res.message || 'Error'))
        // }
        return response
    },
    error => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                router.replace({
                    name: 'login'
                })
            }
        }
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)


export default service