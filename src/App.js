import React, { useState } from 'react';

import Dashboard from './pages/Dashboard';
import Apply from './pages/Submit';
import Project from './pages/Project';
import {Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss'


function App() {
  const[sensor, setSensor] = useState({value: 'trentotrento', label: 'Trento'})

  return (
    <div className="app-wrapper">
      <Router>
        <Route path="/" exact render={() => <Dashboard sensor={sensor} setSensor={setSensor}/>}/>
        <Route path="/apply" render={() => <Apply/>}/>
        <Route path="/project" render={() => <Project/>}/>
      </Router>
    </div>
  );
}


export default App;
