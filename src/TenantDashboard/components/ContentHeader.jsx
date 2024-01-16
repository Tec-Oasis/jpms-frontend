import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const ContentHeader = () => {
    return (
        <div className="content--header">
            <FontAwesomeIcon icon={faHome} size="2x" className="header--icon" />
            <h1 className="header--title">Rented Property</h1>
        </div>
    );
};

export default ContentHeader;
