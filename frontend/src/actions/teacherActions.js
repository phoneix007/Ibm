import { TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL, TEACHER_SESSION_STATUS_REQUEST, TEACHER_SESSION_STATUS_SUCCESS, TEACHER_SESSION_STATUS_FAIL } from '../constants/teacherConstants'
import axios from 'axios'

export const cohortDeatils = (tc_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COHORT_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('api/teachers/cohort', {tc_id}, config)
        dispatch({ type: TEACHER_COHORT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COHORT_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const courseDetails = (cu_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COURSES_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/courses', {cu_id}, config)
        dispatch({ type: TEACHER_COURSES_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COURSES_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const sessionDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSIONS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/sessions', {co_id}, config)
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

export const sessionStatusDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSION_STATUS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/getSessionStatus', {co_id}, config)
        dispatch({ type: TEACHER_SESSION_STATUS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSION_STATUS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const unlockSession = (ch_id, sp_id, co_id, tc_id, to_id) => async() => {
    console.log(ch_id)
    try {
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }
        await axios.post('/api/teachers/unlocksession', {ch_id, sp_id, co_id, tc_id, to_id}, config)
    }
    catch (error) {
        console.log("err: " +  error)
    }
}