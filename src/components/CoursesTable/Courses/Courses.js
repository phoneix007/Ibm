import React from 'react'
import Course from './Course/Course'
import * as ReactBootStrap from "react-bootstrap";


const Courses = props => {
    return (
        <ReactBootStrap.Table striped bordered hover>
        <thead>
            <tr>
                <th>Course</th>
            <th>Duration</th>
            </tr>
        </thead>
        <tbody>
           <Course courses={props.courses}/>
        </tbody>
        </ReactBootStrap.Table>
    )
}

export default Courses