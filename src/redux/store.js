import { createStore } from 'redux'


let account = {
  isAuthenicated: true
}

const accountReducer = (state=account, action) => {
  switch (action.type) {
    case 'XXX':
      break;
    default:
      return state
  }
}

const store = createStore(accountReducer)

export default store
