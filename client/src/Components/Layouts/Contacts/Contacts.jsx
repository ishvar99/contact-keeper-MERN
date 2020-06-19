import React, { useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from './ContactFilter';
import Spinner from '../../Spinner/Spinner';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Contacts.css';
import '../../../App.css';
const Contacts = () => {
  const context = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = context;
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className='main-container'>
      <div className='contacts-form'>
        <ContactForm />
      </div>
      <div className='main'>
        {contacts != null && !loading ? null : <Spinner />}
        {contacts.length > 0 ? (
          <ContactFilter />
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
        <TransitionGroup>
          {filtered
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={700}
                  classNames='animation'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='animation'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
export default Contacts;
