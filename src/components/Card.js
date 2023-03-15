import React from "react"

import kate from './katie-zaferes.png';

import star from './star.png';




export default function Card() {
    return (
        <div className="card">
        <img src={kate} alt="kate" className="card--image"/>
        <div className="card--stats">
        <img src={star} alt="star" className="card--star"/>
        <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        
        </div>
      
    )
}
