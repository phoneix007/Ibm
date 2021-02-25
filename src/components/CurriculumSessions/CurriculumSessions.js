import React from 'react'
import { Component } from 'react'
import Style from './CurriculumSessions.module.css'
import Sessions from './Sessions/Sessions'
import {Switch ,Route} from 'react-router-dom'
import axios from 'axios'
import TableComponent from './../../Table'
import Content from './../content'


class CurriculumSessions extends Component {

    state = {
        Sessions : null
    }

    componentDidMount(){
        axios.get('https://ibm-sprint.herokuapp.com/course/1')
        .then(response => {
            console.log(response.data)
            this.setState({Sessions : response.data})
        })
    }
    render(){
        let MCS = (
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
               {this.state.Sessions? <Sessions sessions={this.state.Sessions}/> : null}
            </table>
            </div>
            </React.Fragment>
        )
        return (
            <Switch>
                <Route path='/content'  component={Content}>
                    
                </Route>
                <Route path="/table" component={TableComponent}>
                 
                </Route>
                 <Route path="/">
                 {MCS}
                 </Route>
            </Switch>
        )
    }
  
}

export default CurriculumSessions