import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PropertyCard from "../PropertyCard/PropertyCard";
import { Col } from "react-bootstrap";
import AlterNav from "../../components/AlterNav";
import MarkerIcon from "./MarkerIcon/MarkerIcon.png";

const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
  margin: "10px",
  borderRadius: "30px",
  marginTop: "50px",
  display: "flex",
  justifyContent: "left",
};

const center = {
  lat: 25.25,
  lng: 55.25,
};

//AIzaSyDVxOGQBiyLGzauNNOSkcnIm7Q3MjPo6Hc

const PropertyMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVxOGQBiyLGzauNNOSkcnIm7Q3MjPo6Hc",
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_SERVER_URL}/properties`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onLoad = (map) => {
    setMap(map);
  };

  const handleMarkerClick = (property) => {
    setSelectedMarker(property);
  };

  useEffect(() => {
    if (map) {
      propertyData.forEach((property) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: parseFloat(property.coordinate_x),
            lng: parseFloat(property.coordinate_y),
          },
          map: map,
          icon: {
            url: MarkerIcon,
            scaledSize: new window.google.maps.Size(30, 37),
          },
        });

        marker.addListener("click", () => {
          handleMarkerClick(property);
        });
      });
    }
  }, [map, propertyData]);
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <AlterNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10.5}
          center={center}
          onLoad={onLoad}
        >
          {/* Marker rendering is now handled in useEffect */}
        </GoogleMap>

        {selectedMarker && (
          <Col md={3}>
            <PropertyCard property={selectedMarker} />
          </Col>
        )}
      </div>
    </>
  );
};

export default PropertyMap;
