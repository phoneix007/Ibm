import { TEACHER_TEMP_SET, TEACHER_TEMP_RESET } from '../constants/teacherConstants'

export const setTemp = (obj, tempId) => async(dispatch) => {
    let val = {
        [obj]: tempId
    }
    try {
        dispatch({ type: TEACHER_TEMP_SET, payload: val })
        localStorage.setItem('urlParameter', JSON.stringify(val))

    } catch (error) {
        dispatch({ 
            type: TEACHER_TEMP_RESET
        })
    }
}