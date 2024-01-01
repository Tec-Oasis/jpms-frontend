import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import { FaEllipsisVertical } from 'react-icons/fa6'
import './PropertyCard.css'

const PropertyCard = ({ property }) => {
  const { name, starting_date, ending_date, status, address, rent } = property
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)

  return (
    <Card
      className={
        hovered
          ? 'property-card-customer-booking shadow'
          : 'property-card-customer-booking shadow-sm'
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Card.Body>
        <Card.Img src="https://images.unsplash.com/photo-1460317442991-0ec209397118" />
        <div className="info-property-card-customer-booking">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">
            {starting_date} {ending_date} <span>{address}</span>
          </Card.Text>
          <Card.Text className="text-muted">{status}</Card.Text>
        </div>
        <Card.Text className="h4 rent-property-card-customer-booking">
          MYR {rent}
        </Card.Text>
        <div className="fab-property-card-customer-booking">
          <Button className="btn-light">
            <FaEllipsisVertical />
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
export default PropertyCard
