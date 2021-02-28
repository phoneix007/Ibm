import React from 'react'
import Session from './../Session/Session'

const Sessions = props => {
    return (
       <tbody>
        {props.sessions.map((key) => {
            return <Session key= {key.SP_id} session={key.SP_Name} status={key.SP_id} id={key.SP_id}/>
        })}
        </tbody>
    )
}

export default Sessions