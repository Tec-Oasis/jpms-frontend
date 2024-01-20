import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

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

  const { img, name, rent, location } = property;

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <AlterNav />
      </div>

      <>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
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
            </Col>
            <Col xxl="4">
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
                    <Card.Text>MYR {rent}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <form
                  action={`${
                    import.meta.env.VITE_API_SERVER_URL
                  }/stripe/checkout/${id}`}
                  method="POST"
                >
                  <Button type="submit" className="mb-3 mt-3">
                    Next: Complete Payment
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};
export default FinalDetails;
