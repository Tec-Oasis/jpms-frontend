import { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import PropertyCard from './PropertyCard/PropertyCard'

const PropertyList = () => {
  const [propertyData, setPropertyData] = useState([])

  useEffect(() => {
    fetch('https://dolphin-app-7ux4p.ondigitalocean.app/properties')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPropertyData(data)
      })
  }, [])

  return (
    <Container fluid>
      <Row style={{ margin: '30px' }}>
        {propertyData.map((property) => (
          <Col
            md={3}
            style={{ marginBottom: '25px' }}
            key={property.property_id}
          >
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PropertyList
