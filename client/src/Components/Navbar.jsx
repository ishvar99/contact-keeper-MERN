import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav class='navbar navbar-expand-sm navbar-dark bg-dark'>
      <a class='navbar-brand mb-0 h1' href='#'>
        <i className={icon}></i>
        <span className='ml-3'>{title}</span>
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='/'>
              Home <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item active'>
            <a class='nav-link' href='/about'>
              About
            </a>
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
