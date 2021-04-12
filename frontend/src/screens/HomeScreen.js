import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DropDown from '../components/DropDown'

export const HomeScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading,error, userInfo, userRole } = userLogin

    useEffect(()=> {
        if(!userInfo) {
            history.push('/login')
        }
        
    }, [dispatch, history, userRole, userInfo])

    return (
        <>
            <h1 style={{"text-align": "center"}}>Dashboard</h1>
            { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
            <div>
                <DropDown Role={userRole}/>
                <h1 style={{"text-align": "center"}}>Welcome to smart kaksha..</h1>
                <h1 style={{"text-align": "center"}}>{userRole} Dashboard</h1>
            </div> }
        </>
    ) 
}

export default HomeScreen