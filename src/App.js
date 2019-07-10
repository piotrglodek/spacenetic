import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './view/Home';
import WelcomePage from './view/WelcomePage';
import Planets from './view/Planets';

function App() {
 return (
  <Router>
   <Route exact path='/' component={Home} />
   <Route exact path='/welcome-page' component={WelcomePage} />
   <Route exact path='/planets' component={Planets} />
  </Router>
 );
}

export default App;
