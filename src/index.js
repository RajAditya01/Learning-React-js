import React from "react";
import ReactDOM from "react-dom";
import './index.css';

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

//challenge 2 l12
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <h1>Hello, My name is Aditya Raj</h1>
//         <p>
//             {`todays date is ${date} `} <br />
//             {`current time is ${time}`} <br />
//         </p>
//     </>,

//     document.getElementById("root")
// );


//L-13
//jsx Attribute
// const name = "Aditya";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

// ReactDOM.render(
//     <>
//         <h1 contentEditable={true}>My name is {name}</h1>
//         <img src={img1} alt="random Images" />
//         <img src={img2} alt="random Images" />
//         <img src={img3} alt="random Images" />
//     </>,
//     document.getElementById("root")
// );

// const name = "Aditya";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/220/300";
// const img5 = "https://picsum.photos/210/300";
// const img6 = "https://picsum.photos/255/300";

// ReactDOM.render(
//     <>
//         <h1 className="heading">{name} Gallery</h1>
//         <div className="imgDiv"><p>
//         <img src={img1} alt="random Images" />
//         <img src={img2} alt="random Images" />
//         <img src={img3} alt="random Images" />  <br />
//         <img src={img4} alt="random Images" />
//         <img src={img5} alt="random Images" />
//         <img src={img6} alt="random Images" /> </p>
//         </div>
//     </>,
//     document.getElementById("root")
// );

//challenge 3
//l-17

//show a heading that say hello sir, Good Morning, if time is between 1 to 11 am.
//Good afternoon, if 12pm to 7pm
//good night if 7pm till midnight
// Apply css in it then dynamically change the color of greeting part only using inline css style.Ex.green , orange, black etc...

// let date = new Date();
// date=date.getHours();
// let gretting='';

// const cssStyle= {};

// if(date >= 1 && date < 12){
//     gretting='Good Morning';
//     cssStyle.color="green";
// }else if(date >=12 && date <19){
//     gretting='Good Afternoon';
//     cssStyle.color="Orange";
// }else{
//     gretting='Good Night';
//     cssStyle.color="Black";
// }

// ReactDOM.render(
//     <> <div>
//     <h1>Hello sir, <span style={cssStyle}>{gretting}</span></h1>
//     </div>
//     </>,
//     document.getElementById("root")
// );

//using components
// import Greeting from "./App2";
// ReactDOM.render(<Greeting />, document.getElementById("root"));

//l-18
// components
// import App from "./App";
// ReactDOM.render(
//     <>
//     <App />
//     </>,
//     document.getElementById("root")
// );

//challenges l-22
// calculator
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// ReactDOM.render(
//     <>
//         <ul>
//             <li>Sum of two numbers is {add(40, 4)}</li>
//             <li>Subtraction of two numbers is {sub(30, 3)}</li>
//             <li>Division of two numbers is {div(10, 3)}</li>
//             <li>Multiplication of two numbers is {mult(10, 3)}</li>
//         </ul>
//     </>,
//     document.getElementById("root")
// );

// components
//import App2 from "./App2";

// ReactDOM.render(
//     <>
//     <ul>
//         <App2/>
//     </ul>
        
//     </>,
//     document.getElementById("root")
// );


//l-22
//props in react
//PROPS STAND FOR PROPERTY
//props is like a function and  javascript and attribute in html

function Card(){
    return(    
    <div className="cards">
        <div className="card">
            <img src="" alt="mypic" className="card__img" />  
            <div className="card__info">
                <span className="card__category">A Netflix Original Series</span>
                <h3 className="card__tittle">DARK</h3>
                <a href="https://www.netflix.com/watch/80114790?trackId=255824129" target="_blank">
                    <button> Watch Now</button>
                </a> 
            </div>     
        </div>
    </div>
    )
}

ReactDOM.render(
<>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</>,
    document.getElementById('root')
);