import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionSectionDetails } from '../actions/teacherActions'
import Dropdown from 'react-bootstrap/Dropdown'
import { setTemp } from '../actions/urlActions'

export const SessionSectionScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const sessionSectionDetail = useSelector(state => state.teacherSessionSection)
    const { loading, SessionSectionInfo, error } = sessionSectionDetail

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar


    useEffect(()=> {
        if(userInfo) {
            dispatch(sessionSectionDetails(urlParameter.sectionUrl))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, urlParameter, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Sections</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        
        <div>
        
                <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
        </Dropdown.Toggle>
        
        {
            userRole==='Student'?
            <Dropdown.Menu show>
            <Dropdown.Item ><Link to={`/homestd`}>Dashboard</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`/courses`}> View your performance</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-3">View curriculum</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Attending session</Dropdown.Item>
            </Dropdown.Menu>
            :
            <Dropdown.Menu show>
            <Dropdown.Item ><Link to={`/home`}>Dashboard</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`/cohort`}>View Curriculum</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-3">Conduct Assessment</Dropdown.Item>
            <Dropdown.Item href="#/action-1">View students’ performance</Dropdown.Item>
            </Dropdown.Menu>
            
        }
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
            <Link to={`/content`} onClick={() => dispatch(setTemp('contentUrl', key.CT_id))}><td>{key.SS_Content}</td></Link>
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