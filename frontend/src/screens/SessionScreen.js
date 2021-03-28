import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionDetails } from '../actions/teacherActions'

export const SessionScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const sessionDetail = useSelector(state => state.teacherSessions)
    const { loading, SessionInfo, error } = sessionDetail

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
            dispatch(sessionDetails(match.params.id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, match, role, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Sessions</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
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
            <Link to={`/sections/${key.SP_id}`}><td>{key.SP_Name}</td></Link>
            <td>{key.SP_Duration === null ?  `${key.SP_Duration}` : key.SP_Duration}</td>
          </tr>
          )}
        </tbody>
    </Table> }
    </>
    ) 
}

export default SessionScreen