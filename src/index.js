import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render('kya dikhana hai', 'kaha dikhana hai', 'call back');
//ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

//IN React v16 its possible for render() to return and array elements.

// ReactDOM.render(
//     <div>
//         <h1>Hello world!</h1>
//         <h2>Wellcomme to my react course</h2>
//         <p> I am aditya Raj</p> </div>,
//     document.getElementById("root"));

// Using ReactDOM.render to render an array of elements
// ReactDOM.render(
//     [
//         <h1 key="heading">Hello world!</h1>,
//         <h2 key="subheading">Welcome to my React course</h2>,
//         <p key="paragraph">I am Aditya Raj</p>
//     ],
//     document.getElementById("root")
// );

//React fragment
// ReactDOM.render(
//     <>
//         <h1 key="heading">Hello world!</h1>
//         <h2 key="subheading">Welcome to my React course</h2>
//         <p key="paragraph">I am Aditya Raj</p>
//     </>,
//     document.getElementById("root")
// );

//challenge 1
ReactDOM.render(
    <>
        <h1>Aditya Netflix picks</h1>
        <h3>List of 5 best series</h3>
        <p>
            1. Dark <br />
            2. Extra curricular <br />
            3. My holo love <br />
            4. My first 2 love <br />
            5. Mr Robot
        </p>
    </>,
    document.getElementById("root")
);

//
// var h1 = document.createElement("h1");
// h1.innerHTML = "Aditya raj";
// document.getElementById("root").appendChild(h1);
