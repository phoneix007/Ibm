import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { cohortDeatils } from '../actions/teacherActions'
import { setTemp } from '../actions/urlActions'



export const CohortScreen = ({ history }) => {
    const dispatch = useDispatch()

    const teacherCohort = useSelector(state => state.teacherCohort)
    const { loading, error, TeacherInfo } = teacherCohort

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin

    useEffect(()=> {
        if(userInfo && userRole === "Teacher") {
            dispatch(cohortDeatils(userInfo.TC_id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, userRole, userInfo])
    
    const click=(key_id,destination,destination_var)=>{
        
        dispatch(setTemp(destination_var, key_id))
        history.push(destination)
    }
      
    return (
        <>
            <h1 style={{"text-align": "center"}}>Cohorts</h1>
            { loading ? (<Loader>Loading....</Loader>) : 
            <div>
                <DropDown Role={userRole}/>
                <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
                    <thead>
                        <tr>
                            <th>COHORT ID</th>
                            <th>COHORT NAME</th>
                            <th>INSERT DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {error ? <td colspan="3"><Message variant='danger'>{error}</Message></td>:
                        TeacherInfo.map((key, index) => 
                      
                      <tr style={{"cursor":"pointer"}} onClick={() =>click(key.CU_id,"/courses",'courseUrl') } key={key.CH_id}>
                            <td>{key.CH_id}</td>
                            <td>{key.CH_Name}</td>
                            <td>{key.CH_InsertDate.split('T')[0]}</td>
                        </tr> 
                        )}
                    </tbody>
                </Table>
            </div> }
        </>
    ) 
}

export default CohortScreen