import { Button, Form, Row, Col } from 'react-bootstrap'

function ContactForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="contactFormFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="contactFormLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="contactFormPheon">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactFormEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactFormTextarea">
        <Form.Label>Comment or Message</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
