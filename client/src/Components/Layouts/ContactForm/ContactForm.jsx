import React from 'react';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h4>Add a Contact</h4>
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <label>Contact Type</label>
      <div>
        <input type='radio' />
        <label for='Personal'></label>
        <input type='radio' />
        <label for='Professional'></label>
      </div>
      <input type='submit' />
    </div>
  );
};
export default ContactForm;
