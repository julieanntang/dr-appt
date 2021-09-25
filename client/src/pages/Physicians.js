import React from "react";
import ListLoader from "../components/ListLoader";


export default function Physicians() {
  
  return (
    <div>
      <h1>Physicians</h1>
      <ListLoader url="/api/physicians" renderData={(p) => {
        return (
          <div>
            <p>{p.name}</p>
          </div>
          );
        }}
      />
    </div>
  );
}