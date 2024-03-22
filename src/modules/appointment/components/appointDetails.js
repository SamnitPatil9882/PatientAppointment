import React from "react";

const AppointmentDetails = ({
  patients,
  onSelectPatient,
  apPid,
  walkInAppoint,
  appointTime,
  appointDate,
  appointType,
  onApPidChange,
  onWalkInAppointChange,
  onAppointTimeChange,
  onAppointDateChange,
  onAppointTypeChange,
  handleAppointTimeChange,
  handleAppointDateChange,
  handleAppointTypeChange,
  appointmentDetails,
  handleonWalkInAppointChange



}) => {
  // console.log("patients: " + patients);
  return (
    <div className="details-container bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Appointment Details</h2>
      <div className="mb-4 flex">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="patientName"
        >
          Patient Name:
        </label>
        <div className="text-gray-800 font-semibold">{patients?.p_name}</div>
      </div>
      <div className="mb-4 flex">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="patientId"
        >
          Patient ID:
        </label>
        <div className="text-gray-800 font-semibold">{patients?._id}</div>
      </div>
      <div className="mb-4 flex">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={walkInAppoint}
            onChange={handleonWalkInAppointChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Walk-in Appointment</span>
        </label>
      </div>
      <div className="flex justify-evenly">
        <div className="mb-4 flex">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="appointmentTime"
          >
            Time:
          </label>
          <select
            id="appointmentTime"
            value={appointTime}
            onChange={handleAppointTimeChange}
            className="form-select w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="30 min slot">30 Min Slot</option>
            <option value="1 hr slot">1 Hr Slot</option>
            <option value="2 hr slot">2 Hr Slot</option>
          </select>
        </div>
        <div className="mb-4 flex">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="appointmentDate"
          >
            Date:
          </label>
          <input
            id="appointmentDate"
            type="date"
            value={appointDate}
            onChange={handleAppointDateChange}
            className="form-input w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="mb-4 flex">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="appointmentType"
        >
          Type:
        </label>
        <select
          id="appointmentType"
          value={appointType}
          onChange={handleAppointTypeChange}
          className="form-select w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          required
        >
          <option value="abc">ABC</option>
          <option value="pqr">PQR</option>
          <option value="xyz">XYZ</option>
        </select>
      </div>
    </div>
  );
};

export default AppointmentDetails;
