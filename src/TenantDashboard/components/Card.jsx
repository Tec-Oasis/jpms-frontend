import React from "react";
import propertyData from "../../PropertyList/propertyData";
import "./card.css";
const Card = ({ property }) => {
 

  const { img, name, desc, rent, location, amenities } = property;

  return (
    <div className="card">
        <div className="card--container">
      <img src={img} alt={name} className="card--image" />
      <div className="card--content">
        <h2 className="card--title">{name}</h2>
        <p className="card--description">{desc}</p>
        <p className="card--rent">Rent: MYR {rent}</p>
        <p className="card--location">Location: {location}</p>
        <ul className="card--amenities">
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Card;
