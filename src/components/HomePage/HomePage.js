import React from 'react'
import {Route , NavLink , Switch} from 'react-router-dom'
import  Style from './HomePage.module.css'

const HomePage = props =>{
    return (
        <React.Fragment>
             <h1> Teacher's Home Page</h1>
             <NavLink to={`/`}><div>Unlock and Tech Sessions</div></NavLink>
             <NavLink to={`/Curriculums`}><div>Manage Curriculum</div></NavLink>
             <NavLink to={`/`}><div>View student performance</div></NavLink>
        </React.Fragment>
    )
}

export default HomePage