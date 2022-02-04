//create a variale called pi
const pi = 3.1415962;

function doublePi(){
    return pi * 2;
}


function triplePi(){
    return pi * 3;
}

// export mutiple functions, only one default export
export default pi;
export {doublePi, triplePi};