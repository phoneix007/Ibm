import React from 'react'
import {NavLink} from 'react-router-dom'
import Style from './Curriculum.module.css'

const Curriculum = props =>{
    return (
        props.curriculums.map( key =>{
            return <NavLink to={`/Curriculums/${key.CU_id}`} key ={key.CU_id}>
            <tr>
                <td>{key.CU_Name}</td>
                <td>{key.CU_Insertdate}</td>
            </tr>
            </NavLink>
        })
          
    )
}

export default Curriculum 