import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'

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