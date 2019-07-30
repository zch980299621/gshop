import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodTypes,
  reqShops
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类列表
  async getFoodTypes({commit}){
    //发送异步ajax请求
    const result = await reqFoodTypes()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
  },
  //异步获取商家列表
  async getShop({commit,state}){
    const {longitude,latitude} =state
    //发送异步ajax请求
    const result = await reqShops(longitude,latitude)
    if (result.code ===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }

  },
}
