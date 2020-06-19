import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/Auth/AuthContext';
import AlertContext from '../../context/Alert/AlertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const context = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    context.loginUser({ email, password });
  };
  useEffect(() => {
    if (context.isAuthenticated) {
      props.history.push('/');
    }
    if (context.error == 'invalid credentials') {
      alertContext.setAlerts(context.error, 'danger');
      context.clearErrors();
    }
    // eslint-disable-next-line
  }, [context.error, context.isAuthenticated, props.history]);
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
        LOGIN
      </h2>
      <form onSubmit={onSubmit}>
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
export default Login;
