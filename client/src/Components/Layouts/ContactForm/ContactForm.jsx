import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h4 className='form-header'>Add a Contact</h4>
      <input className='form-field' type='text' />
      <input className='form-field' type='text' />
      <input className='form-field' type='text' />
      <label
        style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}
      >
        Contact Type
      </label>
      <div className='form-type'>
        <div>
          <input type='radio' value='personal' name='type' />
          <label for='personal'>Personal</label>
        </div>
        <div>
          <input type='radio' value='professional' name='type' />
          <label for='professional'>Professional</label>
        </div>
      </div>
      <input type='submit' className='form-btn' />
    </div>
  );
};
export default ContactForm;
