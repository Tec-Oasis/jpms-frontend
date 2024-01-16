import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AlterNav from "../components/AlterNav";
import "./BookingDetails.css";

const BookingDetails = () => {
  const property = {
    name: "Property 1",
    location: "Dubai Marina Bay, Dubai",
    rent: 2500,
  };

  const navigate = useNavigate();

  const { img, name, desc, rent, location, amenities } = property;

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <AlterNav />
      </div>
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
                    style={{ fontWeight: "bold", fontSize: "1.1em" }}
                  >
                    Mon, Jan 1, 2024
                  </Card.Text>
                  <Card.Text className="text-muted">From 3:00 PM</Card.Text>

                  <Card.Text className="mb-0">Contract ending date</Card.Text>
                  <Card.Text
                    className="mb-0"
                    style={{ fontWeight: "bold", fontSize: "1.1em" }}
                  >
                    Tue, Dec 31, 2024
                  </Card.Text>
                  <Card.Text className="text-muted">Until 12:00 PM</Card.Text>

                  <Card.Text className="mb-1">
                    Total length of contract:
                  </Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>3 Nights</Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Your price summary</Card.Title>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text>Original price</Card.Text>
                    <Card.Text>MYR 1000</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Form>
                <Card>
                  <Card.Body>
                    <Card.Title>Enter your details</Card.Title>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            id="firstName"
                            type="text"
                            placeholder="Please enter your first name"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            id="lastName"
                            type="text"
                            placeholder="Please enter your last name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>IC Number</Form.Label>
                      <Form.Control
                        id="icNumber"
                        type="text"
                        placeholder="Please enter your IC Number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        id="phoneNumber"
                        placeholder="Please enter your phone number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        id="emailAddress"
                        type="email"
                        placeholder="Please enter your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Special requests</Form.Label>
                      <Form.Control
                        id="specialRequests"
                        as="textarea"
                        rows={5}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <Button
                    onClick={() => {
                      const firstName =
                        document.getElementById("firstName").value;
                      const lastName =
                        document.getElementById("lastName").value;
                      const icNumber =
                        document.getElementById("icNumber").value;
                      const phoneNumber =
                        document.getElementById("phoneNumber").value;
                      const emailAddress =
                        document.getElementById("emailAddress").value;
                      const specialRequests =
                        document.getElementById("specialRequests").value;

                      console.log("First Name:", firstName);
                      console.log("Last Name:", lastName);
                      console.log("IC Number:", icNumber);
                      console.log("Phone Number:", phoneNumber);
                      console.log("Email Address:", emailAddress);
                      console.log("Special Requests:", specialRequests);

                      navigate("/booking/final");
                    }}
                    className="mb-3 mt-3"
                  >
                    Next: Payment
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};
export default BookingDetails;
