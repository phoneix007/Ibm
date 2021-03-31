import { TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL } from '../constants/teacherConstants'
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