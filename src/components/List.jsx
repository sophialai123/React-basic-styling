import React from "react";
import pi ,{doublePi, triplePi }from "./math.js";  //import mutiple files or functions 
import * as Calculator from "./Calculator";

// Creta a list componet function
function List() {
  return (
    <ul>
      <li> {pi}</li>

      {/* doublePi and triplePi are function, we have to use () */}
      <li> {doublePi()}</li> 
      <li> {triplePi()}</li>

      <li> This is Calculator function: {Calculator.add(2,3)}.</li>
      <li> This is Calculator function: {Calculator.mutiple(23,78)}.</li>  
      
    </ul>
  );
}

// export the file to index.js
export default List;