import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import PropertyCard from '../PropertyCard/PropertyCard';
import { Col, Row, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import './PropertyMap.css';
import MarkerIcon from './MarkerIcon/MarkerIcon.png';

const libraries = ['places'];
const mapContainerStyle = {
  width: '97.5vw',
  height: '80vh',
  margin: '10px',
  borderRadius: '30px',
  marginTop: '120px',
};

const center = {
  lat: 25,
  lng: 55,
};



const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDVxOGQBiyLGzauNNOSkcnIm7Q3MjPo6Hc',
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolphin-app-7ux4p.ondigitalocean.app/properties');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPropertyData(data);
        const newMarkers = data.map((property) => ({
          lat: parseFloat(property.coordinate_x),
          lng: parseFloat(property.coordinate_y),
        }));
        setMarkers(newMarkers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onLoad = (map) => {
    setMap(map);
  };

  const handleMarkerClick = (marker) => {
    const selectedProperty = propertyData.find(
      (property) =>
        parseFloat(property.coordinate_x) === marker.lat &&
        parseFloat(property.coordinate_y) === marker.lng
    );
    setSelectedMarker(selectedProperty);
  };

  useEffect(() => {
    if (map) {
      markers.forEach((marker, index) => {
        const googleMarker = new window.google.maps.Marker({
          position: marker,
          map: map,
          icon: {
            url: MarkerIcon,
            scaledSize: new window.google.maps.Size(30, 37),
          },
        });

        googleMarker.addListener('click', () => {
          handleMarkerClick(marker);
        });
      });
    }
  }, [map, markers, propertyData]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="places-container">
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8.5} center={center} onLoad={onLoad}>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </div>

      {selectedMarker && (
        <Container fluid>
          <Row style={{ margin: '30px' }}>
            <Col md={3} style={{ marginBottom: '25px' }}>
              <PropertyCard property={selectedMarker} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;
