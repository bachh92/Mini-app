import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './route/Home/Home';

export default function App() {
  return (
    <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
  </Router>
  );
};