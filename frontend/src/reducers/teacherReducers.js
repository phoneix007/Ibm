import { TEACHER_COURSES_FAIL,TEACHER_COURSES_SUCCESS,TEACHER_COURSES_REQUEST,TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_RESET } from '../constants/teacherConstants'

export const teacherCohortReducer = (state={ TeacherInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COHORT_REQUEST:
            return { loading: true, TeacherInfo: [] }
        case TEACHER_COHORT_SUCCESS:
            return { loading: false, TeacherInfo: action.payload }
        case TEACHER_COHORT_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_RESET:
            return []
        default:
            return state
    }
}
export const teacherCoursesReducer = (state={ CourseInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COURSES_REQUEST:
            return { loading: true, CoursesInfo: [] }
        case TEACHER_COURSES_SUCCESS:
            return { loading: false, CoursesInfo: action.payload }
        case TEACHER_COURSES_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

