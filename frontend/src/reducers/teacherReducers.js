import { TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_COHORT_RESET, TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_COURSES_RESET, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSIONS_RESET, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL, TEACHER_TEMP_SET, TEACHER_TEMP_RESET, TEACHER_SESSION_STATUS_REQUEST, TEACHER_SESSION_STATUS_SUCCESS, TEACHER_SESSION_STATUS_FAIL, TEACHER_SESSION_STATUS_RESET, TEACHER_SESSION_SECTIONS_RESET, TEACHER_CONTENT_STATUS_REQUEST, TEACHER_CONTENT_STATUS_SUCCESS, TEACHER_CONTENT_STATUS_FAIL,TEACHER_CONTENT_STATUS_RESET } from '../constants/teacherConstants'

export const teacherCohortReducer = (state={ TeacherInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COHORT_REQUEST:
            return { loading: true, TeacherInfo: [] }
        case TEACHER_COHORT_SUCCESS:
            return { loading: false, TeacherInfo: action.payload }
        case TEACHER_COHORT_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_COHORT_RESET:
            return { TeacherInfo: [] }
        default:
            return state
    }
}

export const teacherCoursesReducer = (state={ CoursesInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COURSES_REQUEST:
            return { loading: true, CoursesInfo: [] }
        case TEACHER_COURSES_SUCCESS:
            return { loading: false, CoursesInfo: action.payload }
        case TEACHER_COURSES_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_COURSES_RESET:
            return { CoursesInfo: [] }
        default:
            return state
    }
}

export const teacherSessionsReducer = (state={ SessionInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_SESSIONS_REQUEST:
            return { loading: true, SessionInfo: [] }
        case TEACHER_SESSIONS_SUCCESS:
            return { loading: false, SessionInfo: action.payload }
        case TEACHER_SESSIONS_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_SESSIONS_RESET:
            return { SessionInfo: [] }
        default:
            return state
    }
}

export const teacherSessionSectionReducer = (state={ SessionSectionInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_SESSION_SECTIONS_REQUEST:
            return { loading: true, SessionSectionInfo: [] }
        case TEACHER_SESSION_SECTIONS_SUCCESS:
            return { loading: false, SessionSectionInfo: action.payload }
        case TEACHER_SESSION_SECTIONS_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_SESSION_SECTIONS_RESET:
            return { SessionSectionInfo: [] }
        default:
            return state
    }
}

export const teacherTempReducer = (state={ urlParameter: {} }, action) => {
    switch(action.type) {
        case TEACHER_TEMP_SET:
            localStorage.setItem('urlParameter', JSON.stringify({...state.urlParameter, [action.obj]: action.payload }))
            return { urlParameter: {...state.urlParameter, [action.obj]: action.payload }}
        case TEACHER_TEMP_RESET:
            return { urlParameter: {} }
        default:
            return state
    }
}

export const teacherSessionStatusReducer = (state={ SessionStatusInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_SESSION_STATUS_REQUEST:
            return { loading: true, SessionStatusInfo: [] }
        case TEACHER_SESSION_STATUS_SUCCESS:
            return { loading: false, SessionStatusInfo: action.payload }
        case TEACHER_SESSION_STATUS_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_SESSION_STATUS_RESET:
            return { SessionStatusInfo: [] }
        default:
            return state
    }
}
export const teacherContentStatusReducer = (state={ contentStatusInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_CONTENT_STATUS_REQUEST:
            return { loading: true, contentStatusInfo: [] }
        case TEACHER_CONTENT_STATUS_SUCCESS:
            return { loading: false, contentStatusInfo: action.payload }
        case TEACHER_CONTENT_STATUS_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_CONTENT_STATUS_RESET:
            return { contentStatusInfo: [] }
        default:
            return state
    }
}