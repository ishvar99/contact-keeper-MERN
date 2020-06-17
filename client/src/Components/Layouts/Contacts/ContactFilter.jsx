import React, { useContext } from 'react';
import contactContext from '../../../context/contact/contactContext';
const ContactFilter = () => {
  const context = useContext(contactContext);
  const { filterContacts, clearFilter } = context;
  const onChange = (e) => {
    if (e.target.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div
      style={{
        marginTop: '20px',
        textAlign: 'center',
      }}
    >
      <input
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid gainsboro',
        }}
        onChange={onChange}
        placeholder='Search Contacts'
      />
    </div>
  );
};
export default ContactFilter;
