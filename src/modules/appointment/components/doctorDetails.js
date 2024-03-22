import React from 'react';

const DoctorDetails = ({ doctors, onSelectDoctor, appointChannel, appointTitle, onAppointChannelChange, onAppointTitleChange }) => {
  return (
    <div className="details-container">
      <h1>Doctor Details</h1>
      <select onChange={onSelectDoctor}>
        {doctors.map(doctor => (
          <option key={doctor._id} value={doctor._id}>
            {doctor.d_name}
          </option>
        ))}
      </select>
      <input 
        type="text"
        value={appointChannel}
        onChange={onAppointChannelChange}
        placeholder="Appointment Channel"
        required 
      />
      <input 
        type="text"
        value={appointTitle}
        onChange={onAppointTitleChange}
        placeholder="Appointment Title"
        required 
      />
    </div>
  );
};

export default DoctorDetails;
