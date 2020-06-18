import React, { useContext, Fragment } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from './ContactFilter';
import './Contacts.css';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts, filtered } = context;
  return (
    <div className='main-container'>
      <div className='contacts-form'>
        <ContactForm />
      </div>
      <div className='main'>
        <ContactFilter />
        {contacts.length > 0 ? (
          filtered ? (
            filtered.map((contact) => {
              return <ContactItem key={contact.id} contact={contact} />;
            })
          ) : (
            contacts.map((contact) => {
              return <ContactItem key={contact.id} contact={contact} />;
            })
          )
        ) : (
          <h4>Please add contacts</h4>
        )}
      </div>
    </div>
  );
};
export default Contacts;
