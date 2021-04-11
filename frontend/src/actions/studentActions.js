import { TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL } from '../constants/teacherConstants'
import axios from 'axios'


export const coursesDetails = (st_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COURSES_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }
        console.log(`st_id:${st_id}`)
        const { data } = await axios.post('/api/student/courses', {st_id}, config)
        dispatch({ type: TEACHER_COURSES_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COURSES_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const studentsessionDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSIONS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/student/sessions', {co_id}, config)
        dispatch({ type: TEACHER_SESSIONS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSIONS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const sessionSectionDetails = (sp_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSION_SECTIONS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/sections', {sp_id}, config)
        dispatch({ type: TEACHER_SESSION_SECTIONS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSION_SECTIONS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}