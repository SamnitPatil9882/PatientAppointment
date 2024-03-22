import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileDetails({ patient }) {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Profile Details</h1>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-28 w-28 rounded-full overflow-hidden">
            <img
              src="avatar.png"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-6">
            <div className="text-xl font-semibold">{patient?.p_name}</div>
            <div className="flex mt-2">
              <p className="text-gray-600 font-medium mr-4">Email:</p>
              <p>{patient?.email}</p>
            </div>
            <div className="flex mt-2">
              <p className="text-gray-600 font-medium mr-4">Contact:</p>
              <p>{patient?.contact}</p>
            </div>
            <div className="flex mt-2">
              <p className="text-gray-600 font-medium mr-4">Location:</p>
              <p>{patient?.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => navigate(`/appoint/${patient._id}`)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default ProfileDetails;
    