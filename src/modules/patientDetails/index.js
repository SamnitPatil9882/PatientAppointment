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
  const [originalData, setOriginalData] = useState([
    {
      id: 1,
      p_name: "John",
      email: "john",
      contact: "1234567890",
      location: "london",
    },
    {
      id: 2,
      p_name: "Mary",
      email: "mary",
      contact: "1234567890",
      location: "london",
    },
    {
      id: 3,
      p_name: "Peter",
      email: "peter",
      contact: "1234567890",
      location: "london",
    },
  ]);
  const [patientListArr, setPatientListArr] = useState(originalData);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  // Axios interceptor for request logging
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    });

    // Axios interceptor for response logging
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        console.log("Response:", response);
        return response;
      },
      (error) => {
        console.error("Error:", error);
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors when component unmounts
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []); // Empty dependency array ensures this effect runs only once

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
    onSuccess: (data) => {
      console.log(data);
      // Handle data here, if needed
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      // Handle error here
    },
  });

  useEffect(() => {
    refetch();
  }, [pageNumber, pageLimit]);

  const handleRowClick = (patient, index) => {
    setSelectedRowIndex(index);
    setPatientId(patient.id);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
    setSelectedRowIndex(null);
    setShowProfile(false);
    setPatientId(null);
    const filteredPatients = originalData.filter(
      (patient) =>
        patient.p_name.toLowerCase().includes(searchText) ||
        patient.contact.toLowerCase().includes(searchText)
    );
    setPatientListArr(filteredPatients);
  };

  const selectedPatient = patientListArr.find(
    (patient) => patient.id === patientId
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
        />
        {showProfile && patientId && <ProfileDetails patient={selectedPatient} />}
      </div>
    </div>
  );
}

export default ViewPatientProfile;
