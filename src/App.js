import React, { useState } from 'react';

import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Home from './pages/Home';
import Apply from './pages/Submit';
import {Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  const[sensor, setSensor] = useState({value: 'trentotrento', label: 'Trento'})

  return (
    <div className="app-wrapper">
      <Router>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/dashboard" exact render={() => <Dashboard sensor={sensor} setSensor={setSensor}/>}/>
        <Route path="/apply" render={() => <Apply/>}/>
        <Route path="/project" render={() => <Project/>}/>
      </Router>
    </div>
  );
}


export default App;
