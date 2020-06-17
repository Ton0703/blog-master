import * as TYPES from '../types'
const initialState = {
    token: ''
}

export default function UserReducer(state = initialState, action) {
    const {type ,payload} = action
    switch(type){
        case TYPES.USER_LOGIN:
            return {...state, token: payload}
        default:
            return state
    }

  }