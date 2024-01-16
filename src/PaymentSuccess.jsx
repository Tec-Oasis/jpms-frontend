import { Container, Row, Col } from "react-bootstrap";
import AlterNav from "./components/AlterNav";

const PaymentSuccess = () => {
  return (
    <>
      <AlterNav />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div
              style={{ fontSize: "100px", color: "green", textAlign: "center" }}
            >
              ✔️
            </div>
            <h2 style={{ textAlign: "center" }}>Payment Success</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentSuccess;
