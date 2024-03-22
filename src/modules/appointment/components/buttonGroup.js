import React from "react";

const ButtonGroup = ({createAppointment, onReset, onSubmit }) => {
  return (
    <div className="button-group">
      <button
        onClick={onReset}
        className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ marginRight: "10px" }}
      >
        Reset
      </button>
      <button
        onClick={onSubmit}
        className="text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  );
};

export default ButtonGroup;
