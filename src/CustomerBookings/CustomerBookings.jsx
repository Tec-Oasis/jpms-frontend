import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import PropertyCard from "./PropertyCard/PropertyCard";
import AlterNav from "../components/AlterNav";
import { PageLoader } from "../components/page-loader";
import { useEffect, useState } from "react";

// const propertyData = [
//   {
//     name: "Property 1",
//     starting_date: "24 Apr 2023",
//     ending_date: "24 October 2023",
//     status: "Rent Due",
//     address: "Dubai",
//     rent: 1200,
//   },
//   {
//     name: "Property 2",
//     starting_date: "10 Jan 2023",
//     ending_date: "10 July 2023",
//     status: "Occupied",
//     address: "New York",
//     rent: 2000,
//   },
//   {
//     name: "Property 3",
//     starting_date: "15 May 2023",
//     ending_date: "15 November 2023",
//     status: "Vacant",
//     address: "London",
//     rent: 1500,
//   },
//   {
//     name: "Property 4",
//     starting_date: "1 Sep 2023",
//     ending_date: "1 March 2024",
//     status: "Under Maintenance",
//     address: "Paris",
//     rent: 1800,
//   },
// ];

const CustomerBookings = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } =
    useAuth0();

  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log("Access Token:", token);

        const response = await axios.get(
          `${import.meta.env.VITE_API_SERVER_URL}/my_contracts?auth0_id=${
            user.sub
          }`
        );
        setPropertyData(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    getProperties();
  }, [isAuthenticated]);

  if (isLoading) {
    return <PageLoader />;
  }

  return isAuthenticated ? (
    <>
      <AlterNav />
      <>
        <Container>
          <p className="h1" style={{ padding: "16px 0" }}>
            My Bookings
          </p>
          <p className="h3" style={{ marginBottom: "24px" }}>
            Active Contracts
          </p>
          {propertyData.map((property) => (
            <div key={property.name} style={{ marginBottom: "24px" }}>
              <Link style={{ textDecoration: "none" }} to={`/tenantDashboard/${property.property_id}`}>
                <PropertyCard property={property} />
              </Link>
            </div>
          ))}
        </Container>
      </>
    </>
  ) : (
    <>
      <AlterNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: 30 }}>You are not logged in</h1>
      </div>
    </>
  );
};

export default CustomerBookings;
