import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AlterNav from "./components/AlterNav";
import { useParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  
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

  if (loading) {
    return <div>Loading...</div>;
  }

  const { img, name, rent, location } = property;

  return (
    <>
      <AlterNav />
      <Container>
        <Row className="justify-content-md-center">
          <Col xxl="8">
            <div
              style={{ fontSize: "70px", color: "green", textAlign: "center" }}
            >
              ✔️
            </div>
            <h2 style={{ textAlign: "center" }}>Payment Success</h2>
          </Col>
          {/* <Col xxl="4">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Payment successful!</Card.Title>
                <Card.Text>
                  Thank you for your payment. Your booking has been confirmed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
        <Row className="justify-content-md-center">
          <Col xxl="4">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Payment successful!</Card.Title>
                <Card.Text>
                  Thank you for your payment. Your booking has been confirmed.
                </Card.Text>
              </Card.Body>
            </Card>
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
              <Button
                onClick={() => navigate("/tenant/bookings")}
                className="mb-3 mt-3"
              >
                Go to My bookings page &gt;
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentSuccess;
