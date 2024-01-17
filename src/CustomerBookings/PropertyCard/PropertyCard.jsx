import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const { property_name, contract_start, contract_end, rent } = property;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  // converty contract_start and contract_end to date format
  const starting_date = new Date(contract_start);
  const ending_date = new Date(contract_end);

  return (
    <Card
      className={
        hovered
          ? "property-card-customer-booking shadow"
          : "property-card-customer-booking shadow-sm"
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Card.Body>
        <Card.Img
          style={{ width: 140 }}
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118"
        />
        <div className="info-property-card-customer-booking">
          <Card.Title>{property_name}</Card.Title>
          <Card.Text className="text-muted">
            Start of contract: {starting_date.toDateString()}
          </Card.Text>

          <Card.Text className="text-muted">
            End of contract: {ending_date.toDateString()}
          </Card.Text>
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
  );
};
export default PropertyCard;
