import axios from 'axios'
import { CHANGE_NEWS_LISTS } from './constants'

export const getHomeList = () => {
  const getList = (list) => ({
    type: CHANGE_NEWS_LISTS,
    newList: list
  })
  return (dispatch, getState, axiosInstace) => {
    // http://127.0.0.1:4523/mock/244/categories
    // 浏览器运行
    // /mock/244/categories = http://localhost:3000/mock/244/categories
    // 服务器运行
    // /mock/244/categories = 服务器根目录下/mock/244/categories
    return axiosInstace.get('/mock/244/categories')
      .then(res => {
        dispatch(getList(res.data))
      })
  }
}