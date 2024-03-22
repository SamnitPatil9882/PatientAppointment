import React, { useState, useEffect } from "react";
import DoctorDetails from "./components/doctorDetails";
import AppointmentDetails from "./components/appointDetails";
import VitalInfo from "./components/vitalInfo";
import Buttons from "./components/buttonGroup";
import axios from "axios";

function AppointmentBooking() {
  // State variables for managing data and UI state
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    appoint_channel: "",
    appoint_title: "",
    appoint_time: "",
    appoint_date: "",
    appoint_type: "",
    walk_in_appoint: false,
    note_for_dr: "",
  });
  const [vitalInfo, setVitalInfo] = useState({
    bp: "",
    temp: "",
    height: "",
    weight: "",
    spo2: "",
    pulse_rate: "",
    reason: "",
    note_for_dr: "",
  });

  // Fetch doctors and patients data from the server
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8000/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchDoctors();
    fetchPatients();
  }, []);

  // Event handler to handle doctor selection
  const handleDoctorSelect = (doctorId) => {
    const selectedDoc = doctors.find((doc) => doc._id === doctorId);
    setSelectedDoctor(selectedDoc);
  };

  // Event handler to handle patient selection
  const handlePatientSelect = (patientId) => {
    const selectedPat = patients.find((pat) => pat._id === patientId);
    setSelectedPatient(selectedPat);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <DoctorDetails doctors={doctors} onSelectDoctor={handleDoctorSelect} />
        </div>
        <div>
          <AppointmentDetails patients={patients} onSelectPatient={handlePatientSelect} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <VitalInfo />
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;
