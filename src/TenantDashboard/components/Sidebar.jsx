import React from "react";
import './Sidebar.css';
import invoices from "../Invoices/invoiceData";
import requests from "../MaintenanceRequests/MaintenanceRequestData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faClock, faTools } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    const totalInvoices = invoices.length;
    const pendingInvoices = invoices.filter(invoice => invoice.status === 'Pending').length;
   const totalRequest= requests.length;

  return (
    <div className="menu">
      <h2>Tenant Dashboard</h2>
      <div className="menu--list">
        <div className="item">
          <div className="total-box">
            <div className="icon">
              <FontAwesomeIcon icon={faFileInvoice} size="2x" />
            </div>
            <h5>Total Invoices</h5>
            <p>{totalInvoices}</p>
          </div>
        </div>
        <div className="item">
          <div className="total-box">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} size="2x" />
            </div>
            <h5>Pending Invoice</h5>
            <p>{pendingInvoices}</p>
          </div>
        </div>
        <div className="item">
          <div className="total-box">
            <div className="icon">
              <FontAwesomeIcon icon={faTools} size="2x" />
            </div>
            <h5>Maintenance Request</h5>
           <p>{totalRequest}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
