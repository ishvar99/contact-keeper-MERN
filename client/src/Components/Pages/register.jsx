import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/Auth/AuthContext';
import AlertContext from '../../context/Alert/AlertContext';
const Register = () => {
  const context = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  useEffect(() => {
    if (context.error == 'email already exists') {
      alertContext.setAlerts(context.error, 'danger');
      context.clearErrors();
    }
  }, [context.error]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alertContext.setAlerts("Password don't match!", 'danger');
      return;
    }
    context.registerUser({ name, email, password });
  };
  return (
    <div style={{ width: '50%', margin: '100px auto' }}>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontWeight: '700',
          color: 'darkblue',
        }}
      >
        REGISTER NOW
      </h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-control'
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <label>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            required
          />
          <small className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            placeholder='Password'
            required
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            onChange={(e) => setPassword2(e.target.value)}
            type='password'
            className='form-control'
            placeholder='Retype Password'
            required
          />
        </div>
        <button
          style={{ width: '100%' }}
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
