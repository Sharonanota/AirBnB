import React from "react"
import phone from './images/phone.svg';
import mail from './images/mail.svg';

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

export default function Contact(props) {
    // console.log(props)
    return (
       
        <div className="contact-card">
            <img src={props.img} alt="cat"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} alt="phone" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="mail" />
                <p>{props.mail}</p>
            </div>
        </div>
      
    )
}
// destructuring props



// export default function Contacts({img, name, phone, email}) {
//     return (
//         <div className="contact-card">
//             <img src={img}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }
//  const person = {
//      img: "./images/mr-whiskerson.png",
//      name: "Mr. Whiskerson",
//      phone: "(800) 555-1234",
//      email: "mr.whiskaz@catnap.meow"
//  }

//  const {email, name} = person
//  console.log(name)