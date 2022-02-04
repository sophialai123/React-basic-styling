import React from "react";
import ReactDOM from "react-dom";


const fname = "Sophia";
const lname = "Lai";

// to get current year and date use jS new Date()
const CURRENTYEAR = new Date();
const year = CURRENTYEAR.getFullYear();


// to create some images
const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/id/1/200/300";

//create a styling variable, the values have to be string
const customStyle = {
    color:"blue",
    fontSize:"20px",
    border:"1px solid black"
};

//To update the style values
customStyle.color = "green";



/*  Practice::
Create a React app from scratch.
Show a single h1 that says "Good morning" if between midnight and 12PM.
or "Good Afternoon" if between 12PM and 6PM.
or "Good evening" if between 6PM and midnight.
Apply the "heading" style in the styles.css
Dynamically change the color of the h1 using inline css styles.
Morning = red, Afternoon = green, Night = blue.
*/

// To get current date and tiem, can change the date
const date = new Date(2022, 2, 4, 10);
const currentTime = date.getHours();

// create a custom style to an empty string
const customStyle2 = {
  color: ""
};


// Use if statement
let greeting;
if (currentTime < 12) {
  greeting = "Good morning";
  customStyle2.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle2.color = "green";
} else {
  greeting = "Good Night";
  customStyle2.color = "blue";
}



//render only take one sigle html element.
ReactDOM.render(
    <div>

       {/* Use ES6 to add two variable together */} 
        <p>This is {`${fname} ${lname}`} </p>
        <p> This is {fname} {lname}</p>
        <p>Copyright {year}</p>
      
        {/* Create className in JXS way*/} 
        <h1 className="heading" contentEditable="true" spellCheck="true">
        Display pictures are:
        </h1>

         {/* Adding attributes and styling react elements*, the image must have a close / in the end.*/} 
        <div>
        <img className="imge" alt="food" src={img1} />
    
        {/* Create a grayclace image */}
        <img className="imge" alt="computer" src={img2 + "?grayscale"} />
        </div>

        {/* Adding inline styling for react element. */}
        <h2 style={customStyle}>This is inline style example</h2>


        {/* Adding inline styling practice. */}
        <h3 className="headings" style={customStyle2}>
        {greeting}
       </h3>


    </div>,
    document.getElementById("root")
);
    
    