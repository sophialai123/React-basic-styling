import React from "react";

// Creta a Greeting componet function
function Greeting(){

  // To get current date and tiem, can change the date
  const date = new Date(2022, 2, 4, 10);
  const currentTime = date.getHours();

  // create a custom style to an empty string
  const customStyle = {
    color: ""
  };
  
  // create variable greeting
  let greeting;
  if (currentTime < 12) {
    greeting = "Good morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }


   //return the function output
    return(
        <h1 className="headings" style={customStyle}>
        {greeting}
        </h1>

    );
}


// export the file to index.js
export default Greeting;