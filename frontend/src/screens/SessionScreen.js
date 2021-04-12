import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { sessionDetails, sessionStatusDetails } from '../actions/teacherActions'
import { studentsessionDetails } from '../actions/studentActions'
import { setTemp } from '../actions/urlActions'

export const SessionScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const sessionDetail = useSelector(state => state.teacherSessions)
    const { loading, SessionInfo, error } = sessionDetail

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

    const SessionStatus = useSelector(state => state.teacherSessionStatus)
    const { loading: statusLoading, SessionStatusInfo, error: err } = SessionStatus

    const checkStatus = (key) => {
        let s = SessionStatusInfo.length
        for(let i = 0; i < s; i++) if(SessionStatusInfo[i].SP_id === key) return true
        return false
    }

    useEffect(()=> {
        if(userInfo && userRole === "Teacher") {
            dispatch(sessionDetails(urlParameter.sessionUrl))
            dispatch(sessionStatusDetails(urlParameter.sessionUrl))
        }
        else if(userInfo && userRole === "Student") {
            dispatch(studentsessionDetails(urlParameter.sessionUrl))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, urlParameter, userInfo, userRole])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Sessions</h1>
        { loading || statusLoading ? (<Loader>Loading....</Loader>) : error || err ? <Message variant='danger'>{error || err}</Message> :
         <div>
            <DropDown Role={userRole}/>
            <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
                <thead>
                    <tr>
                        <th>SESSION ID</th>
                        <th>SESSION NAME</th>
                        <th>SESSION DURATION</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {SessionInfo.map((key, index) => 
                        <tr key={key.SP_id}>
                            <td>{key.SP_id}</td>
                            <td>{key.SP_Name}</td>
                            <td>{key.SP_Duration === null ?  `${key.SP_Duration}` : key.SP_Duration}</td>
                            {
                                userRole === "Teacher" ? checkStatus(key.SP_id) ? <Link to={`/sections`} onClick={() => dispatch(setTemp('sectionUrl', key.SP_id))}><td>View</td></Link> : <td>Locked</td> :
                                <Link to={`/sections`} onClick={() => dispatch(setTemp('sectionUrl', key.SP_id))}><td>View</td></Link>
                            }
                        </tr>)
                    }
                </tbody>
            </Table>
    </div> }
    </>
    ) 
}

export default SessionScreen