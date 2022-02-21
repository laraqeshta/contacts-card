import React, { useState } from "react";

//style
import "./ContactsCard.css";

const ContactsCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={props.avatarUrl} />
      <div className="user-detailes">
        <p>Name: {props.name} </p>
        <p>Email:{props.email} </p>
        <div className="showage-btn">
          <button onClick={() => setShowAge(!showAge)}>Show Age</button>
          {showAge && <p>Age : {props.age}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
