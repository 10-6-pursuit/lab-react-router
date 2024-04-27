import { Link, useParams, useNavigate } from "react-router-dom"
import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {
  const navigate = useNavigate();
  let {kind} = useParams();

  useEffect(() => {
    if(!kind) {
      navigate("/pets/cats")
    } 
  }, [])

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  // console.log(kind);
  
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {kind === "cats" ? 
        cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))
        :
        dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
