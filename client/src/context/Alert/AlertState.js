import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertReducer from './AlertReducers';
import AlertContext from './AlertContext';
const AlertState = (props) => {
  const intialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(AlertReducer, intialState);

  const setAlerts = async (msg, type, timeout = 5000) => {
    let id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { id, type, msg } });

    setTimeout(dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
  return (
    <AlertContext.Provider value={{ alerts: state.alerts, setAlerts }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
