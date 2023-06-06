import request from '@/utils/request'
import qs from 'qs'

export default {
    getCidrsList() {
        return request({
            url: '/api/v1/ipam/CidrsList',
            method: 'get'
        })
    },

    getCidrsInfo() {
        return request({
            url: '/api/v1/ipam/CidrsInfo',
            method: 'get'
        })
    },

    createCidr(data) {
        let url = '/api/v1/ipam/CreatePrefix'
        return request({
            url: url,
            method: 'post',
            data
        })
    },
    AcquireIP(data) {
        let url = '/api/v1/ipam/AcquireIP'
        return request({
            url: url,
            method: 'post',
            data
        })
    },
    SelectPrefixInfo(data) {
        let url = '/api/v1/ipam/GetPrefix'
        return request({
            url: url,
            method: 'post',
            data
        })
    },
    ReleaseIPs(data) {
        let url = '/api/v1/ipam/ReleaseIP'
        return request({
            url: url,
            method: 'post',
            data
        })
    },
    MarkIPs(data) {
        let url = '/api/v1/ipam/MarkSpecificIPs'
        return request({
            url: url,
            method: 'post',
            data
        })
    },
    DeletePrefix(data) {
        let url = '/api/v1/ipam/DeletePrefix'
        return request({
            url: url,
            method: 'post',
            data
        })
    }
}