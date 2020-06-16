import { ADD_CONTACT, DELETE_CONTACT } from '../types';

export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id === action.payload;
        }),
      };
    default:
      return state;
  }
};
