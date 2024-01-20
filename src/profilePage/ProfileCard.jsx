import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card } from "react-bootstrap";
export default function ProfileCard() {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem("user");
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={user.picture} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>

        <ul>
          <li>
            <b>username:</b> {user.nickname}
          </li>
          <li>
            <b>email:</b> {user.email}
          </li>
          <li>
            <b>auth0_id:</b> {user.sub}
          </li>
        </ul>

        <Button variant="primary" onClick={() => handleLogout()}>
          Log Out
        </Button>
      </Card.Body>
    </Card>
  );
}
