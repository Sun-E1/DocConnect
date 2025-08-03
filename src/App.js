import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorInfo from "./components/DoctorInfo"; // your file

import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-info/:id" element={<DoctorInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
