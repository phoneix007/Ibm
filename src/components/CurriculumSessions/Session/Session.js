import React from 'react'
import Style from './Session.module.css'


const Session = props =>{
    return (
    <tr>
        <td><a href="/">{props.session}</a></td>
        <td>{props.status}</td>
    </tr>
    )
}

export default Session