import React from 'react';
import ReactDOM from 'react-dom/client';

//ReactDOM.render('kya dikhana hai','kaha dikhana hai', 'call back');
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

//2
var h1=document.createElement("h1");
h1.innerHTML="Aditya raj";
document.getElementById("root").apendChild(h1);