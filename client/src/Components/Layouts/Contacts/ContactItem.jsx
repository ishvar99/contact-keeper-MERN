import React, { useContext } from 'react';
import './Contacts.css';
import contactContext from '../../../context/contact/contactContext';
export const ContactItem = ({ contact }) => {
  const context = useContext(contactContext);
  const onDelete = () => {
    context.deleteContact(contact.id);
    context.clearCurrent();
  };
  const onEdit = () => {
    context.setCurrent(contact);
  };
  return (
    <div className='contact-card'>
      <div className='info'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <div>
          <button onClick={onEdit} className='btn black'>
            Edit
          </button>
          <button onClick={onDelete} className='btn red'>
            Delete
          </button>
        </div>
      </div>
      <div>
        <div
          className={
            'badge ' + (contact.type === 'personal' ? 'blue' : 'green')
          }
        >
          {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </div>
      </div>
    </div>
  );
};
export default ContactItem;
