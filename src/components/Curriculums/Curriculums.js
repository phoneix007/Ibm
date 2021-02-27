import React, { Component } from 'react'
import axios from 'axios'
import Curriculum from './Curriculum/Currriculum'

class Curriculums extends Component{

    state ={
        curriculums : null
    }

    componentDidMount(){
        axios.get('https://ibm-sprint.herokuapp.com/curriculum/')
        .then(response =>{
            this.setState({curriculums:response.data})
        }).catch(err => {
            console.log(err)
        })

    }

    render(){

        return (
            <div>
              {this.state.curriculums ? <Curriculum curriculums={this.state.curriculums}/> :null}
            </div>
        )
        
        
    }
}

export default Curriculums
