import React from "react";
import ContentHeader from "./ContentHeader";
import Card from "./Card";
import "./content.css";
import propertyData from "../../PropertyList/propertyData";
import InvoiceBox from "../Invoices/InvoiceBox";
import MaintenanceRequestBox from "../MaintenanceRequests/MaintenanceRequestBox";

const Content = () => {
 
  const selectedProperty = propertyData[0];

  return (
    <div className="content">
      <ContentHeader />
      <Card property={selectedProperty} />
      <div className="content--box">
      <InvoiceBox />
      <MaintenanceRequestBox />
      </div>
    </div>
  );
};

export default Content;
