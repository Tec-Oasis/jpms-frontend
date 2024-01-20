/* eslint-disable react/prop-types */
import ProfileHeader from "./ProfileHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faBed, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "./profile.css";

import { useAuth0 } from "@auth0/auth0-react";
const Profile = ({ tenantInfo }) => {

  const { id } = useParams();
  const { user } = useAuth0();
  console.log("tenantInfo", tenantInfo);
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <div>
            <img
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              src={user.picture}
              alt="avatar"
            />
          </div>
        </div>
        <h3 className="username">{user.name}</h3>
        <div className="userinfo">
          <p>
            <FontAwesomeIcon icon={faBuilding} /> Property ID:{" "}
            {id}
          </p>
          <p>
            <FontAwesomeIcon icon={faBed} /> Customer ID: {tenantInfo.customer_id}
          </p>
          <p>
            <FontAwesomeIcon icon={faIdCard} /> Email : {tenantInfo.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faIdCard} /> IC No: : {tenantInfo.ic_no}
          </p>
          <p>
            <FontAwesomeIcon icon={faIdCard} /> Phone Number : {tenantInfo.phone_number}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
