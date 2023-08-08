import React from "react";

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
import {add, sub, mult, div } from "./Calculator";

function App2() {
    return (
        <>
            <ul>
                <li> {add(40, 4)} </li>
                <li> {sub(40, 4)} </li>
                <li> {mult(40, 4)} </li>
                <li> {div(40, 4)} </li>
            </ul>
        </>
    );
}

export default App2;
