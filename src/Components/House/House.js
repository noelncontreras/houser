import React from "react";

import "./House.css";

export default function House(props) {
    return (
        <>
            <div className="house-listing">
                <h6>{props.propertyName}</h6>
                <h6>{props.address}</h6>
                <h6>{props.city}</h6>
                <h6>{props.state}</h6>
                <h6>{props.zip}</h6>
                <br />
                <button>Cancel</button>
            </div>
            <br />
        </>
    )
}