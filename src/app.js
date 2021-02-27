import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/content';
import TableComponent from './Table';
import CurriculumSessions from './components/CurriculumSessions/CurriculumSessions'
import CourseTable from './components/CoursesTable/CoursesTable'
import Curriculums from './components/Curriculums/Curriculums'


function App() {
  return (
    <Router>
     <Curriculums/>
    </Router>
    
  )
}

export default App;

{/* <>
      <Router>
        <Switch>
        <Route exact path="/">
            <TableComponent />
          </Route>
          <Route path="/content" component={Content}/>
        </Switch>
      </Router>
    </> */}