import { CHANGE_NEWS_LISTS } from "./constants"

const defaultState = {
  newList: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_NEWS_LISTS:
      return {
        ...state,
        newList: action.newList
      }
    default:
      return state
  }
}