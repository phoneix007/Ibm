import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { coursesDeatils } from '../actions/teacherActions'

export const CoursesScreen = ({ history , match }) => {
    const dispatch = useDispatch()

    const teacherCohort = useSelector(state => state.teacherCohort)
    const {  TeacherInfo } = teacherCohort

    const teacherCourses = useSelector(state => state.teacherCourses)
    const { loading ,error, CoursesInfo } = teacherCourses
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin
    

    useEffect(()=> {
        console.log(`params..:${match.params.id}`)
        if(TeacherInfo && role === 'Teacher') {
            dispatch(coursesDeatils(match.params.id))
        }
        
        
        else {
            history.push('')
        }
        

    }, [dispatch, history, role, userInfo])


    return (
        <>
        <h1>Courses</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
                <th>Courses ID</th>
                <th>Courses NAME</th>
                <th>INSERT DATE</th>
            </tr>
        </thead>
       {/* <tbody>
            {CoursesInfo.map((key, index) => 
            <tr key={key.CH_id}>
            <td>{key.CH_id}</td>
            <Link to='/Curriculums'><td>{key.CH_Name}</td></Link>
            <td>{key.CH_InsertDate.split('T')[0]}</td>
          </tr>
          )}
        </tbody> */}
    </Table> }
    </>
    ) 
}

export default CoursesScreen