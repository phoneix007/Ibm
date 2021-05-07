import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { setTemp } from '../actions/urlActions'
import { markContentStatus, sessionSectionDetails, contentStatusDetails } from '../actions/teacherActions'

export const TeacherSessionSectionScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    const sessionSectionDetail = useSelector(state => state.teacherSessionSection)
    const { loading, SessionSectionInfo, error } = sessionSectionDetail

    const teacherContentStatus = useSelector(state => state.teacherContentStatus)
    const { loading: statusLoading, contentStatusInfo, error: statusError } = teacherContentStatus

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

    const checkStatus = (key) => {
        let s = contentStatusInfo.length
        for(let i = 0; i < s; i++) if(contentStatusInfo[i].SS_id === key) return true
        return false
    }

    const setter = (CT_id, SS_id, SP_id, TP_id, TC_id) => {
        dispatch(setTemp('contentUrl', CT_id))
        dispatch(markContentStatus(userInfo, userRole, TC_id, SS_id, SP_id, TP_id))
    }

    useEffect(()=> {
        if(userInfo && userRole === 'Teacher') {
            dispatch(sessionSectionDetails(urlParameter.sectionUrl))
            dispatch(contentStatusDetails(userInfo.TC_id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, urlParameter, userInfo, userRole])
    
    const click=(CT_id,SS_id,SP_id,TP_id,TC_id,destination)=>{
        
        setter(CT_id,SS_id,SP_id,TP_id,TC_id)
        history.push(destination)
    }


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
                            {error || statusError ? <td colSpan="5"><Message variant='danger'>{error || statusError}</Message></td> :
                            SessionSectionInfo.map((key, index) => 
                            <tr style={{"cursor":"pointer"}} onClick={() =>click(key.CT_id, key.SS_id, key.SP_id, userInfo.TP_id, userInfo.TC_id,"/content") }  key={key.SS_id}>
                                <td>{key.SS_id}</td>
                                <td>{key.SS_Content}</td>
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

export default TeacherSessionSectionScreen