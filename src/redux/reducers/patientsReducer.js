// reducers/patientsReducer.js
const initialState = [];

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PATIENTS':
      return action.payload;
    default:
      return state;
  }
};

export default patientsReducer;
