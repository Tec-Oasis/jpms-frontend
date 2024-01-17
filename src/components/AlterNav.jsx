import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function AlterNav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem("user");
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Jazeera Real Estate</Navbar.Brand>
        <Nav className="me-auto">
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/contact")}>Contact</Button>
          {isAuthenticated && (
            <Button onClick={() => navigate("/tenant/bookings")}>
              My Bookings
            </Button>
          )}
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isAuthenticated ? (
              <Button style={{ marginLeft: 10 }} onClick={() => handleLogout()}>
                {" "}
                Logout{" "}
              </Button>
            ) : (
              <>
                <Button variant="dark" onClick={() => handleLogin()}>
                  {" "}
                  Login{" "}
                </Button>
                <Button style={{ marginLeft: 10 }}> Sign Up </Button>
              </>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AlterNav;
