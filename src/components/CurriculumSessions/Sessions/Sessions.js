import React from 'react'
import Session from './../Session/Session'

const Sessions = props => {
    return (
        props.sessions.map((key) => {
            return <Session key= {key.SP_id} session={key.SP_Name} status={key.SP_id}/>
        })
    )
}

export default Sessions