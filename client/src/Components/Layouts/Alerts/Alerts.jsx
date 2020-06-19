import React, { useContext } from 'react';
import AlertContext from '../../../context/Alert/AlertContext';
const Alerts = () => {
  const context = useContext(AlertContext);
  return (
    <div>
      {context.alerts.length > 0 &&
        context.alerts.map((alert) => {
          return (
            <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                margin: '20px auto',
              }}
              key={alert.id}
              className={`alert alert-${alert.type}`}
              role='alert'
            >
              <i className='fas fa-info-circle'> {alert.msg}</i>
            </div>
          );
        })}
    </div>
  );
};
export default Alerts;
