import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { sessionSectionDetails } from '../actions/teacherActions'
import { markContentStatus, contentStatusDetails } from '../actions/studentActions'
import DropDown from '../components/DropDown'
import { setTemp } from '../actions/urlActions'

export const StudentSessionSectionScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const sessionSectionDetail = useSelector(state => state.teacherSessionSection)
    const { loading, SessionSectionInfo, error } = sessionSectionDetail

    const studentContentStatus = useSelector(state => state.studentContentStatus)
    const { loading: statusLoading, contentStatusInfo, error: statusError } = studentContentStatus

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

    const checkStatus = (key) => {
        let s = contentStatusInfo.length
        for(let i = 0; i < s; i++) if(contentStatusInfo[i].SS_id === key) return true
        return false
    }

    const setter = (CT_id, SS_id, ST_id) => {
        dispatch(setTemp('contentUrl', CT_id))
        dispatch(markContentStatus(userInfo, userRole, ST_id, SS_id, CT_id))
    }

    useEffect(()=> {
        if(userInfo) {
            dispatch(sessionSectionDetails(urlParameter.sectionUrl))
            dispatch(contentStatusDetails(userInfo.ST_id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, urlParameter, userInfo])


    return (
        <>
            <h1 style={{"text-align": "center"}}>Sections</h1>
            { loading || statusLoading ? (<Loader>Loading....</Loader>) : 
                <div>
                    <DropDown Role={userRole}/>    
                    <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
                        <thead>
                            <tr>
                                <th>SECTION ID</th>
                                <th>SECTION NAME</th>
                                <th>SECTION TYPE</th>
                                <th>SECTION DURATION</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {error || statusError ? <Message variant='danger'>{error}</Message> :
                            SessionSectionInfo.map((key, index) => 
                            <tr key={key.SS_id}>
                                <td>{key.SS_id}</td>
                                <Link to={`/content`} onClick={() => setter(key.CT_id, key.SS_id, userInfo.ST_id)}><td>{key.SS_Content}</td></Link>
                                <td>{key.SS_ContentType}</td>
                                <td>{key.SS_Duration === null ?  `${key.SS_Duration}` : key.SS_Duration}</td>
                                {checkStatus(key.SS_id) ? <td>Completed</td> : <td>Pending</td> }
                            </tr> )}
                        </tbody>
                </Table>
            </div> }
        </>
    ) 
}

export default StudentSessionSectionScreen