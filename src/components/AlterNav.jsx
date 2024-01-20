import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

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
    <Navbar bg="primary" data-bs-theme="light">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          Jazeera Real Estate
        </Navbar.Brand>
        <Nav className="me-auto">
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/propertyMap")}>Property Map</Button>
          <Button onClick={() => navigate("/contact")}>Contact</Button>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {!isAuthenticated && (
              <>
                <Button variant="dark" onClick={() => handleLogin()}>
                  {" "}
                  Login{" "}
                </Button>
                <Button
                  onClick={() => handleLogin()}
                  style={{ marginLeft: 10 }}
                >
                  {" "}
                  Sign Up{" "}
                </Button>
              </>
            )}
          </Navbar.Text>
          {isAuthenticated && (
            <NavDropdown
              style={{ color: "white" }}
              title="My Account"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => navigate("/profile")}>
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/tenant/bookings")}>
                My Bookings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleLogout()}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AlterNav;
