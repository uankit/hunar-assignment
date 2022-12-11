import React from "react";

import Modal from "react-modal";
import getDistanceBetweenPoints from "../helper/calculateDistance";
import MapC from "./MapC";

const customStyles = {
  content: {
    display: "flex",
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalC({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function markAttendance() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function success(position) {
    const distance = getDistanceBetweenPoints(
      position.coords.latitude,
      position.coords.longitude,
      12.945,
      77.6798
    );
    console.log(distance);
    if (Math.round(distance) > 2000) {
      alert("Please be available at the location to mark your attendance");
    } else {
      alert("Attendance successfully marked");
    }
  }

  function error() {
    alert("Please provide location access to mark your attendance");
  }
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>
          <MapC />
        </div>
        <div className="attendance">
          <button onClick={() => markAttendance()}>Mark your Attendance</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalC;
