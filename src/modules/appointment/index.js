import React, { useState, useEffect } from "react";
import DoctorDetails from "./components/doctorDetails";
import AppointmentDetails from "./components/appointDetails";
import VitalInfo from "./components/vitalInfo";
import Buttons from "./components/buttonGroup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

function AppointmentBooking() {
  const { id } = useParams(); // Accessing the route parameters
  // console.log("id: ", id);

  const [appointmentDetails, setAppointmentDetails] = useState({
    // State for appointment details
    appoint_channel: "",
    appoint_title: "",
    appoint_time: "",
    appoint_date: "",
    appoint_type: "",
    walk_in_appoint: false,
    note_for_dr: "",
  });

  const [vitalInfo, setVitalInfo] = useState({
    // State for vital information
    bp: "",
    temp: "",
    height: "",
    weight: "",
    spo2: "",
    pulse_rate: "",
    reason: "",
    note_for_dr: "",
  });

  const [walkInAppoint, setWalkInAppoint] = useState(false);
  const [appointTime, setAppointTime] = useState("30 min slot");
  const [appointDate, setAppointDate] = useState("");
  const [appointType, setAppointType] = useState("abc");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
const [onWalkInAppointChange,setonWalkInAppointChange] = useState(false)

  const [channel, setChannel] = useState("clinic");
  const [title, setTitle] = useState("");

  const handleWalkInAppointChange = (e) => {
    setonWalkInAppointChange
    (e.target.checked);
    console.log("Walk-in Appointment:", e.target.checked);
  };

  const handleAppointTimeChange = (e) => {
    setAppointTime(e.target.value);
    console.log("Appointment Time:", e.target.value);
  };

  const handleAppointDateChange = (e) => {
    setAppointDate(e.target.value);
    console.log("Appointment Date:", e.target.value);
  };

  const handleAppointTypeChange = (e) => {
    setAppointType(e.target.value);
    console.log("Appointment Type:", e.target.value);
  };

  const handleChannelChange = (e) => {
    const value = e.target.value;
    setChannel(value);
    console.log("Appointment Channel:", value);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    console.log("Appointment Title:", value);
  };

  const handleDoctorSelectChange = (e) => {
    const selectedDoctorId = e.target.value;
    setSelectedDoctorId(selectedDoctorId);
    console.log("Selected Doctor ID:", selectedDoctorId);
  };


  ///vital infor

  const [bp, setBp] = useState('');
  const [temp, setTemp] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [spo2, setSpo2] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [reason, setReason] = useState('');
  const [noteForDr, setNoteForDr] = useState('');

  const handleBpChange = (e) => {
    setBp(e.target.value);
    console.log(e.target.value);
    // onInputChange(e); // Call the parent function to handle input change
  };

  const handleTempChange = (e) => {
    setTemp(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handleSpo2Change = (e) => {
    setSpo2(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handlePulseRateChange = (e) => {
    setPulseRate(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

  const handleNoteForDrChange = (e) => {
    setNoteForDr(e.target.value);
    console.log(e.target.value);
    // onInputChange(e);
  };

/////


  const {
    data: patientInfodata,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => {
      try {
        console.log("in usequery:");
        const response = await axios.get(
          `http://localhost:8000/patient/${id}`,
          {
            withCredentials: true,
          }
        );
        console.log("patient info: ", response.data);
        return response.data;
      } catch (error) {
        console.log("Error fetching patient info:", error);
        throw error;
      }
    },
    queryKey: ["patienInfo"],
  });


  const {
    data: doctorsInfoData,
    error: doctorError,
    isLoading: doctorIsloading,
    refetch: doctorRefetch,
  } = useQuery({
    queryFn: async () => {
      try {
        console.log("in usequery doctor:");
        const response = await axios.get(
          `http://localhost:8000/doctor/appointment`,
          {
            withCredentials: true,
          }
        );
        console.log("doctor info: ", response.data);
        return response.data;
      } catch (error) {
        console.log("Error fetching doctor info:", error);
        throw error;
      }
    },
    queryKey: ["doctorInfo"],
  });

  const {mutate:createAppointment} =  useMutation({
    mutationFn: async () => {
      try {
        console.log("in usequery:",patientInfodata.p_name);
        const patientName=patientInfodata.p_name;
        const response = await axios.post(
          `http://localhost:8000/appointment/`,
          {
            d_name: selectedDoctorId,
            appoint_channel: channel,
            appoint_title: title,
            p_name: patientName ?? "Unknown Patient",
            ap_pid: id,
            appoint_date: appointDate,
            appoint_type: appointType,
            appoint_time: appointTime,
            bp: bp,
            temp: temp,
            height: height,
            weight: weight,
            spo2: spo2,
            pulse_rate: pulseRate,
            reason: reason,
            note_for_dr: noteForDr,
          },
          {
            withCredentials: true,
          }
        );
        console.log("Appointment creation response: ", response.data);
        return response.data;
      } catch (error) {
        console.log("Error creating appointment:", error);
        throw error;
      }
    },
    mutationKey: ["createAppointment"],
    onSuccess(data){
      console.log(data);
      // Handle success response
    },
    onError(error){
      console.log(error);
      // Handle error response
    }
  });
  // Reset form fields
  const onReset = () => {
    // Reset appointment details
    setAppointmentDetails({
      appoint_channel: "",
      appoint_title: "",
      appoint_time: "",
      appoint_date: "",
      appoint_type: "",
      walk_in_appoint: false,
      note_for_dr: "",
    });

    // Reset vital information
    setVitalInfo({
      bp: "",
      temp: "",
      height: "",
      weight: "",
      spo2: "",
      pulse_rate: "",
      reason: "",
      note_for_dr: "",
    });

    // Reset other state values
    setWalkInAppoint(false);
    setAppointTime("30 min slot");
    setAppointDate("");
    setAppointType("abc");
    setSelectedDoctorId("");
    setChannel("clinic");
    setTitle("");
    setBp('');
    setTemp('');
    setHeight('');
    setWeight('');
    setSpo2('');
    setPulseRate('');
    setReason('');
    setNoteForDr('');
    setonWalkInAppointChange(false);
  };

  const onSubmit = () => {
    createAppointment();
  }
  const handleDoctorSelect = (doctorId) => {};

  const handlePatientSelect = (patientId) => {};

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-4">
        {doctorsInfoData && (
          <div>
            <DoctorDetails
              doctors={doctorsInfoData}
              onSelectDoctor={handleDoctorSelect}
              handleChannelChange={handleChannelChange}
              handleTitleChange={handleTitleChange}
              channel={channel}
              title={title}
              selectedDoctorId={selectedDoctorId}
              setSelectedDoctorId={setSelectedDoctorId}
              handleDoctorSelectChange={handleDoctorSelectChange}
            />
          </div>
        )}
        {!isLoading &&
          patientInfodata &&
          Object.keys(patientInfodata).length > 0 && (
            <div>
              <AppointmentDetails
                patients={patientInfodata}
                onSelectPatient={handlePatientSelect}
                handleWalkInAppointChange={handleWalkInAppointChange}
                handleAppointTimeChange={handleAppointTimeChange}
                handleAppointDateChange={handleAppointDateChange}
                handleAppointTypeChange={handleAppointTypeChange}
                appointmentDetails={appointmentDetails}
                onWalkInAppointChange={onWalkInAppointChange}
                handleonWalkInAppointChange={handleWalkInAppointChange}
              />
            </div>
          )}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <VitalInfo 
          handleBpChange={handleBpChange}
          handleTempChange={handleTempChange}
          handleHeightChange={handleHeightChange}
          handleWeightChange={handleWeightChange}
          handleSpo2Change={handleSpo2Change}
          handlePulseRateChange={handlePulseRateChange}
          handleReasonChange={handleReasonChange}
          handleNoteForDrChange={handleNoteForDrChange}
          bp={bp}
          temp={temp}
          height={height}

          />
        </div>
        <div>
          <Buttons 
            createAppointment={createAppointment}
            onReset={onReset}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      appointement page
    </div>
  );
}

export default AppointmentBooking;
