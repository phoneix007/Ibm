import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionSectionDetails } from '../actions/teacherActions'
import Dropdown from 'react-bootstrap/Dropdown'

export const SessionSectionScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const sessionSectionDetail = useSelector(state => state.teacherSessionSection)
    const { loading, SessionSectionInfo, error } = sessionSectionDetail

    useEffect(()=> {
        if(userInfo) {
            dispatch(sessionSectionDetails(match.params.id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, match, role, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Sections</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        
        <div>
        
                <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
        </Dropdown.Toggle>
        
        <Dropdown.Menu show>
            <Dropdown.Item href="#/action-1">Unlock and Teach Sessions</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Manage Curriculum</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Conduct Assessment</Dropdown.Item>
            <Dropdown.Item href="#/action-1">View students’ performance</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
                <th>SECTION ID</th>
                <th>SECTION NAME</th>
                <th>SECTION TYPE</th>
                <th>SECTION DURATION</th>
            </tr>
        </thead>
        <tbody>
            {SessionSectionInfo.map((key, index) => 
            <tr key={key.SS_id}>
            <td>{key.SS_id}</td>
            <Link to={`/content/${key.CT_id}`}><td>{key.SS_Content}</td></Link>
            <td>{key.SS_ContentType}</td>
            <td>{key.SS_Duration === null ?  `${key.SS_Duration}` : key.SS_Duration}</td>
          </tr>
          )}
        </tbody>
    </Table></div> }
    </>
    ) 
}

export default SessionSectionScreen