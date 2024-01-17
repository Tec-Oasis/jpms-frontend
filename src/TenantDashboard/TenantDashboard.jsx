import React from "react";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
//import Nav from '../components/Navbar';
import AlterNav from "../components/AlterNav";
import "./TenantDashboard.css";
const TenantDashboard = () => {
  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <AlterNav />
      </div>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default TenantDashboard;
