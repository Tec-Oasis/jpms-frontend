import React from 'react';

const TenantData = {
  
  propertyId: 5,
  roomId: 9,
  tenantId: 12
  
};

const TenantInfo = () => {
  return (
    <div>
      <h2>Tenant Information</h2>
      <div>
        <p>Property ID: {TenantData.propertyId}</p>
        <p>Room ID: {TenantData.roomId}</p>
        <p>Tenant ID: {TenantData.tenantId}</p>
       
      </div>
    </div>
  );
};

export default TenantInfo;