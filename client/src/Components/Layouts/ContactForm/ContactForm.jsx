import React, { useContext } from 'react';
import './ContactForm.css';
import contactContext from '../../../context/contact/contactContext';
const ContactForm = () => {
  const context = useContext(contactContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form');
  };
  return (
    <div className='contact-form'>
      <h4 className='form-header'>Add a Contact</h4>
      <form onSubmit={onSubmit}>
        <input className='form-field' required placeholder='Name' type='text' />
        <input
          className='form-field'
          required
          placeholder='Email'
          type='text'
        />
        <input
          className='form-field'
          required
          placeholder='Phone'
          type='text'
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
            <input type='radio' value='personal' checked name='type' />
            <label for='personal'>Personal</label>
          </div>
          <div>
            <input type='radio' value='professional' name='type' />
            <label for='professional'>Professional</label>
          </div>
        </div>
        <input type='submit' className='form-btn' />
      </form>
    </div>
  );
};
export default ContactForm;
