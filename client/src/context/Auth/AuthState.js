import React, { useReducer } from 'react';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';
import AuthReducer from './AuthReducers';
import AuthContext from './AuthContext';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
const AuthState = (props) => {
  const intialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, intialState);
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const response = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: response.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.err });
    }
  };
  const registerUser = async (formData) => {
    try {
      const response = await axios.post(
        '/api/auth/register',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      loadUser();
    } catch (err) {
      console.log(err.response);
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.err });
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const loginUser = async (formData) => {
    try {
      const response = await axios.post(
        '/api/auth/login',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      loadUser();
    } catch (err) {
      console.log(err.response);
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.err });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        registerUser,
        clearErrors,
        loginUser,
        loadUser,
        logout,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
