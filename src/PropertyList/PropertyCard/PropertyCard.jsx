import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './PropertyCard.css'
import PropertyDetails from './PropertyDetails/PropertyDetails'

const PropertyCard = ({ property }) => {
  const { img, name, description } = property

  const [showDetails, setShowDetails] = useState(false)

  const handleClose = () => setShowDetails(false)
  const handleShow = () => setShowDetails(true)

  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} className="property-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Learn more
          </Button>
        </Card.Body>
      </Card>
      <PropertyDetails
        property={property}
        show={showDetails}
        handleClose={handleClose}
      />
    </>
  )
}

export default PropertyCard
