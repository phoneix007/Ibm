import React from 'react'
import { Component } from 'react'
import Style from './CurriculumSessions.module.css'
import Sessions from './Sessions/Sessions'


class CurriculumSessions extends Component {

    state = {Sessions : [{Session : '1' , Status:'Complete'},
                {Session : '2' , Status:'Pending'},
                {Session : '3' , Status:'Complete'}]
            } 

    render(){
        return (
            <React.Fragment>
             <div>
                 <h1> Manage Curriculum Sessions</h1>
             </div>
            <div className={Style.CurriculumSessions}>
            <table>
                <tr>
                <th>Select Sessions</th>
                <th>Status</th>
                </tr>
               <Sessions sessions={this.state.Sessions}/>
            </table>
            </div>
            </React.Fragment>
        )
    }
  
}

export default CurriculumSessions