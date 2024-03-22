// actions.js
import axios from 'axios';

export const fetchDoctors = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/doctors');
    dispatch({ type: 'SET_DOCTORS', payload: response.data });
  } catch (error) {
    console.error('Error fetching doctors:', error);
  }
};

export const fetchPatients = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/patients');
    dispatch({ type: 'SET_PATIENTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching patients:', error);
  }
};
