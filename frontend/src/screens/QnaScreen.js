import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { studentqna } from '../actions/studentActions'
import DropDown from '../components/DropDown'
import Alert from 'react-bootstrap/Alert'
export const LoginScreen = ({ location, history }) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo, userRole } = userLogin
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=> {
        
       
    }, [history, redirect, userInfo, userRole])


    const submitHandler = (e) => {
        e.preventDefault()
       
        dispatch(studentqna(question,userInfo, userRole)).then((a) => {
            
            setAnswer(a.CF_Answer)
            console.log(answer);
          });
        //console.log(studentqna(question,userInfo, userRole)).then(result => result.data);
    }

    return (
        <>
        <DropDown Role={userRole}/>
               
        <FormContainer>
            <h1 style={{"text-align": "center"}}>Q&A Section</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
            
                <Form.Group controlId='question'>
                    <Form.Label>Ask any question..</Form.Label>
                    <Form.Control  value={question} onChange={e => setQuestion(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="success">Submit</Button>
           
            </Form>
        </FormContainer>
        {answer?(
        <Alert variant="success">
        <h4>Your query result:</h4>
        <p>
          {answer}
        </p>
        <hr />
        
      </Alert>
        ):<div></div>}
        </>
    )
}

export default LoginScreen
