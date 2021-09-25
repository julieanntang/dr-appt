import React from "react";
import ListLoader from "../components/ListLoader";

export default function Appointments() {
  

  return (
    <div>
      <h1>Appointments</h1>
      <ListLoader url="/api/appointments" renderData={(a) => {
        return (
          <div key={a.id}>
            <p>
              {a.patient.name} has an apppointment with {a.physician.name} on
            </p>
          </div>
          );
        }}
      />
    </div>
  );


}


