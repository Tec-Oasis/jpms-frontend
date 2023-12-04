import React from "react";
import Nav from "../components/Navbar";
import HomeVid from "./homepagevid.mp4";
import "./homepage.css"; 

export default function Homepage() {
  return (
    <div >
      <Nav />
      <div className="video-container">
        <video src={HomeVid} autoPlay loop muted className="fullscreen-video" />
        <button href="#" className="video-button">Contact Us</button>
      </div>
    </div>
  );
}
