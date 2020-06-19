import React, { useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from './ContactFilter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Contacts.css';
import '../../../App.css';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts, filtered, getContacts } = context;
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className='main-container'>
      <div className='contacts-form'>
        <ContactForm />
      </div>

      <div className='main'>
        {contacts.length > 0 ? <ContactFilter /> : null}
        <TransitionGroup>
          {contacts.length > 0 ? (
            filtered ? (
              filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={700}
                  classNames='animation'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            ) : (
              contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='animation'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            )
          ) : (
            <h4
              style={{
                textAlign: 'center',
                marginTop: '170px',
                color: 'darkgreen',
                fontWeight: '500',
              }}
            >
              No contacts to display
            </h4>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
};
export default Contacts;
