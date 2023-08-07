import React from "react";

function Greeting() {
    let date = new Date();
    date = date.getHours();
    let greeting = '';
    const cssStyle = {};

    if (date >= 1 && date < 12) {
        greeting = 'Good Morning';
        cssStyle.color = "green";
    } else if (date >= 12 && date < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = "orange";
    } else {
        greeting = 'Good Night';
        cssStyle.color = "black";
    }

    return (
        <div>
            <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    );
}

export default Greeting;
