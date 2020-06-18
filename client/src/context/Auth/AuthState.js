import React, { useReducer } from 'react';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../types';
import AuthReducer from './AuthReducers';
import AuthContext from './AuthContext';
import axios from 'axios';
const AuthState = (props) => {
  const intialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, intialState);

  const registerUser = async (formData) => {
    console.log('register user');
    console.log(JSON.stringify(formData));
    const user = await axios.post(
      '/api/auth/register',
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(user);
    dispatch({ type: REGISTER_USER, payload: user });
  };
  return (
    <AuthContext.Provider value={{ registerUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
