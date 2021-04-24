import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

export const DropDown = ({ Role }) => {
    return ( 
            Role === "Teacher" ? 
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={`/home`}>Dashboard</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={`/unlock`}>Unlock and Teach Session</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={`/cohort`}>Mangage Curriculum</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Conduct Assessment</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">View students’ performance</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> : 
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={`/homestd`}>Dashboard</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={`/courses`}>View curriculum</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={`/qna`}>Q&A Section</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3">View your performance</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Attending session</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        
    )
}

export default DropDown