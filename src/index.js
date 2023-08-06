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
// ReactDOM.render(
//     <>
//         <h1>Aditya Netflix picks</h1>
//         <h3>List of 5 best series</h3>
//         <p>
//             1. Dark <br />
//             2. Extra curricular <br />
//             3. My holo love <br />
//             4. My first 2 love <br />
//             5. Mr Robot
//         </p>
//     </>,
//     document.getElementById("root")
// );


//using order list


// ReactDOM.render(
//     <>
//         <h1>Aditya Netflix picks</h1>
//         <h3>List of 5 best series</h3>
//         <ol>
//             <li>Dark</li>
//             <li>Extra curricular</li>
//             <li>My holo love</li>
//             <li>My first 2 love</li>
//             <li>Mr Robot</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );


//React  Expression


// const name = 'Aditya';
// ReactDOM.render(
//     <>
//         <h1>My name is {name} </h1>
//     </>,
//     document.getElementById("root")
// );

//1.Variable Interpolation:
// const name = "John Doe";
// const age = 30;

// const element = (
//     <>
//         <h1>Hello, {name}!</h1>
//         <p>You are {age} years old.</p>
//     </>
// );

// // Output:
// // Hello, John Doe!
// // You are 30 years old.

// //2.Arithmetic Operations:
// const a = 10;
// const b = 5;

// const sum = <p>Sum: {a + b}</p>;
// const product = <p>Product: {a * b}</p>;

// // Output:
// // Sum: 15
// // Product: 50

// //3.Conditional Rendering:
// const isLoggedIn = true;

// const greeting = (
//     <>
//         {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
//     </>
// );

// // Output (if isLoggedIn is true):
// // Welcome back!

// // Output (if isLoggedIn is false):
// // Please log in.


// //4.Function Calls:
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const message = <p>{capitalize('hello, world!')}</p>;

// // Output:
// // Hello, world!

// //5.Array Mapping:
// const items = ['Apple', 'Banana', 'Orange'];

// const itemList = (
//     <ul>
//         {items.map((item, index) => (
//             <li key={index}>{item}</li>
//         ))}
//     </ul>
// );

// Output:
// - Apple
// - Banana
// - Orange

//6.Ternary Operator:
// const temperature = 25;

// const weatherMessage = (
//     <p>
//         {temperature > 30 ? 'It is hot' : 'It is cool'}
//     </p>

// );

// Output (if temperature is greater than 30):
// It is hot

// Output (if temperature is 30 or below):
// It is cool



// var h1 = document.createElement("h1");
// h1.innerHTML = "Aditya raj";
// document.getElementById("root").appendChild(h1);


//Tamplate literals
// const fname = 'Aditya';
// const lname = 'Raj';

// ReactDOM.render(
//     <>
//         <h1>{`My name is ${fname} ${lname}`}</h1>
//     </>,
//     document.getElementById("root")
// );

//challenge 2
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
        <h1>Hello, My name is Aditya Raj</h1>
        <p>
            {`todays date is ${date} `} <br />
            {`current time is ${time}`} <br />
        </p>
    </>,

    document.getElementById("root")
);