import React, { Component } from 'react'
import axios from 'axios'
import Courses from './Courses/Courses'
import {Switch,Route} from 'react-router-dom'

    class CourseTable extends Component {
    
    state = {
        courses : null

        
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        
        axios.get(`https://ibm-sprint.herokuapp.com/curriculum/courses/${id}`)
        .then( response => {
            this.setState({courses : response.data})
        }).catch(err => {   
            console.log(err)
        })

    }

    render(){
     

    return(
        <div>
            { this.state.courses ? <Courses courses={this.state.courses}/> : null }
       </div>    
    )
 }
}

export default CourseTable


