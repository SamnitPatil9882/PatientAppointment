import React from 'react';

const VitalInfo = ({ bp, temp, height, weight, spo2, pulseRate, reason, noteForDr, onInputChange }) => {
  return (
    <div className="details-container">
      <h1>Vital Information</h1>
      <input 
        type="number" 
        name="bp" 
        value={bp} 
        onChange={onInputChange} 
        placeholder="Blood Pressure" 
        required 
      />
      <input 
        type="number" 
        name="temp" 
        value={temp} 
        onChange={onInputChange} 
        placeholder="Temperature" 
        required 
      />
      <input 
        type="number" 
        name="height" 
        value={height} 
        onChange={onInputChange} 
        placeholder="Height" 
        required 
      />
      <input 
        type="number" 
        name="weight" 
        value={weight} 
        onChange={onInputChange} 
        placeholder="Weight" 
        required 
      />
      <input 
        type="number" 
        name="spo2" 
        value={spo2} 
        onChange={onInputChange} 
        placeholder="SpO2" 
        required 
      />
      <input 
        type="number" 
        name="pulseRate" 
        value={pulseRate} 
        onChange={onInputChange} 
        placeholder="Pulse Rate" 
        required 
      />
      <input 
        type="text" 
        name="reason" 
        value={reason} 
        onChange={onInputChange} 
        placeholder="Reason for Appointment" 
        required 
      />
      <select 
        name="noteForDr" 
        value={noteForDr} 
        onChange={onInputChange} 
      >
        <option value="lmn">LMN</option>
        <option value="jkl">JKL</option>
        <option value="asw">ASW</option>
      </select>
    </div>
  );
};

export default VitalInfo;
