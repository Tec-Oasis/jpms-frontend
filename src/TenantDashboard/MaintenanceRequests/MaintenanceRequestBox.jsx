import React from 'react';
import requests from './MaintenanceRequestData';

const MaintenanceRequestBox = () => {
  return (
    <div className="box">
      <h2>Maintenance Requests</h2>
      {requests.map((request) => (
        <div key={request.id}>{request.description}</div>
      ))}
    </div>
  );
};

export default MaintenanceRequestBox;