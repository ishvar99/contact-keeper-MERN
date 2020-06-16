import React, { useContext } from 'react';
import './Contacts.css';
import contactContext from '../../../context/contact/contactContext';
export const ContactItem = ({ contact }) => {
  const context = useContext(contactContext);
  return (
    <div className='contact-card'>
      <div className='info'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <div>
          <button className='btn black'>Edit</button>
          <button
            // onClick={context.deleteContact(contact.id)}
            className='btn red'
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <button
          className={'btn ' + (contact.type === 'personal' ? 'blue' : 'green')}
        >
          {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </button>
      </div>
    </div>
  );
};
export default ContactItem;
