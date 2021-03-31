import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { cohortDeatils } from '../actions/teacherActions'

export const CohortScreen = ({ history }) => {
    const dispatch = useDispatch()

    const teacherCohort = useSelector(state => state.teacherCohort)
    const { loading, error, TeacherInfo } = teacherCohort

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
            dispatch(cohortDeatils(userInfo.TC_id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, role, userInfo])


    return (
        <>
        <h1>Cohorts</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
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
            <Link to='/login'><td>{key.CH_Name}</td></Link>
            <td>{key.CH_InsertDate.split('T')[0]}</td>
          </tr>
          )}
        </tbody>
    </Table> }
    </>
    ) 
}

export default CohortScreen