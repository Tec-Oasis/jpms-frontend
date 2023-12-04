import React from "react";
import myImage from "../images/react-icon-small.png";
import "./style.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <img class="nav--icon" src={myImage} alt="" />
            <h3 className="nav--logo_text">Al jazeera company</h3>
            <ul class="nav-bar-homepage">
                <li style={{ marginRight: "20px" , marginTop: "10px"}}><Link to="/" className="icon"   style={{ textDecoration: "none", color: "#fff" }}>Home</Link></li>
                <li  style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Contact Us</a></li>
                <li style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Properties</a></li>
                <Link to="/login">
                <li ><button class="signup_button_homepage" href="#">Sign In</button> </li>
                </Link>
                
            </ul>
        </nav>
    )
}

