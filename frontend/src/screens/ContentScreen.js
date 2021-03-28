import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Pdfviewer from '../components/pdfview'
import { contentDetails } from '../actions/contentActions'


const child = {
    background: "black",
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, 10%)",
}


export const ContentScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const contentDetail = useSelector(state => state.content)
    const { loading, ContentInfo, error } = contentDetail

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
            dispatch(contentDetails(match.params.id))
        }
        else {
            history.push('/login') 
        }
    }, [dispatch, history, match, role, userInfo])


    return (
        <>
         {loading === false ? error ? <Message variant='danger'>{error}</Message> :  <div>
                {ContentInfo[0].CT_Type === "V" ? <ReactPlayer url={ContentInfo[0].CT_ContentLink} controls style={child}/> : <Pdfviewer url={ContentInfo[0].CT_ContentLink} /> }
            </div> : <Loader></Loader>}
        </>
    ) 
}

export default ContentScreen