import requests from './maintenanceRequestData.js';

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