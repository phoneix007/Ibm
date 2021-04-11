import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionDetails } from '../actions/teacherActions'
import { studentsessionDetails } from '../actions/studentActions'

import Dropdown from 'react-bootstrap/Dropdown'
import { setTemp } from '../actions/urlActions'

export const SessionScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const sessionDetail = useSelector(state => state.teacherSessions)
    const { loading, SessionInfo, error } = sessionDetail

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

    useEffect(()=> {
        if(userInfo && userRole === 'Teacher') {
            dispatch(sessionDetails(urlParameter.sessionUrl))
        }
        else if(userInfo && userRole === 'Student')
        {
            dispatch(studentsessionDetails(urlParameter.sessionUrl))
            
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, urlParameter, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Sessions</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
         <div>
        
                <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
        </Dropdown.Toggle>
        
        {
            userRole === 'Student'?
            <Dropdown.Menu show>
            <Dropdown.Item ><Link to={`/homestd`}>Dashboard</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`/courses`}> View your performance</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-3">View curriculum</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Attending session</Dropdown.Item>
            </Dropdown.Menu>
            :
            <Dropdown.Menu show>
            <Dropdown.Item ><Link to={`/home`}>Dashboard</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`/unlock`}>Unlock and Teach Session</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`/cohort`}>Mangage Curriculum</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-3">Conduct Assessment</Dropdown.Item>
            <Dropdown.Item href="#/action-1">View students’ performance</Dropdown.Item>
            </Dropdown.Menu>
            
        }
        </Dropdown>
        
        <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
                <th>SESSION ID</th>
                <th>SESSION NAME</th>
                <th>SESSION DURATION</th>
            </tr>
        </thead>
        <tbody>
            {SessionInfo.map((key, index) => 
            <tr key={key.SP_id}>
            <td>{key.SP_id}</td>
            <Link to={`/sections`} onClick={() => dispatch(setTemp('sectionUrl', key.SP_id))}><td>{key.SP_Name}</td></Link>
            <td>{key.SP_Duration === null ?  `${key.SP_Duration}` : key.SP_Duration}</td>
          </tr>
          )}
        </tbody>
    </Table>
    </div> }
    </>
    ) 
}

export default SessionScreen