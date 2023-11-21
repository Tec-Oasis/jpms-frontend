import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './PropertyCard.css'

const PropertyCard = ({ property }) => {
  const { img, name, desc } = property
  return (
    <Card>
      <Card.Img variant="top" src={img} className="property-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default PropertyCard
