import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { studentqna } from '../actions/studentActions'
import DropDown from '../components/DropDown'


export const LoginScreen = ({ location, history }) => {
    const [question, setQuestion] = useState('')
    const [hidden, setHidden] = useState(true)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo, userRole } = userLogin

    const studentFAQ = useSelector(state => state.studentFAQ)
    const { loading: faqLoading, FAQresult, error: faqError } = studentFAQ
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=> {
        if(!userInfo && userRole !== 'Student') {
            history.push('/login')
        }
    }, [history, redirect, userInfo, userRole])


    const submitHandler = async (e) => {
        e.preventDefault()
        setHidden(false)
        dispatch(studentqna(question))
    }

    return (
        <>
        <DropDown Role={userRole}/>
        <FormContainer>
            <h1 style={{"text-align": "center"}}>FAQ Page</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='question'>
                    <Form.Label>Ask a question...</Form.Label>
                    <Form.Control required type="text" placeholder="Enter query" value={question} onChange={e => setQuestion(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </Form>
            <div className={hidden ? "d-none" : "d-block"} style={{"margin": "2%"}}>
            { faqLoading ? <Loader></Loader> : faqError ? <Message variant='danger'>{faqError}</Message> : <Message variant='success'>{FAQresult[0] ? FAQresult[0].CF_Answer : null}</Message> }
            </div>
        </FormContainer>
        </>
    )
}

export default LoginScreen
