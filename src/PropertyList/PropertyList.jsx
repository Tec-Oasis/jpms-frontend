import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import PropertyCard from './PropertyCard/PropertyCard';
import PropertyDetails from './PropertyCard/PropertyDetails/PropertyDetails';

const PropertyList = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolphin-app-7ux4p.ondigitalocean.app/properties');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);
        setPropertyData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePropertyCardClick = (property) => {
    setSelectedProperty(property);
  };

  const handlePropertyDetailsClose = () => {
    setSelectedProperty(null);
  };

  return (
    <Container fluid>
      <Row style={{ margin: '30px' }}>
        {propertyData.map((property, index) => (
          <Col key={index} md={3} style={{ marginBottom: '25px' }}>
            <PropertyCard
              property={property}
              handleMarkerClick={() => handlePropertyCardClick(property)}
            />
          </Col>
        ))}
      </Row>

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          show={!!selectedProperty}
          handleClose={handlePropertyDetailsClose}
        />
      )}
    </Container>
  );
};

export default PropertyList;
