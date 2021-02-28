import React from 'react'
import {Route , NavLink , Switch} from 'react-router-dom'
import  Style from './HomePage.module.css'

const HomePage = props =>{
    return (
        <React.Fragment>
             <h1> Teacher's Home Page</h1>
             <div className={Style.HomePage}>
             <NavLink to={`/`} activeClassName={Style.MyActive}>Unlock and Tech Sessions</NavLink>
             <NavLink to={`/Curriculums`} activeClassName={Style.MyActive}>Manage Curriculum</NavLink>
             <NavLink to={`/`} activeClassName={Style.MyActive}>View student performance</NavLink>
             </div>
        </React.Fragment>
    )
}

export default HomePage