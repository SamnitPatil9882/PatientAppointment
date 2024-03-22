// store.js
import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./slices/doctorsSlice";
import patientsReducer from "./slices/patientsSlice";
import selectedDoctorReducer from "./slices/selectedDoctorSlice";
import selectedPatientReducer from "./slices/selectedPatientSlice";
import appointmentDetailsReducer from "./slices/appointmentDetailsSlice";
import vitalInfoReducer from "./slices/vitalInfoSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    patients: patientsReducer,
    selectedDoctor: selectedDoctorReducer,
    selectedPatient: selectedPatientReducer,
    appointmentDetails: appointmentDetailsReducer,
    vitalInfo: vitalInfoReducer,
  },
});
// slices/doctorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: [],
  reducers: {
    setDoctors: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDoctors } = doctorsSlice.actions;
export default doctorsSlice.reducer;
