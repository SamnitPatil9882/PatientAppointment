import React from "react";

const VitalInfo = ({
  bp,
  temp,
  height,
  weight,
  spo2,
  pulseRate,
  reason,
  noteForDr,
  handleBpChange,
  handleTempChange,
  handleHeightChange,
  handleWeightChange,
  handleSpo2Change,
  handlePulseRateChange,
  handleReasonChange,
  handleNoteForDrChange,
}) => {
  return (
    <div className="details-container bg-gray-100 p-4 rounded-lg shadow-lg ">
      <h1 className="text-xl font-bold mb-4">Vital Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <input
            type="number"
            id="bp"
            name="bp"
            value={bp}
            onChange={handleBpChange}
            placeholder="Blood Pressure"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            id="temp"
            name="temp"
            value={temp}
            onChange={handleTempChange}
            placeholder="Temperature"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={handleHeightChange}
            placeholder="Height"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Weight"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            id="spo2"
            name="spo2"
            value={spo2}
            onChange={handleSpo2Change}
            placeholder="SpO2"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            id="pulseRate"
            name="pulseRate"
            value={pulseRate}
            onChange={handlePulseRateChange}
            placeholder="Pulse Rate"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReasonChange}
            placeholder="Reason for Appointment"
            required
            className="input-field w-full h-12 px-4"
          />
        </div>
        <div className="mb-2">
          <select
            id="noteForDr"
            name="noteForDr"
            value={noteForDr}
            onChange={handleNoteForDrChange}
            className="input-field w-full h-12 px-4"
          >
            <option value="lmn">LMN</option>
            <option value="jkl">JKL</option>
            <option value="asw">ASW</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VitalInfo;
