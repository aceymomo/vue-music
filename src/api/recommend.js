import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'


export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        outCharset: 'utf-8',
        loginUin: 0,
        hostUin: 0,
        needNewCode: 0,
    })
    return jsonp(url, data, options)
}

export function getListcode() {
    const url = '/api/getDiscList'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        outCharset: 'utf-8',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}


export function getResolve() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        outCharset: 'GB2312',
        loginUin: 0,
        hostUin: 0,
        needNewCode: 0,
        cmd: 'shoubo',
        lan: 'all'
    })
    return jsonp(url, data, options)
}