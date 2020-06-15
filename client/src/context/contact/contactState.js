import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../types.js';
import React, { useReducer } from 'react';
import ContactReducer from './contactReducers';
import ContactContext from './contactContext';
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ishan',
        email: 'ishanvarshney99@gmail.com',
        phone: '9205818212',
      },
      {
        id: 2,
        name: 'Himanshi',
        email: 'himanshivarshney25@gmail.com',
        phone: '7982500254',
      },
      {
        id: 3,
        name: 'Mamta',
        email: 'mamtavarshney73@gmail.com',
        phone: '9958213187',
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const addContact = () => {
    dispatch({ type: ADD_CONTACT });
  };
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
