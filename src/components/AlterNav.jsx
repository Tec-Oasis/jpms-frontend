import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function AlterNav() {
  const { loginWithRedirect, logout } = useAuth0();
  
  // check isLoggedIn in localstorage
  const isLogged = localStorage.getItem("isLoggedIn");

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
    logout({ logoutParams: { returnTo: window.location.origin } })
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Jazeera Real Estate</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {isLogged && <Nav.Link href="/tenant/bookings">My Bookings</Nav.Link>}
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isLogged ? (
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
