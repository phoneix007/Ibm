import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { cohortDeatils } from '../actions/teacherActions'
import { setTemp } from '../actions/urlActions'



export const CohortScreen = ({ history }) => {
    const dispatch = useDispatch()

    const teacherCohort = useSelector(state => state.teacherCohort)
    const { loading, error, TeacherInfo } = teacherCohort

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    useEffect(()=> {
        if(userInfo && userRole === "Teacher") {
            dispatch(cohortDeatils(userInfo.TC_id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, userRole, userInfo])

      
    return (
        <>
            <h1 style={{"text-align": "center"}}>Cohorts</h1>
            { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
            <div>
                <DropDown Role={userRole}/>
                <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
                    <thead>
                        <tr>
                            <th>COHORT ID</th>
                            <th>COHORT NAME</th>
                            <th>INSERT DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TeacherInfo.map((key, index) => 
                        <tr key={key.CH_id}>
                            <td>{key.CH_id}</td>
                            <Link to={`/courses`} onClick={() => dispatch(setTemp('courseUrl', key.CU_id))}><td>{key.CH_Name}</td></Link>
                            <td>{key.CH_InsertDate.split('T')[0]}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div> }
        </>
    ) 
}

export default CohortScreen