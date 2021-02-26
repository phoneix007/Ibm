import React from 'react'
import { Component } from 'react'
import Style from './CurriculumSessions.module.css'
import Sessions from './Sessions/Sessions'
import axios from 'axios'
import {Route , Switch} from 'react-router-dom'
import TableComponent from './../../Table'
import Content from './../content'

class CurriculumSessions extends Component {
    state = {
        Sessions : null
    }
     componentDidMount(){

       axios.get('https://ibm-sprint.herokuapp.com/course/1')
       .then(response => {
           this.setState({Sessions: response.data})
       }).catch(err => {
           console.log(err)
       })
     } 

    render(){
         let MCS =( <React.Fragment>
            <div>
                <h1> Manage Curriculum Sessions</h1>
            </div>
           <div className={Style.CurriculumSessions}>
           <table>
               <thead>
               <tr>
               <th>Select Sessions</th>
               <th>Status</th>
               </tr>
               </thead>
              {this.state.Sessions ? <Sessions sessions={this.state.Sessions}/>: null}
           </table>
           </div>
           </React.Fragment>)

        return (
            <Switch>
            <Route path='/' exact >
                {MCS}
            </Route>
            <Route path ='/S-Sections/:id' exact component={TableComponent}/>
            <Route path='/content' exact component={Content}/> 
            </Switch>
           
               
        )
    }
  
}

export default CurriculumSessions