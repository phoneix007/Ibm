import React from 'react'
import {NavLink} from 'react-router-dom'

const Course = props => {
    return (
    props.courses.map(key => {
        return (
            <tr key={key.CO_id}>
           <NavLink to={`Session${key.CO_id}`}> <td>{key.CO_Name}</td></NavLink>
            <td>{key.CO_Duration}</td>
           </tr>
           )   
    })
    )
}

export default Course