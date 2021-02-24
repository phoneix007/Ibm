import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from './components/content';
import TableComponent from './Table';
import CurriculumSessions from './components/CurriculumSessions/CurriculumSessions'


function App() {
  return (
    <CurriculumSessions/>
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