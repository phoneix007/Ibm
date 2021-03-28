import React from 'react'
import {NavLink} from 'react-router-dom'
import Style from './Curriculum.module.css'

const Curriculum = props =>{
    return (
        props.curriculums.map( key =>{
            return (
            <tr key ={key.CU_id}>
                <td><NavLink to={`/Curriculums/${key.CU_id}`} className={Style.NavLink}>{key.CU_Name}</NavLink></td>
                <td>{key.CU_Insertdate}</td>
            </tr>
            )
        })
          
    )
}

export default Curriculum 