import logo from "./logo.svg";
import "./App.css";
import ViewPatientProfile from "./modules/patientDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./modules/appointment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppointmentBooking from "./modules/appointment";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ViewPatientProfile />} />
            <Route path="/appoint/:id" element={<AppointmentBooking />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
