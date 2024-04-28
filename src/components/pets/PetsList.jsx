import { useParams } from "react-router-dom";
import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const { animal } = useParams();

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        
        {animal === "cats" ? cats.map((cat) => (<Pet key={cat.id} kind="cat" pet={cat} />)) : 
        dogs.map((dog) => ( <Pet key={dog.id} kind="dog" pet={dog} />))}
        

        {/* All dogs section */}
      
      </section>
    </section>
  );
};

export default PetsList;
