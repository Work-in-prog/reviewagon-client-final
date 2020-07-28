import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./components/FontAwesome"

import { Route, Switch } from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom'
import Strollers from './components/Strollers/Strollers';
import Stroller from './components/Stroller/Stroller';

function App() {
  return (
    
        <div >
          <Switch>
            <Route exact path="/" component={Strollers} />
            <Route exact path="/strollers/:slug" component={Stroller} />
          </Switch>
        </div>
  
  );
}

export default App;
