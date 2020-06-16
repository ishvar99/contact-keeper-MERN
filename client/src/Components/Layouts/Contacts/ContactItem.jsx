import React from 'react';
import './ContactItem.css';
export const ContactItem = ({ contact }) => {
  return (
    <div className='contact-card'>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <div>
        <button className='btn black'>Edit</button>
        <button className='btn red'>Delete</button>
      </div>
    </div>
  );
};
export default ContactItem;
