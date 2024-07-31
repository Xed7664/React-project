import React from "react";
import "./Citizen.css";

export default function Citizen({ citizen, index, toggleStatus }) {
  return (
    <>
      {index === 0 && (
        <div className="citizen-header">
          <span className="citizen-number">No.</span>
          <span className="citizen-name">Name</span>
          <span className="citizen-age">Age</span>
          <span className="citizen-address">Address</span>
          <span className="citizen-status">Status</span>
          <span className="citizen-action">Action</span>
        </div>
      )}
      <div className="citizen-container">
        <div className="citizen-details">
          <span className="citizen-number">{index + 1}.</span>
          <span className="citizen-name">{citizen.name}</span>
          <span className="citizen-age">{citizen.age}</span>
          <span className="citizen-address">{citizen.address}</span>
        </div>
        <div className="citizen-actions">
          <span className="citizen-status">{citizen.status}</span>
          <button className="status-button" onClick={toggleStatus}>
            Toggle Status
          </button>
        </div>
      </div>
    </>
  );
}
