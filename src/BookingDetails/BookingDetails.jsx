import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AlterNav from "../components/AlterNav";
import "./BookingDetails.css";
import { useAuth0 } from "@auth0/auth0-react";

const BookingDetails = () => {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${import.meta.env.VITE_API_SERVER_URL}/properties/${id}`;
        const response = await axios.get(url);
        console.log(response.data);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const property = {
  //   name: "Property 1",
  //   location: "Dubai Marina Bay, Dubai",
  //   rent: 2500,
  // };

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const { img, name, desc, rent, location, amenities } = property;

  const { user: loggedUser } = useAuth0();

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
                  <Card.Img
                    style={{ borderRadius: 20, marginBottom: 20 }}
                    variant="top"
                    src={img}
                  />
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
                  <br />
                  <Card.Text className="mb-0">Contract ending date</Card.Text>
                  <Card.Text
                    className="mb-0"
                    style={{ fontWeight: "bold", fontSize: "1.1em" }}
                  >
                    Tue, Dec 31, 2024
                  </Card.Text>
                  <br />

                  <Card.Text className="mb-1">
                    Total length of contract:
                  </Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>One Year</Card.Text>
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
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            id="fullname"
                            type="text"
                            placeholder="Please enter your name"
                            value={loggedUser && loggedUser.name}
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
                        value={loggedUser && loggedUser.email}
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
                    onClick={async () => {
                      const fullname =
                        document.getElementById("fullname").value;
                      const icNumber =
                        document.getElementById("icNumber").value;
                      const phoneNumber =
                        document.getElementById("phoneNumber").value;
                      const emailAddress =
                        document.getElementById("emailAddress").value;
                      const specialRequests =
                        document.getElementById("specialRequests").value;

                      console.log("Full Name:", fullname);
                      console.log("IC Number:", icNumber);
                      console.log("Phone Number:", phoneNumber);
                      console.log("Email Address:", emailAddress);
                      console.log("Special Requests:", specialRequests);

                      await axios.post(
                        `${import.meta.env.VITE_API_SERVER_URL}/my_contracts`,
                        {
                          auth0_id: loggedUser.sub,
                          property_id: id,
                        }
                      );

                      navigate(`/booking/final/${id}`);
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
