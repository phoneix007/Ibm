import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="primary" variant= "dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        {userInfo ? (
                            <NavDropdown title={userInfo.ST_Firstname ? userInfo.ST_Firstname : userInfo.TE_FirstName} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : 
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"> </i> Login</Nav.Link>
                        </LinkContainer>}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
