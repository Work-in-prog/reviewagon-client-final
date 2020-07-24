import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
// import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div >
        <Route exact path="/" component={Strollers} />
        <Route exact path="/:slug" component="Strollers" />
      
    </div>

    </Router>
  
  );
}

export default App;
