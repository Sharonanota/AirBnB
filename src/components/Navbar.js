import React from "react"
import airbnb2 from '../components/images/airbnb2.png';




export default function Navbar() {
    return (
        <nav>
            <img src={airbnb2} className="nav--logo" alt="logo"/>
        </nav>
    )
}