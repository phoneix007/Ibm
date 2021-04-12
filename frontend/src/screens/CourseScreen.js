import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { courseDetails } from '../actions/teacherActions'
import { coursesDetails } from '../actions/studentActions'
import { setTemp } from '../actions/urlActions'


export const CourseScreen = ({ history, match }) => {
    const dispatch = useDispatch() 

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const courseDetail = useSelector(state => state.teacherCourses)
    const { loading, CoursesInfo, error } = courseDetail

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

    useEffect(()=> {
        if(userInfo && userRole === "Teacher" ) {
            dispatch(courseDetails(urlParameter.courseUrl))
        }
        else if(userInfo && userRole === "Student" ) {
            dispatch(coursesDetails(urlParameter.coursesUrl))  
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, userRole, userInfo, urlParameter])


    return (
        <>
            <h1 style={{"text-align": "center"}}>Courses</h1>
            { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
            <div>
                <DropDown Role={userRole}/>
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
                            <Link to={`/sessions`} onClick={() => dispatch(setTemp('sessionUrl', key.CO_id))}><td>{key.CO_Name}</td></Link>
                            <td>{key.CO_Insertdate === null ?  `${key.CO_Insertdate}` : key.CO_Insertdate}</td>
                        </tr> )}
                    </tbody>
                </Table> 
            </div> }
        </>
    ) 
}

export default CourseScreen