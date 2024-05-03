import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

/*
  Components
*/
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import PetsList from "./components/pets/PetsList";
import StaffList from "./components/staff/StaffList";
import NotFound from "./components/common/NotFound.jsx";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";
import NewPet from "./components/pets/NewPet.jsx";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <Router>
      <div className="wrapper">
        <Nav />
          <Routes>
            <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
            <Route path="/staff" element={<StaffList employees={employees} />} />
            <Route path="/pets" element={<PetsList pets={pets} />}>
              <Route path="/pets/:kind" element={<PetsList pets={pets} />}/>
            </Route>
            <Route path="/pet_form" element={<NewPet />} />
            <Route path="/pets/not_found" element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
