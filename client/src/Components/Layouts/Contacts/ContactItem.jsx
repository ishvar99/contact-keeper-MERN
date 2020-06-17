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
        <p style={{ color: 'darkblue', fontSize: '24px', fontWeight: 'bold' }}>
          {contact.name}
        </p>
        <p>
          <i
            style={{ marginRight: '3px' }}
            className='fas fa-envelope-open'
          ></i>
          <span>{contact.email}</span>
        </p>
        {contact.phone && (
          <p>
            <i style={{ marginRight: '3px' }} className='fas fa-phone'></i>
            <span>{contact.phone}</span>
          </p>
        )}

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
