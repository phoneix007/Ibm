import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { courseDetails } from '../actions/teacherActions'

export const CourseScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const courseDetail = useSelector(state => state.teacherCourses)
    const { loading, CoursesInfo, error } = courseDetail

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
            dispatch(courseDetails(match.params.id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, match, role, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Courses</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
                <th>COURSE ID</th>
                <th>COURSE NAME</th>
                <th>INSERT DATE</th>
            </tr>
        </thead>
        <tbody>
            {CoursesInfo.map((key, index) => 
            <tr key={key.CO_id}>
            <td>{key.CO_id}</td>
            <Link to={`/sessions/${key.CO_id}`}><td>{key.CO_Name}</td></Link>
            <td>{key.CO_Insertdate === null ?  `${key.CO_Insertdate}` : key.CO_Insertdate}</td>
          </tr>
          )}
        </tbody>
    </Table> }
    </>
    ) 
}

export default CourseScreen