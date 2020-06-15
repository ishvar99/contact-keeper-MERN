import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactState from './context/contact/contactState';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
        </Switch>
      </Router>
    </ContactState>
  );
};

export default App;
