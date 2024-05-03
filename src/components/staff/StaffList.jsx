import React from "react";
import Staffer from "./Staffer";
import { Link } from "react-router-dom";
import "./StaffList.css";

export const StaffList = ({ employees }) => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <section className="staff-list">
      <Link to="/staff"></Link>
      <h2>Our Staff</h2>
      <div className="staffers">{staff}</div>
    </section>
  );
};

export default StaffList;
