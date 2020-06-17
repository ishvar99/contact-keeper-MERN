import React, { useContext, useState, useEffect } from 'react';
import './ContactForm.css';
import contactContext from '../../../context/contact/contactContext';
const ContactForm = () => {
  const context = useContext(contactContext);
  const { addContact, clearCurrent, current, updateContact } = context;
  useEffect(() => {
    current
      ? setContact(current)
      : setContact({
          name: '',
          email: '',
          phone: '',
          type: 'personal',
        });
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    current ? updateContact(contact, current.id) : addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div className='contact-form'>
      <h4 className='form-header'>Add a Contact</h4>
      <form onSubmit={onSubmit}>
        <input
          className='form-field'
          value={name}
          required
          placeholder='Name'
          onChange={onChange}
          name='name'
          type='text'
        />
        <input
          className='form-field'
          value={email}
          required
          name='email'
          placeholder='Email'
          type='text'
          onChange={onChange}
        />
        <input
          className='form-field'
          value={phone}
          placeholder='Phone'
          name='phone'
          type='text'
          onChange={onChange}
        />
        <label
          style={{
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          Contact Type
        </label>
        <div className='form-type'>
          <div>
            <input
              value='personal'
              checked={type === 'personal' ? true : false}
              type='radio'
              value='personal'
              onChange={onChange}
              name='type'
            />
            <label for='personal'>Personal</label>
          </div>
          <div>
            <input
              name='professional'
              type='radio'
              checked={type === 'professional' ? true : false}
              value='professional'
              onChange={onChange}
              name='type'
            />
            <label for='professional'>Professional</label>
          </div>
        </div>
        <button className='form-btn'>{current ? 'Update' : 'Submit'}</button>
        {current && (
          <button className='form-btn grey' onClick={clearAll}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
