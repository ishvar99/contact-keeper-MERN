import React from 'react';
import './App.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactState from './context/contact/contactState';
import AuthState from './context/Auth/AuthState';
import Register from './Components/Pages/register';
import Login from './Components/Pages/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertState from './context/Alert/AlertState';
import Alerts from './Components/Layouts/Alerts/Alerts.jsx';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './Components/Routing/PrivateRoute';
import NotFound from './Components/Pages/notFound';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <Alerts />
            <Switch>
              <PrivateRoute exact path='/' component={Home}></PrivateRoute>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
