import React, { useContext } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts } = context;
  return (
    <div>
      {contacts.map((contact) => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </div>
  );
};
export default Contacts;
