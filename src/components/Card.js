import React from "react"

// import kate from './images/katie-zaferes.png';

import star from './images/star.png';






export default function Card(props) {
    let badgeText
    if (props.item.openSpots  === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.country === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" alt="img" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="img" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}