import logo from "./logo.svg";
import "./App.css";
import ViewPatientProfile from "./modules/patientDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./modules/appointment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ViewPatientProfile />} />
            <Route path="/appoint" element={<Appointment />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
