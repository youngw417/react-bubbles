import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/privateRoute';
import Login from './components/Login';
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
         
           <PrivateRoute path="/bubbles" component={BubblePage} />
           <Route path="/login" render = { (props) => <Login {...props}/>} />
           {/* <Route component={Login} /> */}
        </Switch>
       

        
      </div>
    </Router>
  );
}

export default App;
