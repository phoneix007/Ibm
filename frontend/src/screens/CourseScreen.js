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
import { logout } from '../actions/userActions'

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

    const click=(key_id,destination,destination_var)=>{
        
        dispatch(setTemp(destination_var, key_id))
        history.push(destination)
    }

    return (
        <>
        {error && error === 401 ? dispatch(logout()) : null}
            <h1 style={{"text-align": "center"}}>Courses</h1>
            { loading ? (<Loader>Loading....</Loader>) :
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
                    {error ? <td colspan="3"><Message variant='danger'>{error}</Message></td>:
                        CoursesInfo.map((key, index) => 
                        <tr style={{"cursor":"pointer"}} onClick={() =>click(key.CO_id,"/sessions",'sessionUrl') }  key={key.CO_id}>
                            <td>{key.CO_id}</td>
                            <td>{key.CO_Name}</td>
                            <td>{key.CO_Insertdate === null ?  `${key.CO_Insertdate}` : key.CO_Insertdate}</td>
                        </tr> )}
                    </tbody>
                </Table> 
            </div> }
        </>
    ) 
}

export default CourseScreen