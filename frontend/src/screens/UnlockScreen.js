import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { cohortDeatils } from '../actions/teacherActions'
import { setTemp } from '../actions/urlActions'
import DropDown from '../components/DropDown'
import { courseDetails } from '../actions/teacherActions'
import { TEACHER_COURSES_RESET } from '../constants/teacherConstants'

export const UnlockScreen = ({ history }) => {
    const dispatch = useDispatch()

    const teacherCohort = useSelector(state => state.teacherCohort)
    const { loading, error, TeacherInfo } = teacherCohort

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const courseDetail = useSelector(state => state.teacherCourses)
    const { loading: courseLoading = false, CoursesInfo, error: courseError } = courseDetail

    useEffect(()=> {
        if(userInfo && userRole === 'Teacher') {
            dispatch(cohortDeatils(userInfo.TC_id))
            dispatch({ type: TEACHER_COURSES_RESET })
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, userRole, userInfo])

    const click=(key_id,destination,destination_var)=>{
        
        dispatch(setTemp(destination_var, key_id))
        history.push(destination)
    }


    const cohortItems = error ? null : TeacherInfo.map(key => (
        <option value={[key.CU_id, key.CH_id]}>{key.CH_Name}</option>
    ));
        
    const displayCourses = (val) => {
        dispatch(setTemp('cohortID', parseInt(val[2])))
        dispatch(courseDetails(val[0]))
    }

    return (
        <>
            <h1 style={{"text-align": "center"}}>Unlock Session</h1>
            { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
                <div>
                    <DropDown Role={userRole}/>
                    <div style={{margin: "3% 20%", width: "60%", justifyContent: "center"}}>
                        <label style={{"margin-right": "5px"}}>
                            Select Cohort: 
                        <select onChange={(e) => displayCourses(e.target.value)} style={{"margin": "5px 5px"}}>
                        <option value="none" selected disabled hidden>
                            ---
                        </option>
                            {cohortItems}
                        </select>
                        </label>
                    </div>
                    { courseLoading ? (<Loader>Loading....</Loader>) : courseError ? <Message variant='danger'>{courseError}</Message> :
                        <div>
                            <Table striped bordered hover borderless style={{margin: "1% 20%", width: "60%", justifyContent: "center"}}>
                                <thead>
                                    <tr>
                                        <th>SELECT COURSE</th>
                                        <th>INSERT DATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CoursesInfo.map((key, index) => 
                                    <tr style={{"cursor":"pointer"}} onClick={() =>click(key.CO_id,"/unlocksessions",'sessionUrl') }  key={key.CO_id}>
                                        <td>{key.CO_Name}</td>
                                        <td>{key.CO_Insertdate === null ?  `${key.CO_Insertdate}` : key.CO_Insertdate}</td>
                                    </tr>
                                    )}
                                </tbody> 
                            </Table> 
                        </div> 
                        }
                </div>
            }
        </>
    ) 
}

export default UnlockScreen