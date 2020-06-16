import React, { useContext } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import './ContactItem.css';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts } = context;
  return (
    <div className='main'>
      {contacts.map((contact) => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </div>
  );
};
export default Contacts;
