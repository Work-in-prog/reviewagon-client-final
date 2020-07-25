import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./components/FontAwesome"

import { Route, Switch } from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom'
import Strollers from './components/Strollers';
import Stroller from './components/Stroller';

function App() {
  return (
    
        <div >
          <Switch>
            <Route exact path="/:slug" component={Stroller} />
            <Route exact path="/" component={Strollers} />
          </Switch>
        </div>
  
  );
}

export default App;
