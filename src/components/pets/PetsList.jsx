import { useParams, useNavigate } from "react-router-dom"
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

  useEffect(() => {
    if(kind === "birds") {
      navigate("/pets/not_found")
    } 
  }, [])

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1; //position value is determined by weather the current value is a Cat kind or Dog kind
      acc[position].push(pet); //if the pet is Cat kind, it will be pushed into the 0 index subarray, Dog kind will be pushed into the 1 index subarray
      return acc; //accumulator return for next iteration
    },
    [[], []] //initial value is an array of 2 empty subarray
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
