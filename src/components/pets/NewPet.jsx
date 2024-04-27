import { useState } from "react";
export default function NewPet () {
  //Need form for name, kind, breed, and generate a unique id

  //Generate ID
  const getRandomObjID = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let length = 7;
    let randomID = '';
    for(let i = 0; i < length; i++) {
      randomID += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return randomID;
  }
  //add useState to capture it in a new Obj
  const [newPet, setNewPet] = useState({
      id: getRandomObjID(),
      name: "",
      kind: "",
      breed: "",
      employeeId: "z7GIN_i",
  });

  console.log(newPet);
  return (
    <form action="">
      <label htmlFor="Name"></label>
      <input type="text" id="name" name="name" placeholder="Enter pet name..." required/>

      <label htmlFor="kind"></label>
      <select name="kind" id="kind" required>
        <option disabled>Select Kind</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <label htmlFor="breed"></label>
      <input type="text" id="breed" name="breed" placeholder="Enter breed..." required/>
      <button>Submit</button>
    </form>
  )
}