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


export const ContentScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, userRole } = userLogin


    const contentDetail = useSelector(state => state.content)
    const { loading, ContentInfo, error } = contentDetail

    const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar


    useEffect(()=> {
        if(userInfo && (userRole === "Teacher" || userRole === "Student")) {
            dispatch(contentDetails(urlParameter.contentUrl))
        }
        else {
            history.push('/login') 
        }
    }, [dispatch, history, urlParameter, userInfo, userRole])



    return (
        <>
         {loading === false ? error ? <Message variant='danger'>{error}</Message> :  <div>
                {ContentInfo[0].CT_Type === "V" ? <ReactPlayer url={ContentInfo[0].CT_ContentLink} controls style={child}/> : <Pdfviewer url={ContentInfo[0].CT_ContentLink} /> }
            </div> : <Loader></Loader>}
        </>
    ) 
}

export default ContentScreen