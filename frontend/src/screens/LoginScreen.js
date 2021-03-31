import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

export const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo, userRole } = userLogin
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=> {
        if(userInfo&&userRole==='Teacher') {
            history.push("/home")
        }
        else if(userInfo&&userRole==='Student') {
            history.push("/courses/1")
        }
    }, [history, redirect, userInfo,userRole])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password, role))
    }

    return (
        <FormContainer>
            <h1 style={{"text-align": "center"}}>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='role'>
                    <Form.Label style={{padding: "0.5rem"}} ><input required type="radio" value="Student" name="role" onChange={(e) => setRole(e.target.value)} /> Student </Form.Label>
                    <Form.Label style={{padding: "0.5rem 1rem"}} ><input required type="radio" value="Teacher" name="role" onChange={(e) => setRole(e.target.value)} /> Teacher </Form.Label>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Sign In
                </Button>
            </Form>
        </FormContainer>
    )
}

export default LoginScreen
