import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import "./profileForm.css";
import { useAuth0 } from "@auth0/auth0-react";

const BookingDetails = () => {
  const { user: loggedUser } = useAuth0();
  const [tenantInfo, setTenantInfo] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_SERVER_URL
        }/customer_account/getTenantInfo?auth0_id=${loggedUser.sub}`
      );
      setTenantInfo(response.data);
    };
    getProfile();
  }, [loggedUser]);

  const handleUpdateProfile = async () => {
    const icNumber = document.getElementById("icNumber").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (icNumber === "") {
      alert("Please enter your IC Number");
      return;
    }

    if (phoneNumber === "") {
      alert("Please enter your phone number");
      return;
    }

    const data = {
      auth0_id: loggedUser.sub,
      ic_no: icNumber,
      phone_number: phoneNumber,
    };

    await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/customer_account/updateProfile`,
      data
    );

    alert(`Your details are saved successfully!`);
  };

  return (
    <>
      <>
        <Container fluid="lg">
          <Row>
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
                            disabled
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
                        value={tenantInfo && tenantInfo.ic_no}
                        onChange={(e) =>
                          setTenantInfo({
                            ...tenantInfo,
                            ic_no: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        id="phoneNumber"
                        placeholder="Please enter your phone number"
                        value={tenantInfo && tenantInfo.phone_number}
                        onChange={(e) =>
                          setTenantInfo({
                            ...tenantInfo,
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <Button onClick={() => handleUpdateProfile()}>
                    Update Profile
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
