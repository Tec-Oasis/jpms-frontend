import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import PropertyCard from "./PropertyCard/PropertyCard";

const PropertyList = () => {
  const [propertyData, setPropertyData] = useState([]);

  // const production_api = "https://dolphin-app-7ux4p.ondigitalocean.app";
  const API = import.meta.env.VITE_API_SERVER_URL;

  useEffect(() => {
    fetch(`${API}/properties`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPropertyData(data);
      });
  }, []);

  return (
    <Container fluid>
      <Row style={{ margin: "30px" }}>
        {propertyData.map((property) => (
          <Col key={property.id} md={3} style={{ marginBottom: "25px" }}>
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyList;
