import { USER_AUTH_FAIL, USER_AUTH_REQUEST, USER_AUTH_RESET, USER_AUTH_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'

export const userLoginReducer = (state={  }, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, userRole: action.role }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userAuthReducer = (state={  }, action) => {
    switch(action.type) {
        case USER_AUTH_REQUEST:
            return { loading: true }
        case USER_AUTH_SUCCESS:
            return { loading: false, authState: true }
        case USER_AUTH_FAIL:
            return { loading: false, errorStatus: action.payload }
        case USER_AUTH_RESET:
            return {}
        default:
            return state
    }
}
