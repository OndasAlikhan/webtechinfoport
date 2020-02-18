import React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Abitur from './components/Abitur'
import Main from './components/Main'
import Articles from './components/Articles'
import Login from './components/Login'
import SignUp from './components/Signup'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <ButtonAppBar/>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div className='container'>
            <Switch>
              <Route path="/main">
                <Main/>
              </Route>
              <Route path="/abitur">
                <Abitur/>
              </Route>
              <Route path="/articles">
                <Articles/>
              </Route>
              <Route path="/faq">

              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <SignUp/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
