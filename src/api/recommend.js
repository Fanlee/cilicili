import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export const getRecommend = () => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0
  })

  return jsonp(url, data, options)
}