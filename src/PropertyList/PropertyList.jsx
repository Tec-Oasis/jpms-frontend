import { Col, Row, Container } from 'react-bootstrap'
import PropertyCard from './PropertyCard/PropertyCard'
import propertyData from './propertyData'

const PropertyList = () => {
  return (
    <Container-fluid>
      <Row style={{ margin: '30px' }}>
        {propertyData.map((property, index) => (
          <Col md={3} style={{ marginBottom: '25px' }}>
            <PropertyCard key={index} property={property} />
          </Col>
        ))}
      </Row>
    </Container-fluid>
  )
}

export default PropertyList
