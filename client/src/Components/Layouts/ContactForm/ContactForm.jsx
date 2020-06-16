import React, { useContext } from 'react';
import './ContactForm.css';
import contactContext from '../../../context/contact/contactContext';
const ContactForm = () => {
  const context = useContext(contactContext);
  const { current } = context;
  const onSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const obj = { name, email, phone, type };
    context.addContact(obj);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.querySelector('input[name="type"]').checked = true;
  };
  return (
    <div className='contact-form'>
      <h4 className='form-header'>Add a Contact</h4>
      <form onSubmit={onSubmit}>
        <input
          className='form-field'
          value={current ? current.name : ''}
          required
          placeholder='Name'
          id='name'
          type='text'
        />
        <input
          className='form-field'
          value={current ? current.email : ''}
          required
          id='email'
          placeholder='Email'
          type='text'
        />
        <input
          className='form-field'
          value={current ? current.phone : ''}
          required
          placeholder='Phone'
          id='phone'
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
            <input
              id='personal'
              checked={current ? current.type === 'personal' : true}
              type='radio'
              value='personal'
              name='type'
            />
            <label for='personal'>Personal</label>
          </div>
          <div>
            <input
              id='professional'
              checked={current ? current.type === 'professional' : false}
              type='radio'
              value='professional'
              name='type'
            />
            <label for='professional'>Professional</label>
          </div>
        </div>
        <input type='submit' className='form-btn' />
      </form>
    </div>
  );
};
export default ContactForm;
