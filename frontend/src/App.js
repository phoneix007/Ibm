import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header' 
import { Container } from 'react-bootstrap'
import CohortScreen from './screens/CohortScreen'
import LoginScreen from './screens/LoginScreen'
import CourseScreen from './screens/CourseScreen'
import SessionScreen from './screens/SessionScreen'
import StudentSessionSectionScreen from './screens/StudentSessionSectionScreen'
import TeacherSessionSectionScreen from './screens/TeacherSessionSectionScreen'
import ContentScreen from './screens/ContentScreen'
import HomeScreen from './screens/HomeScreen'
import StudentHomeScreen from './screens/StudentHomeScreen'
import UnlockScreen from './screens/UnlockScreen'
import UnlockSessionScreen from './screens/UnlockSessionScreen'
import QnaScreen from './screens/QnaScreen'
const  App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/cohort' component={CohortScreen} />
          <Route path='/courses' component={CourseScreen} />
          <Route path='/sessions' component={SessionScreen} />
          <Route path='/studentsections' component={StudentSessionSectionScreen} />
          <Route path='/teachersections' component={TeacherSessionSectionScreen} />
          <Route path='/content' component={ContentScreen} />
          <Route path='/home' component={HomeScreen} />
          <Route path='/homestd' component={StudentHomeScreen} />
          <Route path='/unlock' component={UnlockScreen} />
          <Route path='/unlocksessions' component={UnlockSessionScreen} />
          <Route path='/qna' component={QnaScreen} />
        </Container>
      </main>
      
    </Router>
  )
}

export default App
