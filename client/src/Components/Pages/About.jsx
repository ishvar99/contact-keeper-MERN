import React from 'react';

const About = () => {
  return (
    <div
      style={{
        height: '75vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        fontWeight: 'lighter',
      }}
    >
      <p>This app is used to manage your contacts easily!</p>
      <p>Version: 1.0.0</p>
      <p>Made with ❤ by Ishan Varshney</p>
    </div>
  );
};
export default About;
