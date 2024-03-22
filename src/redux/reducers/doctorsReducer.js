// reducers/doctorsReducer.js
const initialState = [];

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCTORS':
      return action.payload;
    default:
      return state;
  }
};

export default doctorsReducer;
