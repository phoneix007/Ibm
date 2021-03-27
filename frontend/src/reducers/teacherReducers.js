import { TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_RESET } from '../constants/teacherConstants'

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
