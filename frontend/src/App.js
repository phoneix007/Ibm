import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header' 
import { Container } from 'react-bootstrap'
import CohortScreen from './screens/CohortScreen'
import LoginScreen from './screens/LoginScreen'
import Curriculum from './screens/Curriculums'
import Courses from './screens/CoursesScreen'
const  App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/cohort' component={CohortScreen} />
          <Route exact path='/Curriculums' component={Curriculum} />
          <Route exact path='/Courses/:id' component={Courses} />
        </Container>
      </main>
      
    </Router>
  )
}

export default App
