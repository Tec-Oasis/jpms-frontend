import { Image, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import './PropertyDetails.css'

const PropertyDetails = ({ property, show, handleClose }) => {
  const { img, name, desc, rent, location, amenities } = property

  const navigate = useNavigate();

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <img
              src={img}
              alt={name}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '270px',
              }}
            />
          </Col>
          <Col md={4}>
            <Image
              src="https://images.unsplash.com/photo-1560185128-e173042f79dd"
              style={{
                height: '125px',
                width: '100%',
                marginBottom: '20px',
                objectFit: 'fit',
              }}
            />
            <Image
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a"
              style={{ height: '125px', width: '100%', objectFit: 'cover' }}
            />
          </Col>
        </Row>
        <Row>
          <p>{desc}</p>
        </Row>
        <Row>
          <Col>
            <p>Rent: ${rent} per month</p>
            <p>Location: {location}</p>
            <p>Amenities:</p>
            <ul>
              {amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={() => navigate("/booking")} variant="primary">Book This Property</Button> 
      </Modal.Footer>
    </Modal>
  )
}

export default PropertyDetails
