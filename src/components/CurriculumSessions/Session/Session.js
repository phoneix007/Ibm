import React from 'react'
import Style from './Session.module.css'
import {Link} from 'react-router-dom'


const Session = props =>{
    return (
        <tr>
        <td><Link to={`session/${props.id}`}>{props.session}</Link></td>
        <td>{props.status}</td>
    </tr>
    )
}

export default Session