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
  onInputChange,
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
    <div className="details-container bg-gray-100 p-4 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Vital Information</h1>
      <div className="input-group flex flex-wrap">
        <div className="w-full mb-2">
          <label htmlFor="bp" className="input-label">
            Blood Pressure:
          </label>
          <input
            type="number"
            id="bp"
            name="bp"
            value={bp}
            onChange={handleBpChange}
            placeholder="Blood Pressure"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="temp" className="input-label">
            Temperature:
          </label>
          <input
            type="number"
            id="temp"
            name="temp"
            value={temp}
            onChange={handleTempChange}
            placeholder="Temperature"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="height" className="input-label">
            Height:
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={handleHeightChange}
            placeholder="Height"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="weight" className="input-label">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Weight"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="spo2" className="input-label">
            SpO2:
          </label>
          <input
            type="number"
            id="spo2"
            name="spo2"
            value={spo2}
            onChange={handleSpo2Change}
            placeholder="SpO2"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="pulseRate" className="input-label">
            Pulse Rate:
          </label>
          <input
            type="number"
            id="pulseRate"
            name="pulseRate"
            value={pulseRate}
            onChange={handlePulseRateChange}
            placeholder="Pulse Rate"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="reason" className="input-label">
            Reason for Appointment:
          </label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReasonChange}
            placeholder="Reason for Appointment"
            required
            className="input-field w-full"
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="noteForDr" className="input-label">
            Note for Doctor:
          </label>
          <select
            id="noteForDr"
            name="noteForDr"
            value={noteForDr}
            onChange={handleNoteForDrChange}
            className="input-field w-full"
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
