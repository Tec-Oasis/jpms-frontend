import React from "react";
import ProfileHeader from "./ProfileHeader";
import TenantData from "../TenantInfo/tenetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faBed, faIdCard } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
const Profile=()=>{
    return (
        <div className="profile">
            <ProfileHeader/>
            <div className="user--profile">
                <div className="user--detail">
                <div className="profile-picture">
            <FontAwesomeIcon icon={faUser} size="6x" className="user--icon" />
            
          </div>
          
            
          
                </div>
                <h3 className="username">{TenantData.Name}</h3>
                <div className="userinfo">
                <p>
                <FontAwesomeIcon icon={faBuilding} /> Property ID: {TenantData.propertyId}
              </p>
              <p>
                <FontAwesomeIcon icon={faBed} /> Room ID: {TenantData.roomId}
              </p>
              <p>
                <FontAwesomeIcon icon={faIdCard} /> Tenant ID: {TenantData.tenantId}
              </p>
            </div>
            </div>
            
        </div>
        

    )
    
}
export default Profile;