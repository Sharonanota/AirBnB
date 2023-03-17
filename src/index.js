import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


 ReactDOM.createRoot(document.getElementById("root")).render(<App  />)



// Props are like javascript arguments(allows us to reuse them throughut the code)

// function Appss() {

//     const date = new Date()
//     const hours = date.getHours() 
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
    
//     return (
//         <h1>Good {timeOfDay}</h1>
//     )


    // const date = new Date()
    
    // return (
    //     <h1>It is currently about {date.getHours() % 12} !</h1>
    // )
    // const firstName = "Joe"
    // const lastName = "Schmoe"
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */
    // return (
    //     <h1>Hello {firstName}  {lastName}!</h1>
    // )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Appss  />)

