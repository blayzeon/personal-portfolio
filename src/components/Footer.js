import React from "react";
import Address from "./Address";
import Ul from "./Ul";

export default function Footer(props) {
  const address = props.address
    ? props.address
    : {
        street: "1234 N Road",
        address2: "Apt 12",
        city: "City",
        state: "State",
        zip: "12345",
      };
  const blurb = props.blurb
    ? props.blurb
    : "Please get in touch if you think our work could be mutually beneficial!";
  return (
    <footer className="flex spaced">
      <ul className="flex-list column large-gap">
        <li>
          <div>
            <h3>Contact Me</h3>
            <p>{blurb}</p>
          </div>
        </li>
        <li>
          <Address address={address} />
        </li>
        <li>
          <Ul items={props.contact} direction="column" />
        </li>
        <Ul items={props.socials} />
      </ul>
      {props.img ? <img src={props.img} /> : null}
    </footer>
  );
}
