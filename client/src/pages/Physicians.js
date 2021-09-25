import React from "react";
import ListLoader from "../components/ListLoader";


export default function Physicians() {

  return (
    <div>
      <h1>Physicians</h1>
      <ListLoader url="/api/physicians" renderData={(ph) => {
        return (
          <div key={ph.id}>
            <p>{ph.name}</p>
          </div>
          );
        }}
      />
    </div>
  );
}