import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionSectionDetails } from '../actions/teacherActions'

export const SessionSectionScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const sessionSectionDetail = useSelector(state => state.teacherSessionSection)
    const { loading, SessionSectionInfo, error } = sessionSectionDetail

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
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
    </Table> }
    </>
    ) 
}

export default SessionSectionScreen