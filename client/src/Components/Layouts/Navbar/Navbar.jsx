import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <a className='navbar-brand mb-0 h1' href='#'>
        <i className={icon}></i>
        <span className='ml-3'>{title}</span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/register'>
              Register
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'Smart Contacts',
  icon: 'fas fa-id-card-alt',
};
export default Navbar;
