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
    <div className="details-container p-4 rounded-lg shadow-lg h-full">
      <h1 className="text-xl font-bold mb-4">Doctor Details</h1>
      {/* Doctor selection */}
      <select 
        value={selectedDoctorId} 
        onChange={handleDoctorSelectChange}
        className="input-field mb-4"
      >
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor.d_name}>
            {doctor.d_name}
          </option>
        ))}
      </select>
      {/* Appointment channel selection */}
      <select 
        value={channel} 
        onChange={handleChannelChange}
        className="input-field mb-4"
      >
        <option value="">Select Medium</option>
        <option value="clinic">Clinic</option>
        <option value="home">Home</option>
      </select>
      {/* Appointment title input */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Appointment Title"
        required
        className="input-field mb-4"
      />
    </div>
  );
};

export default DoctorDetails;
