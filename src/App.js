import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './view/Home';
import WelcomePage from './view/WelcomePage';

function App() {
 return (
  <Router>
   <Route exact path='/' component={Home} />
   <Route exact path='/welcome-page' component={WelcomePage} />
  </Router>
 );
}

export default App;
