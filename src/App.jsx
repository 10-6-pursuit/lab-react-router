import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*
  Components
*/
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import StaffList from './components/staff/StaffList';
import PetsList from './components/pets/PetsList';

/*
Data
---------------
Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from './data/employees.js';
import { ownerData } from './data/owners';
import { petData } from './data/pets';

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      <Home employees={employees} owners={owners} pets={pets} />
      <StaffList employees={employees} />
      <Router>
        <PetsList pets={pets} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
