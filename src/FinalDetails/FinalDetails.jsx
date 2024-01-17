import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";

import AlterNav from "../components/AlterNav";

const FinalDetails = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

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
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>When do you want to pay</Card.Title>

                    <Form.Check
                      type="radio"
                      label="Pay Now"
                      id="paynow"
                      style={{ fontSize: "1.2em" }}
                    />

                    <Form.Check
                      type="radio"
                      label="Pay Later -> feautre coming soon!"
                      style={{ fontSize: "1.2em" }}
                      id="paylater"
                      disabled
                    />
                  </Card.Body>
                </Card>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <form
                    action={`${
                      import.meta.env.VITE_API_SERVER_URL
                    }/stripe/checkout`}
                    method="POST"
                  >
                    <Button type="submit" className="mb-3 mt-3">
                      Next: Payment
                    </Button>
                  </form>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};
export default FinalDetails;
