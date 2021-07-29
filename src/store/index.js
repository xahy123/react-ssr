import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = { name: '张三' }, action) => {
  return state
}
const getStore = () => {
  return createStore(reducer)
}

export default getStore