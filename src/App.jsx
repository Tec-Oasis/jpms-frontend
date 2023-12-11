import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropertyCard from './PropertyList/PropertyCard/PropertyCard.jsx';
import propertyData from './PropertyList/propertyData.js';
import PropertyList from './PropertyList/PropertyList.jsx';
import './App.css';
import PropertyMap from './PropertyList/PropertyMap/PropertyMap.jsx';
import Homepage from './Home_page/homepage.jsx';
import Login from './Login/login.jsx';


function App() {
  return (
    <>
      <PropertyList/>
    </>
  )
}
export default App