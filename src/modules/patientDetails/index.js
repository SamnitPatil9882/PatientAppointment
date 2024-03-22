import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Patientlist from "./components/Patientlist";
import ProfileDetails from "./components/ProfileDetails";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

function ViewPatientProfile() {
  const [patientId, setPatientId] = useState(1);
  const [showProfile, setShowProfile] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1)
  const [originalData, setOriginalData] = useState();
  const [patientListArr, setPatientListArr] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const { data, error, isLoading, refetch } = useQuery({
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:8000/patient/", {
          params: {
            page: pageNumber,
            limit: pageLimit,
          },
          withCredentials: true,
        });
        console.log("rd: ", response.data);
        return response.data; // Return data to be handled in onSuccess
      } catch (error) {
        console.log("err: ", error);
        throw error; // Rethrow error to be handled in onError
      }
    },
    queryKey: ["patienList"],
  });

  const handleNextClick = () =>{
    if(pageNumber)
    setPageNumber(pageNumber + 1);
  }

  const handlePrevClick = () =>{
    if(pageNumber>1)
    setPageNumber(pageNumber - 1);
  }

  useEffect(() => {
    if (data && data.patients) {
      setOriginalData(data.patients);
      setPatientListArr(data.patients); // Update patientListArr with new data
      setPageCount(data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [pageNumber, pageLimit]);

  const handleRowClick = (patient, index) => {
    setSelectedRowIndex(index);
    setPatientId(patient._id);
  };

  const handleSearchChange = (e) => {
    try {
      const searchText = e.target.value.toLowerCase();
      setSearchText(searchText);
      setSelectedRowIndex(null);
      setShowProfile(false);
      setPatientId(null);
      const filteredPatients = originalData.filter(
        (patient) =>
          patient.p_name.toLowerCase().includes(searchText) ||
          (typeof patient.contact === 'string' && patient.contact.includes(searchText))
      );
      setPatientListArr(filteredPatients);
    } catch (err) {
      console.log("search err: ", err);
    }
  };

  const selectedPatient = patientListArr.find(
    (patient) => patient._id === patientId
  );

  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center">
      <div className="w-1/2 bg-blue-200 m-10 border-2 shadow-md">
        <Search
          setShowProfile={setShowProfile}
          patientListArr={patientListArr}
          handleSearchChange={handleSearchChange}
        />
        <Patientlist
          patientListArr={patientListArr}
          setPatientId={setPatientId}
          setShowProfile={setShowProfile}
          handleRowClick={handleRowClick}
          selectedRowIndex={selectedRowIndex}
          setSelectedRowIndex={setSelectedRowIndex}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          pageNumber={pageNumber}
          pageCount={pageCount}
        />
        {showProfile && patientId && <ProfileDetails patient={selectedPatient} />}
      </div>
    </div>
  );
}

export default ViewPatientProfile;
