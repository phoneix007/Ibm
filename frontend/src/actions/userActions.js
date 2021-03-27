import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password, role) => async(dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('api/users/login', { email, password, role }, config)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data, role: role })

        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('userRole', JSON.stringify(role))

    } catch (error) {
        dispatch({ 
            type: USER_LOGIN_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('userRole')
    dispatch({ type: USER_LOGOUT })
}

