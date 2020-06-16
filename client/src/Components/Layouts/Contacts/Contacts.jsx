import React, { useContext, Fragment } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import ContactForm from '../ContactForm/ContactForm';
import './Contacts.css';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts } = context;
  return (
    <div className='main-container'>
      <div>
        <ContactForm />
      </div>
      <div className='main'>
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
};
export default Contacts;
