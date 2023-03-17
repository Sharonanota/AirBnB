import React from "react"
import Hero from "./components/Hero";

import Navbar from './components/Navbar';

import data from "./data"

import Card from './components/Card';
// import Contact from './components/Contact';








/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App(props) {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
               item ={item}

            // objects in props get rid of all the item in the card
            // {...item}
            />
        )
    })



    return (
      <div className="cardy">
      

                {/* <Contact 
                img="images/dog44.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"/>



<Contact 
                 img="/images/dogs.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                 img="/images/flowers.jpg"
                name="FelixAnota"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="/images/cat4.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            /> */}
            
       <Navbar  />

       <Hero  />

       <section className="cards-list">
                {cards}
            </section>
 
       </div>

       
    )
}
