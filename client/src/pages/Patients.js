import React from "react";
import ListLoader from "../components/ListLoader";


export default function Patients() {

  
  return (
    <div>
      <h1>Patients</h1>
      <ListLoader url="/api/patients" renderData={(p) => {
        return (
          <div key={p.id}>
            <p>{p.name}</p>
          </div>
          );
        }}
      />
    </div>
  );
}