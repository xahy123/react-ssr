import axios from 'axios'
import { CHANGE_NEWS_LISTS } from './constants'

export const getHomeList = () => {
  const getList = (list) => ({
    type: CHANGE_NEWS_LISTS,
    newList: list
  })
  return (dispatch) => {
    return axios.get('http://127.0.0.1:4523/mock/244/news')
      .then(res => {
        dispatch(getList(res.data.items))        
      })
  }
}