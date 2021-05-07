import { TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL } from '../constants/teacherConstants'
import axios from 'axios'
import { FAQ_FAIL, FAQ_REQUEST, FAQ_SUCCESS} from '../constants/studentConstants'


export const coursesDetails = (st_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COURSES_REQUEST })
        const { userLogin: { userInfo, userRole } } = getState()

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                role: `${userRole}`
            }
        }
        
        const { data } = await axios.post('/api/student/courses', {st_id}, config)
        dispatch({ type: TEACHER_COURSES_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COURSES_FAIL, 
            payload: error.response && error.response.status === 401 ? error.response.status : error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const studentsessionDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSIONS_REQUEST })
        const { userLogin: { userInfo, userRole } } = getState()

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                role: `${userRole}`
            }
        }

        const { data } = await axios.post('/api/student/sessions', {co_id}, config)
        dispatch({ type: TEACHER_SESSIONS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSIONS_FAIL, 
            payload: error.response && error.response.status === 401 ? error.response.status : error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const studentqna = (question) => async(dispatch, getState) => {
    try {
        dispatch({ type: FAQ_REQUEST })
        const { userLogin: { userInfo, userRole } } = getState()

        const config = {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
                role: `${userRole}`
            }
        }

        const { data }  = await axios.post('/api/student/qna', {question}, config)
        dispatch({ type: FAQ_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: FAQ_FAIL, 
            payload: error.response && error.response.status === 401 ? error.response.status : error.response.data.message ? error.response.data.message : error.message
        })
    }
}
 


