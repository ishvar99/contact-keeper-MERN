import React from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactState from './context/contact/contactState';
import AuthState from './context/Auth/AuthState';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
          </Switch>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
