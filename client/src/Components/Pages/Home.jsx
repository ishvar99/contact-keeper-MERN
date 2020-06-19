import React, { useEffect, useContext } from 'react';
import Contacts from '../Layouts/Contacts/Contacts';
import AuthContext from '../../context/Auth/AuthContext';
const Home = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    context.loadUser();
  }, []);
  return (
    <div>
      <Contacts />
    </div>
  );
};
export default Home;
