import axios from "axios";
import React, { useState } from "react";


const NewPatient = (props) => {
  console.log(props)
  let url = props.match.url
  url = url.replace("new","")
  console.log(url);
  const [name, setName] = useState("")
  

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("/api/patients", {name})
      props.history.push("/patients")
    } catch (err) {
      console.log(err)
    };
  }
    
  return (
    <div>
      <h1>{"New Patient"}</h1>
      <form onSubmit={handleSubmit}>
        <p>Patient Name</p>
        <input value={name}
        onChange = {(e) => {
          setName(e.target.value)}}
        />
      <br></br>
      <button>{"Add"}</button>
      </form>
    </div>
  );
    
};
  

export default NewPatient;