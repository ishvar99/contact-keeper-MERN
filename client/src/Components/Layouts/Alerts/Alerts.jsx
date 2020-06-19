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
              key={alert.id}
              className={`alert alert-${alert.type}`}
              role='alert'
            >
              {alert.msg}
            </div>
          );
        })}
    </div>
  );
};
export default Alerts;
