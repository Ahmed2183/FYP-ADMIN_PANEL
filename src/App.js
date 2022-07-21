import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import User from './Screens/Third'
function App() {
  return (
    <Router >
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/User" component={User} />
        </Switch>
    </Router>
  );
}

export default App;
