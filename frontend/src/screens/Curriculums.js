import React, { Component } from 'react'
import axios from 'axios'
import Curriculum from '../components/Curriculum/Curriculum.js'
import Style from '../components/Curriculum/Curriculum.module.css'


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
        const id = this.props.match.params.id
        return (
            <div className={Style.Curriculums}>
        <table >
         <thead>
             <tr>
                 <th>Curriculum</th>
                 <th>Insert date</th>
             </tr>
         </thead>
         <tbody>
          {this.state.curriculums ? <Curriculum  curriculums={this.state.curriculums} id={id}/> : null}
         </tbody>
         </table>
         </div>
        )
        
        
    }
}

export default Curriculums