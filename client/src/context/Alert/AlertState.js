import React, { useReducer } from 'react';
import { SET_ALERT } from '../types';
import AuthReducer from './AlertReducers';
import AuthContext from './AlertContext';
import axios from 'axios';
const AuthState = (props) => {
  const intialState = {
    token: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, intialState);

  const registerUser = async (formData) => {
    const response = await axios.post(
      '/api/auth/register',
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({ type: REGISTER_USER, payload: response.data.token });
  };
  return (
    <AuthContext.Provider value={{ token: state.token, registerUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
