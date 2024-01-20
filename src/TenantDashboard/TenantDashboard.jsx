import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
//import Nav from '../components/Navbar';
import AlterNav from "../components/AlterNav";
import "./TenantDashboard.css";
const TenantDashboard = () => {
  const { id } = useParams();
  const { user: loggedUser } = useAuth0();

  const [tenantInfo, setTenantInfo] = useState({});
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${import.meta.env.VITE_API_SERVER_URL}/properties/${id}`;
        const response = await axios.get(url);
        console.log(response.data);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    const getProfile = async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_SERVER_URL
        }/customer_account/getTenantInfo?auth0_id=${loggedUser.sub}`
      );
      setTenantInfo(response.data);
    };

    fetchData();
    getProfile();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <AlterNav />
      </div>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content property={property} />
          <Profile tenantInfo={tenantInfo} />
        </div>
      </div>
    </>
  );
};

export default TenantDashboard;
