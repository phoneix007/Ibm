import { CONTENT_REQUEST, CONTENT_SUCCESS, CONTENT_FAIL } from '../constants/contentConstants'
import axios from 'axios'

export const contentDetails = (ct_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: CONTENT_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/content', {ct_id}, config)
        dispatch({ type: CONTENT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: CONTENT_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}