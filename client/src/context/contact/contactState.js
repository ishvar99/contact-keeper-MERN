import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../types.js';
import React, { useReducer } from 'react';
import ContactReducer from './contactReducers';
import ContactContext from './contactContext';
import axios from 'axios';
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ishan',
        email: 'ishanvarshney99@gmail.com',
        phone: '9205818212',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Himanshi',
        email: 'himanshivarshney25@gmail.com',
        phone: '7982500254',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Mamta',
        email: 'mamtavarshney73@gmail.com',
        phone: '9958213187',
        type: 'personal',
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const addContact = (formData) => {
    dispatch({ type: ADD_CONTACT });
  };
  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
