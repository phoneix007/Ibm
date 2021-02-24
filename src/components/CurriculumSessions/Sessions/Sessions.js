import React from 'react'
import Session from './../Session/Session'

const Sessions = props => {
    return (
        props.sessions.map((key) => {
            return <Session key= {key.Session + key.Status} session={key.Session} status={key.Status}/>
        })
    )
}

export default Sessions