import * as TYPES from '../types'
import axios from '../../utils/axios'

export const login = code => {
    return dispatch => axios.post('/login', {code}).then(res => {
        dispatch({
            type: TYPES.USER_LOGIN,
            payload: res.data
        })
    })
}