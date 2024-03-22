import React from 'react';

const AppointmentDetails = ({ patients, onSelectPatient, apPid, walkInAppoint, appointTime, appointDate, appointType, onApPidChange, onWalkInAppointChange, onAppointTimeChange, onAppointDateChange, onAppointTypeChange }) => {
  return (
    <div className="details-container">
      <h2>Appointment Details</h2>
      <select onChange={onSelectPatient}>
        {patients.map(patient => (
          <option key={patient._id} value={patient._id}>
            {patient.p_name}
          </option>
        ))}
      </select>
      {/* Other fields such as ap_pid, walk_in_appoint, appoint_time, appoint_date, appoint_type */}
      <input 
        type="text"
        value={apPid}
        onChange={onApPidChange}
        placeholder="Appointment Patient ID"
        required 
      />
      <input 
        type="checkbox"
        checked={walkInAppoint}
        onChange={onWalkInAppointChange}
      />
      <select 
        value={appointTime}
        onChange={onAppointTimeChange}
        required 
      >
        <option value="30 min slot">30 Min Slot</option>
        <option value="1 hr slot">1 Hr Slot</option>
        <option value="2 hr slot">2 Hr Slot</option>
      </select>
      <input 
        type="date"
        value={appointDate}
        onChange={onAppointDateChange}
        required 
      />
      <select 
        value={appointType}
        onChange={onAppointTypeChange}
        required 
      >
        <option value="abc">ABC</option>
        <option value="pqr">PQR</option>
        <option value="xyz">XYZ</option>
      </select>
    </div>
  );
};

export default AppointmentDetails;
