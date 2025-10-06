// let h1 = document.querySelector("h1");


// // wet

// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.textAlign = "center";

// // manipulating multiple styles is
// dry

let h1 = document.querySelector("h1");


h1.style.cssText = `
    color: red;
    background-color: blue;
    font-size: 50px;
`;  