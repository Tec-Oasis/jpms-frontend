import { Image, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './PropertyDetails.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyDetails = ({ property, show, handleClose }) => {
  const { img, name, desc, rent, location, amenities,coordinate_x, coordinate_y  } = property

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
          <Col >
            <MapContainer
              center={[parseFloat(coordinate_x), parseFloat(coordinate_y)]}
              zoom={10}
              style={{ height: '302px', width: '450px' }}
            >
              {<TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                language="en"
              /> }
              <Marker position={[parseFloat(coordinate_x), parseFloat(coordinate_y)]}>
               
              </Marker>
            </MapContainer>
          </Col>

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PropertyDetails
