import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/Auth/AuthContext';

const NotFound = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    context.loadUser();
  }, []);
  return <div>Page not found!</div>;
};

export default NotFound;
