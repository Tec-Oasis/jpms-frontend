import { Form, Row, Col, Card, Container, Button } from 'react-bootstrap'

const FinalDetails = () => {
  const property = {
    name: 'Property 1',
    location: 'Dubai Marina Bay, Dubai',
    rent: 2500,
  }

  const { img, name, desc, rent, location, amenities } = property

  return (
    <>
      <Container fluid="lg">
        <Row>
          <Col xxl="4">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Text>{location}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3 booking-details-card">
              <Card.Body>
                <Card.Title>Your booking details</Card.Title>

                <Card.Text className="mb-1">Contract starting date</Card.Text>
                <Card.Text
                  className="mb-0"
                  style={{ fontWeight: 'bold', fontSize: '1.1em' }}
                >
                  Mon, Jan 1, 2024
                </Card.Text>
                <Card.Text className="text-muted">From 3:00 PM</Card.Text>

                <Card.Text className="mb-0">Contract ending date</Card.Text>
                <Card.Text
                  className="mb-0"
                  style={{ fontWeight: 'bold', fontSize: '1.1em' }}
                >
                  Tue, Dec 31, 2024
                </Card.Text>
                <Card.Text className="text-muted">Until 12:00 PM</Card.Text>

                <Card.Text className="mb-1">
                  Total length of contract:
                </Card.Text>
                <Card.Text style={{ fontWeight: 'bold' }}>3 Nights</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Your price summary</Card.Title>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Card.Text>Original price</Card.Text>
                  <Card.Text>MYR 2500</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>When do you want to pay</Card.Title>

                  <Form.Check type="radio" label="Pay Now" id="paynow" />

                  <Form.Check type="radio" label="Pay Later" id="paylater" />
                </Card.Body>
              </Card>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button className="mb-3 mt-3">Next: Payment</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default FinalDetails
