import { STUDENT_CONTENT_STATUS_FAIL, STUDENT_CONTENT_STATUS_REQUEST, STUDENT_CONTENT_STATUS_RESET, STUDENT_CONTENT_STATUS_SUCCESS } from '../constants/studentConstants'


export const studentContentStatusReducer = (state={ contentStatusInfo: [] }, action) => {
    switch(action.type) {
        case STUDENT_CONTENT_STATUS_REQUEST:
            return { loading: true, contentStatusInfo: [] }
        case STUDENT_CONTENT_STATUS_SUCCESS:
            return { loading: false, contentStatusInfo: action.payload }
        case STUDENT_CONTENT_STATUS_FAIL:
            return { loading: false, error: action.payload }
        case STUDENT_CONTENT_STATUS_RESET:
            return { contentStatusInfo: [] }
        default:
            return state
    }
}