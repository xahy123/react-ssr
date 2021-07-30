import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as HomeReducers } from '../containers/Home/store'

const reducer = combineReducers({
  home: HomeReducers
})
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore