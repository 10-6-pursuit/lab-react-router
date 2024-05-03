import React from "react";
import "./PetsListNav.css";
import { Link } from 'react-router-dom';
import { petData } from "../../data/pets";


export const PetsListNav = () => {
  const cats = petData.filter((pet) => pet.kind === "Cat");
  const dogs = petData.filter((pet) => pet.kind === "Dog");


  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
