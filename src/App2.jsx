// import React from "react";

// function Greeting() {
//     let date = new Date();
//     date = date.getHours();
//     let greeting = '';
//     const cssStyle = {};

//     if (date >= 1 && date < 12) {
//         greeting = 'Good Morning';
//         cssStyle.color = "green";
//     } else if (date >= 12 && date < 19) {
//         greeting = 'Good Afternoon';
//         cssStyle.color = "orange";
//     } else {
//         greeting = 'Good Night';
//         cssStyle.color = "black";
//     }

//     return (
//         <div>
//             <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
//         </div>
//     );
// }

// export default Greeting;


//calculator
import React from "react";
import ReactDOM from "react-dom";

function Calculator() {
    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function mult(a, b) {
        return a * b;
    }

    function div(a, b) {
        return a / b;
    }

    return (
        <ul>
            <li>Sum of two numbers is {add(40, 4)}</li>
            <li>Subtraction of two numbers is {sub(30, 3)}</li>
            <li>Division of two numbers is {div(10, 3)}</li>
            <li>Multiplication of two numbers is {mult(10, 3)}</li>
        </ul>
    );
}

export default Calculator;
