import React from 'react'
import Style from './Curriculum.module.css'

const Curriculum = props =>{
    return (
        <div className={Style.Curriculum}>
        <table>
         <thead>
             <tr>
                 <th>Curriculum</th>
                 <th>Insert date</th>
             </tr>
         </thead>
         <tbody>
          {props.curriculums.map(key =>{
              return (
                  <tr key ={key.CU_id}>
                   <td>{key.CU_Name}</td>   
                   <td>{key.CU_Insertdate}</td>
                  </tr>
              )
          })}
         </tbody>
        </table>
        </div>
    )
}

export default Curriculum 