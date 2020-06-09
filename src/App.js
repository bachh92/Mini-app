import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './route/Home/Home';
import Details from './route/Details/Details';

export default function App() {
  return (
    <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
  </Router>
  );
};