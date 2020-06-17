import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types.js';
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
    current: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const addContact = async (formData) => {
    // const response = await axios.post(
    //   '/api/contacts',
    //   JSON.stringify(formData),
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-auth':
    //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZThlYWNmOWU2OGZhMmU5YzkyNTQxMSIsImlhdCI6MTU5MjMyMjc2OCwiZXhwIjoxNTkyMzI5OTY4fQ.hGB2PC7024e47qqKkMMH88CsvLm6hwb21wzCkOQZTPI',
    //     },
    //   }
    // );
    // console.log(response);
    dispatch({ type: ADD_CONTACT, payload: formData });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updateContact = (formData, id) => {
    dispatch({ type: UPDATE_CONTACT, payload: { formData, id } });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
