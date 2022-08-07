import React from "react";
import Address from "./Address";

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
  const phone = props.phone ? props.phone : "123-555-6789";
  const phoneLink = `tel:${phone}`;
  const email = props.email ? props.email : "noreply@no-email.com";
  const emailLink = `mailto:${email}`;

  return (
    <footer>
      <div>
        <h3>Contact Me</h3>
        <p>{blurb}</p>
      </div>
      <Address address={address} />
      <div>
        <div className="icon-pair">
          <div className="icon"></div>
          <a href={phoneLink}>{phone}</a>
        </div>
        <div className="icon-pair">
          <div className="icon"></div>
          <a href={emailLink}>{email}</a>
        </div>
      </div>
    </footer>
  );
}
