import React, { useState } from "react";

const DoctorDetails = ({
  doctors,
  onSelectDoctor,
  appointChannel,
  appointTitle,
  onAppointChannelChange,
  onAppointTitleChange,
  channel,
  title,
  handleChannelChange,
  handleTitleChange,
  selectedDoctorId,  
  setSelectedDoctorId,
  handleDoctorSelectChange
}) => {
  // console.log("doctors: ", doctors);
  return (
    <div className="details-container">
      <h1>Doctor Details</h1>
      {/* Doctor selection */}
      <select value={selectedDoctorId} onChange={handleDoctorSelectChange}>
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor.d_name}>
            {doctor.d_name}
          </option>
        ))}
      </select>
      {/* Appointment channel selection */}
      <select value={channel} onChange={handleChannelChange}>
        <option value="">select medium</option>
        <option value="clinic">clinic</option>
        <option value="home">home</option>
      </select>
      {/* Appointment title input */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Appointment Title"
        required
      />
    </div>
  );
};

export default DoctorDetails;
