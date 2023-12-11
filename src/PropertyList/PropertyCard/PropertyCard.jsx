
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropertyDetails from './PropertyDetails/PropertyDetails';

const PropertyCard = ({ property, handleMarkerClick }) => {
  const { img, name, description, rent, location, amenities, coordinate_x, coordinate_y } = property;

  const [showDetails, setShowDetails] = React.useState(false);

  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);
 

  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} className="property-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => {  handleShow(); }}>
            Learn more
          </Button>
        </Card.Body>
      </Card>
      <PropertyDetails
        property={{ img, name, description, rent, location, amenities, coordinate_x, coordinate_y }}
        show={showDetails}
        handleClose={handleClose}
      />
    </>
  );
};

export default PropertyCard;
