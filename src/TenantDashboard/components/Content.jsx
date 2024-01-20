import ContentHeader from "./ContentHeader";
import Card from "./Card";
import "./content.css";
import InvoiceBox from "../Invoices/InvoiceBox";
import MaintenanceRequestBox from "../MaintenanceRequests/MaintenanceRequestBox";

// eslint-disable-next-line react/prop-types
const Content = ({property}) => {
 

  return (
    <div className="content">
      <ContentHeader />
      <Card property={property} />
      <div className="content--box">
      <InvoiceBox />
      <MaintenanceRequestBox />
      </div>
    </div>
  );
};

export default Content;
