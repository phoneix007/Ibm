import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Content from './components/content';
import TableComponent from './Table';
import CurriculumSessions from './components/CurriculumSessions/CurriculumSessions'
import CourseTable from './components/CoursesTable/CoursesTable'
import Curriculums from './components/Curriculums/Curriculums'

import HomePage from './components/HomePage/HomePage'


function App() {
  return (
    <Router>
     <Switch>
       <Route path = "/" exact component={HomePage}/>
       <Route path = "/Curriculums/" exact component={Curriculums}/>
       <Route path = "/Curriculums/:id" exaxt component={CourseTable}/>
       <Route path = "/courses/:id" exact component={CurriculumSessions}/>
       <Route path = "/courses/session/:id" exact component ={TableComponent}/>
       <Route path = "/content/:id" exact component={Content}/>
     </Switch>
    </Router>
    
  )
}

export default App;

