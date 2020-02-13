import React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Abitur from './components/Abitur'
import Main from './components/Main'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <ButtonAppBar/>
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/abitur">
            <Abitur/>
          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
