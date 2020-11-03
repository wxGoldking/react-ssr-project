import { CHANGE_LIST } from "./constanst";
const store = {
  list: []
}

const HomeReducer = (state = store, action) => {
  switch (action.type) {
      case CHANGE_LIST:
        return {
          ...state,
          list: action.data
        }
      default:
          return state;
  }
}

export default HomeReducer;