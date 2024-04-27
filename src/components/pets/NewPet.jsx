import { useState } from "react";
export default function NewPet ({pets}) {
  const [petData, setPetData] = useState(pets)
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

  function handleInput(e){
    setNewPet({
      ...newPet,
      [e.target.id]: e.target.value
    })
  }

  function resetForm(){
    setNewPet({
      id: getRandomObjID(),
      name: "",
      kind: "",
      breed: "",
      employeeId: "z7GIN_i",
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleInput();
    resetForm();
    setPetData({
      ...petData,
      newPet
    })
  }
  console.log(petData);

  console.log(newPet);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name"></label>
      <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="Enter pet name..." 
      value={newPet.name} 
      onChange={handleInput}
      required/>

      <label htmlFor="kind"></label>
      <select name="kind" id="kind" value={newPet.kind} onChange={handleInput} required>
        <option disabled>Select Kind</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <label htmlFor="breed"></label>
      <input 
      type="text" 
      id="breed" 
      name="breed" 
      placeholder="Enter breed..." 
      value={newPet.breed} 
      onChange={handleInput}
      required/>
      <button>Submit</button>
    </form>
  )
}