import React, { useState } from "react";

function Patientlist({ patientListArr, setPatientId, setShowProfile ,handleRowClick,setSelectedRowIndex,selectedRowIndex}) {
 

  return (
    <div className="flex flex-col border-8 items-center justify-center">
      <div className="w-full">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider"
              >
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(patientListArr) &&
              patientListArr.map((patient, index) => (
                <tr
                  key={index}
                  className={
                    index === selectedRowIndex ? "bg-blue-200" : "bg-white"
                  }
                  onClick={() => {
                    handleRowClick(patient,index);
                    setShowProfile(false);
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">
                    {patient.p_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">
                    {patient.contact}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex bg-gray-100 py-2">
        <div className="w-1/2 px-4 flex items-center justify-start text-gray-700">
          {selectedRowIndex !== null ? "1 row selected" : ""}
        </div>
        <div className="flex items-center justify-end w-1/2 px-4">
          <div className="mr-2 text-gray-700">6 - 10 of 20 </div>
          <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
            prev
          </button>
          <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Patientlist;
